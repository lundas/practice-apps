const { Word } = require('./db.js');

module.exports = {
  getAll: function () {
    return Word.find({}).exec();
  },
  createWord: function (word) {
    return Word.create(word);
  },
  updateWord: function (word) {

  },
  deleteWord: function (word) {

  },
  _initWords: function () {
    var words = [
      {
        word: 'shenanigans',
        definition: 'silly or high-spirited behavior; mischief'
      }, {
        word: 'tomfoolery',
        definition: 'foolish or silly behavior'
      }
    ]
    return Word.create(words);
  }
}

// run init function to seed db for testing
// module.exports._init();