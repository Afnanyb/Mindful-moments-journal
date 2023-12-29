import express, { json } from "express";
import cors from "cors";
import knex from "knex";
import { development } from "./knexfile";

const db = knex(development);
const app = express();

app.use(cors());
app.use(json());

// Create
app.post("/entries", async (req, res) => {
  try {
    const [id] = await db("entries").insert(req.body);
    const entry = await db("entries").where({ id }).first();
    res.status(201).json(entry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding entry." });
  }
});

// Read
app.get("/entries", async (req, res) => {
  try {
    const entries = await db("entries");
    res.status(200).json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting entries." });
  }
});

// Update
app.put("/entries/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db("entries").where({ id }).update(req.body);
    const updatedEntry = await db("entries").where({ id }).first();
    res.status(200).json(updatedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating entry." });
  }
});

// Delete
app.delete("/entries/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEntry = await db("entries").where({ id }).first();
    await db("entries").where({ id }).del();
    res.status(200).json(deletedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting entry." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
