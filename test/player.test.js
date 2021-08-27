const Board = require('../src/board');
const Player = require('../src/player');

const TOP_LEFT = 0.02;
const TOP_MID = 0.1;
const TOP_RIGHT = 0.2;
const MID_LEFT = 0.3;
const MID_MID = 0.4;
const MID_RIGHT = 0.5;
const BOTTOM_LEFT = 0.6;
const BOTTOM_MID = 0.7;
const BOTTOM_RIGHT = 0.8;

const selectRandomPositionMock = (position) => {
  jest.spyOn(global.Math, 'random').mockReturnValueOnce(position);
};

describe('GIVEN a TicTacToe Player', () => {
  describe('WHEN the Player is initialised', () => {
    it('THEN their pin is set', () => {
      const PIN = 'X';
      const player = new Player(PIN);
      expect(player.getPin()).toEqual(PIN);
    });
  });

  describe('WHEN X Player takes their first turn', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('THEN they place their pin in the top left corner of the board', () => {
      selectRandomPositionMock(TOP_LEFT);
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
        '\n',
      ]);
    });

    it('THEN they place their pin in the top middle square of the board', () => {
      selectRandomPositionMock(TOP_MID);
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
        '\n',
      ]);
    });
  });

  describe('WHEN Player X has taken their turn and now Player O takes their first turn', () => {
    it('THEN Player O searches the board for an empty position and places their pin in the bottom middle square of the board', () => {
      const board = new Board();
      const playerX = new Player('X', board);
      const playerO = new Player('O', board);

      selectRandomPositionMock(TOP_LEFT);
      playerX.takeTurn();

      selectRandomPositionMock(TOP_LEFT);
      selectRandomPositionMock(BOTTOM_MID);
      playerO.takeTurn();
      expect(board.render()).toEqual([
        'X| | ',
        '-+-+-',
        ' | | ',
        '-+-+-',
        ' |O| ',
        '\n',
      ]);
    });
  });
});
