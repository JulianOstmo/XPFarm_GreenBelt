const Player = require('../src/player');

/*
const mathRandomSpy = jest.spyOn(Math, 'random');
const moves = [0.1, 0.5, 0.4, 0.9, 0.7];
moves.forEach((move) => {
  mathRandomSpy.mockResolvedValueOnce(move);
});
*/

describe('GIVEN a TicTacToe Player', () => {
  describe('WHEN the Player is initialised', () => {
    it('THEN their pin is set', () => {
      const PIN = 'X';
      const player = new Player(PIN);
      expect(player.getPin()).toEqual(PIN);
    });
  });
});
