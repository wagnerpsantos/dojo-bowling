class Bowling {
  constructor() {
    this.scores = [];
    this.totalScoreForFrame = [];
  };

  roll(pins) {
    this.scores.push(pins);
  }

  getScore() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.totalScoreForFrame.reduce(reducer);
  }

  calcRolls() {
    this.scores.forEach((score, pos) => {
      if (score === 10) { // stryker
        this.totalScoreForFrame[pos] = score + this.scores[pos + 1] + this.scores[pos + 2];
        this.totalScoreForFrame[pos + 1] = this.scores[pos + 1] + this.scores[pos + 2];
      } else {
        this.totalScoreForFrame[pos] = this.scores[pos + 1] + this.scores[pos + 2];
      }
    });

    console.log('TotalScore: ', this.totalScoreForFrame);
  }

}

module.exports = Bowling;
