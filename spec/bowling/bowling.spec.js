const Bowling = require('../../bowling/bowling');

describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  it('Should be reset scores', () => {
    bowling.roll(0);
    bowling.roll(0);

    expect(bowling.getScore()).toEqual(0);
  });

  it('Should be strike roll', () => {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(4);
    bowling.roll(5);
    bowling.roll(2);
    bowling.calcRolls();
    expect(bowling.totalScoreForFrame[0]).toEqual(25);
    expect(bowling.totalScoreForFrame[1]).toEqual(19);
    expect(bowling.totalScoreForFrame[2]).toEqual(9);
    expect(bowling.totalScoreForFrame[3]).toEqual(7);
  });
});
