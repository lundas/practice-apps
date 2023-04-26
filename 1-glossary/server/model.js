const { Word } = require('./db.js');

module.exports = {
  getAll: function () {
    return Word.find({}).exec();
  },
  createWord: function (wordObj) {
    return Word.create(wordObj);
  },
  updateWord: function (wordObj) {
    return Word.updateOne({ word: wordObj.word }, { definition: wordObj.definition }).exec();
  },
  deleteWord: function (wordObj) {
    return Word.deleteOne({ word: wordObj.word });

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