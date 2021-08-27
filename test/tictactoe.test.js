const TicTacToe = require('../src/tictactoe');

describe('GIVEN the TicTacToe game', () => {
  describe('WHEN the game initialises', () => {
    it('THEN the game log should begin with the start game message', () => {
      const ticTacToe = new TicTacToe();
      expect(ticTacToe.log()[0]).toEqual('Game Board Creation...');
    });
  });

  describe('WHEN Player X wins with a horizontal victory along the top row', () => {
    it('THEN an an array of printed moved should be returned', () => {
      const ticTacToe = new TicTacToe();
      expect(ticTacToe.log()).toEqual([
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
        'X| | ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' | | ',
        '\n',
        'Player X:',
        'X|X| ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' | | ',
        '\n',
        'Player O:',
        'X|X| ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' |O| ',
        '\n',
        'Player X:',
        'X|X|X',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' |O| ',
        '\n',
        'PLAYER X WON!',
      ]);
    });
  });
});
