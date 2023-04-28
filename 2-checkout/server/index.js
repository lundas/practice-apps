require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const model = require("./model");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/checkout', (req, res) => {
  console.log('POST request received:', req);
  const data = Object.assign(req.body, { s_id: req.session_id });
  console.log('Data obj:', data);
  model.create('responses', data)
    .then((results) => {
      console.log(`Successfully created ${req.session_id}`)
      res.status(201).json(results);
    })
    .catch((err) => {
      if (err.errno === 1062) {
        res.status(409).send(`Form ${req.session_id} has already been submitted`);
      } else {
        console.log(`Error creating ${req.session_id}:`, err);
        res.sendStatus(400);
      }
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
