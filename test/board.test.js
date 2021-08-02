const Board = require('../src/board');

describe('GIVEN a TicTacToe board', () => {
  describe('WHEN the is board initialised', () => {
    it('THEN it should return an empty rendered board', () => {
      const board = new Board();
      expect(board.render()).toEqual([
        ' | | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '\n',
      ]);
    });
  });

  describe('WHEN an X is placed on the top left square of the board', () => {
    it('THEN the board should be rendered with an X in the top left square', () => {
      const board = new Board();
      board.placePin('X', 0);
      expect(board.render()).toEqual([
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '\n',
      ]);
    });
  });
});
