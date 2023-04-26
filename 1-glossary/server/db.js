const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:3000/glossary') // note: update to process.env once working
// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
});

const Word =  mongoose.model('Word', glossarySchema);

// 3. Export the models
module.exports.Word = Word;


// 4. Import the models into any modules that need them
