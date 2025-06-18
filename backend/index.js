require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
    res.send("meow meow");
});

app.use("/schedule", require("./routes/schedule.js"));

app.use((req, res) => {
  res.status(404).send("meow meow - Not Found");
});