const Board = require('../src/board');
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

  describe('WHEN X Player takes their first turn', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('THEN they place their pin in the top left corner of the board', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.027033724160359318);
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
      jest.spyOn(global.Math, 'random').mockReturnValue(0.10236847063320464);
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

      jest
        .spyOn(global.Math, 'random')
        .mockReturnValueOnce(0.027033724160359318);
      playerX.takeTurn();

      jest
        .spyOn(global.Math, 'random')
        .mockReturnValueOnce(0.027033724160359318);
      jest
        .spyOn(global.Math, 'random')
        .mockReturnValueOnce(0.70236847063320464);
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
