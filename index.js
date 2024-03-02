import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import { MongoClient, ServerApiVersion } from "mongodb";
import { fakeScores, fakeScore, fakeLeaderboardRequest } from './helpers/fakeData.js';

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

// Helper functions
function removeEmpty(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

// Middleware
app.use(express.static("./public"));
app.use(cors());
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
    // User authenticated
    next();
  } else {
    console.log(`AUTHENTICATION: User denied access. User tried to use key "${req.key}".`)
    res.status(401).send({
      "message": "Access denied. Check that API_KEY is in header and is up to date."
    })
  }
}

async function readMany(query, options, collectionString, howManyRows) {
  let responses = [];
  const target = db.collection(collectionString);

  try {
    await client.connect();

    if (await target.countDocuments(query) === 0) {
      console.log(`WARN: No results matched your query`);
    }

    const response = await target.find(query);

    for await (const doc of response) {
      if (responses.length >= howManyRows) {
        return responses;
      }
      responses.push(doc);
    }

  } catch {
    console.log(`ERR: Could not read (many) from "${collectionString}".`)
  } finally {
    await client.close();
    return responses;
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

async function postFakeScores() {
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

  let response = [];

  try {
    const options = {
      sort: { points: 0 },
      projection: { // What columns

      }
    };

    // Insert narrowers into query
    const query = removeEmpty({
      user_id: req.body.user_id,
      level: req.body.level,
      game_mode: req.body.game_mode,
      game_version: req.body.game_version
    });

    response = await readMany(query, options, "scores", req.body.rows);
    console.log(response.length);

    res.status(200).send(response)
  } catch {
    console.log("ERR: Failed to load leaderboard");
    res.status(500).send({ "status": "500", "message": "ERR: Failed to load leaderboard" })
  }
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

app.post("/api/loadFakeScores", async (req, res, next) => {
  console.log("ENDPOINT: Posting fake scores. This may take a while.");

  await postFakeScores();
  console.log("done!");
  next();
});

app.listen(port, (req, res) => {
  console.log(`Running on port ${port}.`);
});