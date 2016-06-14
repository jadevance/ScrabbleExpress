var Scrabble = function() {
  this.tileScore = { 
    'A' : 1, 
    'B' : 3, 
    'C' : 3,
    'D' : 2, 
    'E' : 1, 
    'F' : 4,
    'G' : 2, 
    'H' : 4, 
    'I' : 1,
    'J' : 8, 
    'K' : 5, 
    'L' : 1,
    'M' : 3, 
    'N' : 1, 
    'O' : 1,
    'P' : 3, 
    'Q' : 10, 
    'R' : 1,
    'S' : 1, 
    'T' : 1, 
    'U' : 1, 
    'V' : 4, 
    'W' : 4,
    'X' : 8, 
    'Y' : 4, 
    'Z' : 10 
  };
};

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {
  var word = word.toUpperCase();
  var score = 0; 
  var wordCheck = word.match(/(\W)*/g); 
  
  // check input for garbage
  if (wordCheck[0].length !== 0) {
    throw('this is not valid input!');  
  }
  
  // apply the bonus
  if (word.length >= 7) {
    score += 50; 
  }

  // score with a loop
  for (var i = 0; i < word.length; ++i) {
    score += this.tileScore[word.charAt(i)];
  }
  return score; 
}; 


Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var wordAndScores = {};
  var checkWordLength = {}; 
  var winningWords = []; 
  
  for (var word of arrayOfWords) {
    wordAndScores[word] = this.score(word);
  }

  //get the max score 
  var getMaxScore = Math.max.apply(null, Object.keys(wordAndScores).map(function(x){ return wordAndScores[x] }));
  for (var word in wordAndScores){
    if (wordAndScores[word] === getMaxScore){
      winningWords.push(word);
    }
  }

  //check for ties
  if (winningWords.length === 1) {
    return winningWords[0];
  } else {
    for (var word of winningWords) {
      checkWordLength[word] = word.length;
    }

    //find min length of winning ties 
    var getMinLength = Math.min.apply(null, Object.keys(checkWordLength).map(function(x){ return checkWordLength[x] }));

    for (var word in checkWordLength) {
      if (checkWordLength[word] === getMinLength) {
        return word; 
      }
    }
  }
}; 


module.exports = Scrabble;
