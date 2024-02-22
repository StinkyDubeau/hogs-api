import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { MongoClient, ServerApiVersion } from "mongodb";

const port = process.env.PORT || 3001;
const app = express();
const uri = process.env.CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
const db = client.db("hogs-api");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

async function run() {
  try {
    // Connect to mongo
    await client.connect();
    // Ping the mongo to confirm connection
    await client.db("admin").command({ ping: 1 });
    console.log("Database connection established.");
  } finally {
    await client.close();
    //console.log("Database connection closed.");
  }
}
run().catch(console.dir);

async function insertIntoDatabase(data) {
  try {
    await client.connect();

    await db.collection("scores").insertOne(data);

  } finally {
    await client.close();
  }
}

// GET HOMEPAGE
app.get("/", (req, res) => {
  console.log("ENDPOINT: Getting homepage.");
  res.render("index.ejs");
});

// GET HOMEPAGE
app.get("/admin", (req, res) => {
  console.log("ENDPOINT: Getting admin page.");
  res.render("admin.ejs");
});

// GET LEADERBOARD
app.get("/api/score", (req, res) => {
  console.log("ENDPOINT: Getting a leaderboard.");
  res.json(
    {
      "status": "200"
    }
  )
});

// POST USER
app.post("/api/user", async (req, res) => {
  console.log("ENDPOINT: Posting a user.");
  res.json(
    {
      "status": "200"
    }
  )
});

// POST SCORE
app.post("/api/score", async (req, res) => {
  console.log("ENDPOINT: Posting a score.");
  await insertIntoDatabase(
    {
      "user_id": 12345678901234567,
      "level": "c1_victoria",
      "time": 240000,
      "points": 5020,
      "gamemode": "story",
      "game_version": "0.2.0"
    }
  );
  console.log("Done inserting into database");
  res.json(
    {
      "status": "200"
    }
  )
});

app.listen(port, (req, res) => {
  console.log(`Running on port ${port}.`);
});