const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Notes = require("./model/notes");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017");

app.get("/", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (error) {
    res.status(500).send("Error fetching notes from the database");
  }
});

app.post("/addnotes", async (req, res) => {
  const data = req.body;
  try {
    const newNote = new Notes({
      title: data.title,
      description: data.des,
    });
    await newNote.save();
    res.send("Note added successfully");
  } catch (error) {
    console.error("Error adding a new note:", error); // Log the error for better diagnosis
    res.status(500).send("Error adding a new note: " + error.message); // Send more specific error messages to the client
  }
  console.log(data)
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedNote = await Notes.findByIdAndRemove(req.params.id);
    if (!deletedNote) {
      return res.status(404).send("Note not found");
    }
    res.send("Note deleted successfully");
  } catch (error) {
    res.status(500).send("Error deleting the note");
  }
});

app.put("/edit/:id", async (req, res) => {
  const { title, description } = req.body;
  try {
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).send("Note not found");
    }
    res.send("Note updated successfully");
  } catch (error) {
    res.status(500).send("Error updating the note");
  }
});

app.listen(3000, () => {
  console.log("Server is running");
});
