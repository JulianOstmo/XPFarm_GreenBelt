const Board = require('../src/board');
const Player = require('../src/player');
const { positions, selectRandomPositionMock } = require('./test.utils');

const { TOP_LEFT, TOP_MID, BOTTOM_MID } = positions;

describe('GIVEN a TicTacToe Player', () => {
  describe('WHEN the Player is initialised', () => {
    it('THEN their pin is set', () => {
      const PIN = 'X';
      const player = new Player(PIN);
      expect(player.getPin()).toEqual(PIN);
    });
  });

  describe('WHEN X Player takes their first turn', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('THEN they place their pin in the top left corner of the board', () => {
      selectRandomPositionMock([TOP_LEFT]);
      const PIN = 'X';
      const board = new Board();
      const player = new Player(PIN, board);
      player.takeTurn();
      expect(board.render()).toEqual([
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '',
      ]);
    });

    it('THEN they place their pin in the top middle square of the board', () => {
      selectRandomPositionMock([TOP_MID]);
      const PIN = 'X';
      const board = new Board();
      const player = new Player(PIN, board);
      player.takeTurn();
      expect(board.render()).toEqual([
        ' |X| ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' | | ',
        '',
      ]);
    });
  });

  describe('WHEN Player X has taken their turn and now Player O takes their first turn', () => {
    it('THEN Player O searches the board for an empty position and places their pin in the bottom middle square of the board', () => {
      const board = new Board();
      const playerX = new Player('X', board);
      const playerO = new Player('O', board);

      selectRandomPositionMock([TOP_LEFT, TOP_LEFT, BOTTOM_MID]);
      playerX.takeTurn();
      playerO.takeTurn();

      expect(board.render()).toEqual([
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' |O| ',
        '',
      ]);
    });
  });
});
