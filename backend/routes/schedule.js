const express = require("express");
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(process.env.mongodb);
client.connect();

const router = express.Router();

router.use(async (req, res, next) => {
    req.db = client.db("main").collection("schedules");
    next();
});

router.get("/", (req, res) => {
    
});

router.post("/", (req, res) => {
});

router.put("/", (req, res) => {
});

router.delete("/", (req, res) => {
});

module.exports = router;
