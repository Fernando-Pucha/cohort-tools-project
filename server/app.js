import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from 'cors' 
import cookieParser from "cookie-parser";
const PORT = 5005;
import cohortsData from "./cohorts.json" assert { type: 'json' };
import studentsData from './students.json'assert { type: 'json' };

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...


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

app.get("/api/cohorts", (req, res) => {
  res.json(cohortsData)
})

app.get("/api/students", (req, res) => {
  res.json(studentsData)
})

/* app.use('/*', (req, res)=> {
  res.status(404).sendFile(__dirname + '/views/not-found.html')
  }) */

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});