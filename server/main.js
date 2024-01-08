import express, { request } from "express";
import cors from "cors";
import knex from "knex";
import knexfile from "./knexfile.js";
import bcrypt from "bcrypt";
const db = knex(knexfile);
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
  response.send("Home");
});

app.post("/sign-up", async (request, response) => {
  await db("users").insert({
    name: request.body.name,
    password: await bcrypt.hash(request.body.password, 10),
  });

  response.send("user inserted");
});
app.post("/sign-in", async (request, response) => {
  console.log(123, request.body);
  //  I left the hashpass commented for me later
  const hashPassword = await bcrypt.hash(request.body.password, 10);
  response.send("signed in");
  const user = await db("users")
    .where({
      name: request.body.name,
      // password: hashPassword,
    })
    .select("id", "password");
  const match = await bcrypt.compare(request.body.password, user[0].password);
  if (!match) {
    response.status(401).send("user not found");
  } else {
    response.status(200).json(user);
  }
});
app.post("/journalentry", async (request, response) => {
  const { entryText, mood, userId } = request.body;
  try {
    const insertedEntry = await db("journal_entries").insert({
      journalentry: entryText,
      mood: mood,
      // user_id: userId,
      // created_at: new Date(),
    });

    response.status(201).json({ id: insertedEntry[0] });
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
});
app.get("/journalentries", async (request, response) => {
  const data = await db("journal_entries");
  response.json(data);
});

app.get("/journalentries/:userId", async (request, response) => {
  const userId = request.params.userId;
  try {
    const entries = await db("journal_entries").where("user_id", userId);
    response.status(200).json(entries);
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
});

app.put("/journalentries/:entryId", async (request, response) => {
  const entryId = request.params.entryId;
  const { entryText, mood } = request.body;
  try {
    await db("journal_entries")
      .where("id", entryId)
      .update({ journalentry: entryText, mood });
    response.status(200).json({ message: "Entry updated successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
});
app.delete("/journalentries/:entryId", async (request, response) => {
  const entryId = request.params.entryId;
  try {
    await db("journal_entries").where("id", entryId).del();
    response.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).send("Internal Server Error");
  }
});

app.listen(8080, () => {
  console.log("listning on port 8080");
});
