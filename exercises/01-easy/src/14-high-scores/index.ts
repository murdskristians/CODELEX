/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
      // sort descending
      let sortedArray = this.scores.sort(function(a,b) {
          if (a < b) { return 1; }
          else if (a == b) { return 0; }
          else { return -1; }
      });

      switch (sortedArray.length) {
        case 1:
          return  [ sortedArray[0] ]
          break;
        case 2:
          return [ sortedArray[0], sortedArray[1] ]
          break;
        default:
          return [ sortedArray[0], sortedArray[1], sortedArray[2] ];
          break;
      }
  }
}

export { HighScores };
