const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const app = express();

app.get("*", (req,res) => {
    res.send("<h1> HELLO, WORLD</h1>")
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));