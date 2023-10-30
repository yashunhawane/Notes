const mongoose = require("mongoose");

const notes = new mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Notes", notes);
