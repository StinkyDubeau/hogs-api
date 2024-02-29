import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { MongoClient, ServerApiVersion } from "mongodb";
import {fakeScores, fakeScore, fakeLeaderboardRequest } from './helpers/fakeData.js';

const port = process.env.PORT || 3001;
const app = express();
const uri = process.env.CONNECTION_STRING;
const key = process.env.API_KEY;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
const db = client.db("hogs-api");

// Middlewares
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(authenticate);

async function authenticate(req, res, next) {
  req.key = req.header("API_KEY");
  if (!req.path.startsWith("/api/")) {
    // Allow non-api traffic to access server
    next();
    return;
  }
  if (req.key === key) {
    console.log("User authenticated")
    next();
  } else {
    console.log(`AUTHENTICATION: User denied access. User tried to use "${req.key}".`)
    res.status(401).send({
      "message": "Access denied. Check that API_KEY is in header and is up to date."
    })
  }
}

async function readMany(query, options, collectionString) {
  let response;
  const target = db.collection(collectionString);

  try {
    await client.connect();

    console.log(`Found ${await target.countDocuments(query)} matching results.`)

    response = await target.find({});

    if(await target.countDocuments({}) === 0){
      
      
    }

  } catch {
    console.log(`ERR: Could not read (many) from "${collectionString}".`)
  } finally {
    await client.close();
    return response;
  }
}

async function createOne(jsonData, collectionString) {
  let response;
  const target = db.collection(collectionString);

  try {
    await client.connect();
    response = await target.insertOne(jsonData);
  } catch {
    console.log(`ERR: Could not create in collection "${collectionString}".`)
  } finally {
    await client.close();
    return response;
  }
}

async function postFakeScores(){
  for (let i = 0; i < fakeScores.length; i++) {
    await createOne(fakeScores[i], "scores");
  }
}

// GET HOMEPAGE
app.get("/", (req, res) => {
  console.log("ENDPOINT: Getting homepage.");
  res.render("index.ejs");
});

// GET ADMIN PAGE
app.get("/admin", (req, res) => {
  console.log("ENDPOINT: Getting admin page.");
  res.render("admin.ejs");
});

// GET LEADERBOARD
app.get("/api/scores", async (req, res) => {
  console.log("ENDPOINT: Getting a leaderboard.");

  let response;

  const options = {
    sort: {

    },
    projection: { // What columns

    }
  };

  // Insert narrowers into query
  const query = {
    user_id: "john_highscore_getter",
    game_version: "0.2.0",
    level: "c1_victoria"
  }
  console.log("req body:");
  console.log(query);

  response = await readMany(query, options, "scores");
  //console.log(response);

  res.status(500).send({ "message": "none" })
});

// POST USER
app.post("/api/user", async (req, res) => {
  console.log("ENDPOINT: Posting a user.");
  res.status(500).send({
    "status": "500",
    "message": "Not implemented yet."
  })
});

// POST SCORE
app.post("/api/score", async (req, res) => {
  console.log("ENDPOINT: Posting a score.");

  let response;
  try {
    response = await createOne(fakeScore, "scores");

    res.status(200).send({
      "status": "200",
      "_id": response.insertedId,
      "message": "Submitted a new score."
    })
  } catch {
    console.log("There was an error posting a score.");
    res.status(500).send({
      "status": "500",
      "message": "There was an error posting a score."
    })
  }
});

app.post("/api/scores", async (req, res, next) => {
  console.log("ENDPOINT: Posting many scores. This may take a while.");

  await postFakeScores();
  console.log("done!");
  next();
});

app.listen(port, (req, res) => {
  console.log(`Running on port ${port}.`);
});