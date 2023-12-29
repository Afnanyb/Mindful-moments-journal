import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const knex = require("knex");
const dbParems = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "",
    database: "knex-test",
  },
};
app.use(cors());
app.use(bodyParser.json());
app.get("/", (request, response) => {
  response.send("Home");
});
app.post("/journalentry", (request, response) => {});

app.listen(8080, () => {
  console.log("listning to ejhdjk");
});
