const Board = require('./board');
const Player = require('./player');

class TicTacToe {
  constructor() {
    this.gameLog = ['Game Board Creation...'];
    this.board = new Board();
    this.gameLog = [
      ...this.gameLog,
      ...this.board.render(),
      'Board Created.',
      'The game will start with player X',
      '',
    ];

    this.playerX = new Player('X', this.board);
    this.playerO = new Player('O', this.board);
  }

  log() {
    return this.gameLog;
  }

  playGame() {
    this.gameLog.push('Player X:');
    this.playerX.takeTurn();
    this.gameLog = [...this.gameLog, ...this.board.render()];

    this.gameLog.push('Player O:');
    this.playerO.takeTurn();
    this.gameLog = [...this.gameLog, ...this.board.render()];

    this.gameLog.push('Player X:');
    this.playerX.takeTurn();
    this.gameLog = [...this.gameLog, ...this.board.render()];

    this.gameLog.push('Player O:');
    this.playerO.takeTurn();
    this.gameLog = [...this.gameLog, ...this.board.render()];

    this.gameLog.push('Player X:');
    this.playerX.takeTurn();
    this.gameLog = [...this.gameLog, ...this.board.render()];

    this.gameLog.push('PLAYER X WON!');
  }
}

module.exports = TicTacToe;
