const { ticTacToe } = require('../src');

describe('GIVEN the TicTacToe game', () => {
  describe('WHEN Player X wins with a horizontal victory along the top row', () => {
    it('THEN an an array of printed moved should be returned', () => {
      expect(ticTacToe()).toEqual([
        'Game Board Creation...',
        ' | | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '\n',
        'Board Created.',
        'The game will start with player X',
        '\n',
        'Player X:',
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '\n',
        'Player O:',
        'X|O| ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '\n',
        'Player X:',
        'X|O| ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '\n',
        'PLAYER X WON!',
      ]);
    });
  });
});
