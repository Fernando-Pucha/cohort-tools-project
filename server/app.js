import express, { json, urlencoded } from "express";
import 'dotenv/config';
import morgan from "morgan";
import cors from 'cors'
import cookieParser from "cookie-parser";
const PORT = 5005;
/* import cohortsData from "./cohorts.json" assert { type: 'json' };
import studentsData from './students.json'assert { type: 'json' }; */
import mongoose from "mongoose";
import Cohorts from "./models/Cohorts.model.js";
import Students from "./models/Students.model.js";


const ATLAS_DB_URL = process.env.ATLAS_URL;
console.log("la url es", ATLAS_DB_URL)
// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...
mongoose
  /*   .connect("mongodb://127.0.0.1:27017/mini-project-db") */
  /* .connect("mongodb+srv://equipoB:123amarillo@cluster0.bevj6.mongodb.net/mini-project-db?retryWrites=true&w=majority&appName=mini-project-db") */
  .connect(ATLAS_DB_URL)
  .then(x => console.log(`Connected to Database: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to MongoDB", err));


// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();


// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5005'], // Add the URLs of allowed origins to this array
  })
);


// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

/* app.get("/api/cohorts", (req, res) => {
  res.json(cohortsData)
}) */
app.get("/api/cohorts", (req, res) => {
  Cohorts.find({})
    .then((cohorts) => {
      console.log("Retrieved Cohorts ->", cohorts);
      res.json(cohorts);
    })
    .catch((error) => {
      console.error("Error while retrieving Cohorts ->", error);
      res.status(500).json({ error: "Failed to retrieve Cohorts" });
    });
});

/* app.get("/api/students", (req, res) => {
  res.json(studentsData)
}) */

app.get("/api/students", (req, res) => {
  Students.find({})
    .then((student) => {
      console.log("Retrieved Students ->", student);
      res.json(student);
    })
    .catch((error) => {
      console.error("Error while retrieving Students ->", error);
      res.status(500).json({ error: "Failed to retrieve Students" });
    });
});

/* app.use('/*', (req, res)=> {
  res.status(404).sendFile(__dirname + '/views/not-found.html')
  }) */

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});