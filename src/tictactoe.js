const Board = require('./board');

// const ticTacToe = () => {
//   // gameCreation();

//   // gameLog.push(render());

//   /*
//   while (!gameWinner && gameLog.length < 2) {
//     // player takes turn
//     const position = takeTurn();
//     boardArray[position] = currentPlayer;

//     // function to check win scenarios and update gameWinner if game won

//     // else switch players and continue the game

//     // check for draw / full board
//     const draw = boardArray.every((cell) => Boolean(cell));

//     gameWinner = draw;
//     gameLog.push(render());
//   }
//   */

//   return gameLog;
// };

class TicTacToe {
  constructor() {
    this.gameLog = ['Game Board Creation...'];
    const board = new Board();
    this.gameLog = [...this.gameLog, ...board.render()];
    this.gameLog.push('Board Created.');
    this.gameLog.push('The game will start with player X');
  }

  log() {
    return this.gameLog;
  }
}

module.exports = TicTacToe;
