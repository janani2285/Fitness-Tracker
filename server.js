const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("*", (req,res) => {
    res.send("<h1> HELLO, WORLD</h1>")
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));