var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')

/* GET home page. */
// a callback
router.get('/', Controller.getIndex) 

// GET the chart page 
router.get('/scrabble/chart', Controller.getChart); 

// GET the score page 
router.get('/scrabble/score', Controller.getScore); 

// POST to the score page 
router.post('/scrabble/score', Controller.postScore); 

// GET the score page 
router.get('/scrabble/score/:word', Controller.getScore); 

// POST to the score page 
router.post('/scrabble/score/:word', Controller.postScore); 

// GET the error page 
router.get('/scrabble/score/error', Controller.getScore); 
module.exports = router;



// Implement a home page (GET /) that has at least one (preferably cute) image and a navigation that links to the static GET routes below.
// Implement a route file and controller file for a ScrabbleController that responds to these routes:
// GET /scrabble/chart: shows the letter score chart
// GET /scrabble/score: shows a form allowing a user to submit a word for scoring
// POST /scrabble/score: processes the user input and renders either
// a page showing the user submitted word and it's score or
// in the case of something it can't score, an error page with an "unscorable word" message
// GET /scrabble/score/:name: A dynamic route that scores whatever word is passed into the :name portion of the dynamic route. Will render either
// a page showing the user submitted word and it's score or
// in the case of something it can't score, an error page with an "unscorable word" message