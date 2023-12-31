import express, { request } from "express";
import cors from "cors";
import knex from "knex";
import knexfile from "./knexfile.js";
import bcrypt from "bcrypt";
const db = knex(knexfile);
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (request, response) => {
  response.send("Home");
});
app.post("/journalentry", (request, response) => {});

app.post("/sign-up", async (request, response) => {
  await db("users").insert({
    name: request.body.name,
    password: await bcrypt.hash(request.body.password, 10),
  });

  response.send("user inserted");
});
app.listen(8080, () => {
  console.log("listning on port 8080");
});
