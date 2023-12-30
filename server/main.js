import express from "express";
import cors from "cors";
import knex from "knex";
import knexfile from "./knexfile.js";
const db = knex(knexfile);
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {
  response.send("Home");
});
app.post("/journalentry", (request, response) => {});

app.listen(8080, () => {
  console.log("listning to ejhdjk");
});
