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
app.post("/sign-in", async (request, response) => {
  console.log(123, request.body);
  // const hashPassword = await bcrypt.hash(request.body.password, 10);
  // response.send("signed in");
  const user = await db("users")
    .where({
      name: request.body.name,
      // password: hashPassword,
    })
    .select("id", "password");
  console.log({ user });
  const match = await bcrypt.compare(request.body.password, user[0].password);
  if (!match) {
    response.status(401).send("user not found");
  } else {
    response.status(200).json(user);
  }
});
app.listen(8080, () => {
  console.log("listning on port 8080");
});
