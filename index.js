import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = process.env.PORT || 3001;
const app = express();

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


// GET HOMEPAGE
app.get("/", (req, res) => {
  console.log("ENDPOINT: Getting homepage.");
  res.render("index.ejs");
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
app.post("/api/score", (req, res) => {
  console.log("ENDPOINT: Posting a score.");
  res.json(
    {
      "status": "200"
    }
  )
});

app.listen(port, (req, res) => {
  console.log(`Running on port ${port}.`);
});