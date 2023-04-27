require("dotenv").config();
const express = require("express");
const path = require("path");
const model = require("./model.js")

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get('/glossary', (req, res) => {
  model.getAll()
    .then((response) => {
      // console.log('Mongo find response: ', response);
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log('app.get error: ', err);
      res.sendStatus(400);
    })
});
app.post('/glossary', (req, res) => {
  // console.log(req.body)
  model.createWord(req.body)
    .then(console.log(`${req.body.word} added to db`))
    .then(res.sendStatus(201))
    .catch((err) => {
      console.log('app.post error: ', err);
      res.sendStatus(400);
    });
})
app.put('/glossary', (req, res) => {
  model.updateWord(req.body)
    .then(console.log(`${req.body._id} entry updated`))
    .then(res.sendStatus(204))
    .catch((err) => {
      console.log('app.put error: ', err);
      res.sendStatus(400);
    })
})
app.delete('/glossary', (req, res) => {
  console.log('***DEL req body:', req.body);
  model.deleteWord(req.body)
    .then(console.log(`${req.body.word} entry deleted`))
    .then(res.sendStatus(204))
    .catch((err) => {
      console.log('app.delete error: ', err)
      res.sendStatus(400);
    })
})
app.options('/glossary', (req, res) => {
  res.sendStatus(204);
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
