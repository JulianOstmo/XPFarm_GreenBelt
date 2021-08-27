const TicTacToe = require('../src/tictactoe');
const { positions, selectRandomPositionMock } = require('./test.utils');

const { TOP_LEFT, TOP_MID, TOP_RIGHT, MID_MID, BOTTOM_LEFT } = positions;

describe('GIVEN the TicTacToe game', () => {
  let ticTacToe;

  beforeEach(() => {
    ticTacToe = new TicTacToe();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('WHEN the game initialises', () => {
    it('THEN the game log should begin with the start game message', () => {
      expect(ticTacToe.log()[0]).toEqual('Game Board Creation...');
    });

    it('THEN the game log should contain an empty board', () => {
      expect(ticTacToe.log().slice(1, 7)).toEqual([
        ' | | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '',
      ]);
    });

    it('THEN the game log should state the game is ready and player X starts first', () => {
      expect(ticTacToe.log().slice(7, 10)).toEqual([
        'Board Created.',
        'The game will start with player X',
        '',
      ]);
    });

    it('THEN the game should have a Player X', () => {
      expect(ticTacToe.playerX).toBeTruthy();
    });

    it('THEN the game should have a Player O', () => {
      expect(ticTacToe.playerO).toBeTruthy();
    });
  });

  describe('WHEN Player X wins with a horizontal victory along the top row', () => {
    it('THEN the first move should be Player X in the top left position', () => {
      selectRandomPositionMock([TOP_LEFT]);
      const firstMove = [
        'Player X:',
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '',
      ].join('\n');
      ticTacToe.playGame();
      expect(ticTacToe.log().join('\n')).toContain(firstMove);
    });

    it('THEN the second move should be Player O in the middle middle position', () => {
      selectRandomPositionMock([TOP_LEFT, MID_MID]);
      const secondMove = [
        'Player O:',
        'X| | ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' | | ',
        '',
      ].join('\n');
      ticTacToe.playGame();
      expect(ticTacToe.log().join('\n')).toContain(secondMove);
    });

    it('THEN the third move should be Player X in the top middle position', () => {
      selectRandomPositionMock([TOP_LEFT, MID_MID, TOP_MID]);
      const thirdMove = [
        'Player X:',
        'X|X| ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' | | ',
        '',
      ].join('\n');
      ticTacToe.playGame();
      expect(ticTacToe.log().join('\n')).toContain(thirdMove);
    });

    it('THEN the forth move should be Player O in the bottom left position', () => {
      selectRandomPositionMock([TOP_LEFT, MID_MID, TOP_MID, BOTTOM_LEFT]);
      const forthMove = [
        'Player O:',
        'X|X| ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        'O| | ',
        '',
      ].join('\n');
      ticTacToe.playGame();
      expect(ticTacToe.log().join('\n')).toContain(forthMove);
    });

    it('THEN the fifth move should be Player X in the bottom left position', () => {
      selectRandomPositionMock([
        TOP_LEFT,
        MID_MID,
        TOP_MID,
        BOTTOM_LEFT,
        TOP_RIGHT,
      ]);
      const fifthMove = [
        'Player X:',
        'X|X|X',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        'O| | ',
        '',
      ].join('\n');
      ticTacToe.playGame();
      expect(ticTacToe.log().join('\n')).toContain(fifthMove);
    });

    it('THEN the game should announce that Player X has won', () => {
      selectRandomPositionMock([
        TOP_LEFT,
        MID_MID,
        TOP_MID,
        BOTTOM_LEFT,
        TOP_RIGHT,
      ]);
      ticTacToe.playGame();
      expect(ticTacToe.log().pop()).toEqual('PLAYER X WON!');
    });

    it('THEN an an array of printed moved should be returned', () => {
      selectRandomPositionMock([
        TOP_LEFT,
        MID_MID,
        TOP_MID,
        BOTTOM_LEFT,
        TOP_RIGHT,
      ]);
      ticTacToe.playGame();
      expect(ticTacToe.log()).toEqual([
        'Game Board Creation...',
        ' | | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '',
        'Board Created.',
        'The game will start with player X',
        '',
        'Player X:',
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '',
        'Player O:',
        'X| | ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' | | ',
        '',
        'Player X:',
        'X|X| ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        ' | | ',
        '',
        'Player O:',
        'X|X| ',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        'O| | ',
        '',
        'Player X:',
        'X|X|X',
        '-+-+-',
        ' |O| ',
        '-+-+-',
        'O| | ',
        '',
        'PLAYER X WON!',
      ]);
    });
  });
});
