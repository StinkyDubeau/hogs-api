import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { MongoClient, ServerApiVersion } from "mongodb";

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

async function insertOne(jsonData, collectionString) {
  let response;
  const target = db.collection(collectionString);

  try {
    await client.connect();
    response = await target.insertOne(jsonData);
  } catch {
    console.log(`Could not insert into collection "${collectionString}".`)
  } finally {
    await client.close();
    return response;
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


const fakeLeaderboardRequest = {
  "status": "200",
  "level": "c1_victoria",
  "user_id": "user_id_of_player_making_request",
  "sort_by": "points",
  "columns": {
    "0": "username",
    "1": "points",
    "2": "time",
    "3": "game_version",
    "4": "gamemode"
  }
}


// GET LEADERBOARD
app.get("/api/score", (req, res) => {
  console.log("ENDPOINT: Getting a leaderboard.");
  res.status(500).send({
    "status": "500",
    "message": "Not implemented yet."
  })
});

// POST USER
app.post("/api/user", async (req, res) => {
  console.log("ENDPOINT: Posting a user.");
  res.status(500).send({
    "status": "500",
    "message": "Not implemented yet."
  })
});

const fakeScore = {
  "user_id": "jaked",
  "level": "c2_bridge",
  "time": 696969,
  "points": 2323,
  "gamemode": "story",
  "game_version": "0.2.0"
}

// POST SCORE
app.post("/api/score", async (req, res) => {
  console.log("ENDPOINT: Posting a score.");

  let response;
  try {
    response = await insertOne(fakeScore, "scores");

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

app.listen(port, (req, res) => {
  console.log(`Running on port ${port}.`);
});