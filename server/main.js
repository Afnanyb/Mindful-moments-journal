import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.send("Home");
});
app.listen(8080, () => {
  console.log("listning to ejhdjk");
});
