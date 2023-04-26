require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// app.get()
// app.post()
// app.put()
// app.delete()
app.options('/', (req, res) => {
  res.sendStatus(204);
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
