import express, { request } from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Home");
});
app.listen(8080, () => {
  console.log("listning to ejhdjk");
});
