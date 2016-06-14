var Scrabble = require('../lib/scrabble')
var scrabble = new Scrabble(); 

var ScrabbleController = {

  getIndex: function (req, res, next) {
    res.render('index', {title: 'Scrabble'})
  }, 

  getChart: function (request, response) {
    var locals = {}; 
    locals.title = "Scoring Chart"; 
    response.render('chart', locals); 
  },

  getScore: function (request, response) {
    var locals = {}
    locals.title = "Score a Word";
    response.render('score', locals); 
  },

  postScore: function (request, response) {
    var locals = {}
    locals.title = "Score a Word";
    if (request.body.word) {
      var word = request.body.word
    } else {
      var word = request.params.word
    }
    locals.word = word
    locals.score = scrabble.score(word)

    if (locals.score === 'this is not valid input!') {
      response.render('error')
    } else {
      response.render('score', locals)
    }
  }
}
  
  module.exports = ScrabbleController