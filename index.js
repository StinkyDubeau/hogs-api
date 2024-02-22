import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// GET HOMEPAGE
app.get("/", (req, res) => {
  console.log("Loading \"/\"");
  res.render("index.ejs");
});

app.post("/userLookup", async (req, res) => {
  var response = req.body.username + "'s user ID is " + req.uuid;
  console.log(response);
  res.render("index.ejs", {
    hypixel: translateJSON(req.hypixel)
  });
  //res.redirect("/");
});

app.listen(port, (req, res) => {
  console.log(`Running on port: ${port}`);
});