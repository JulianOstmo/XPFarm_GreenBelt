const gameLog = [];

const ticTacToe = () => {
  // gameCreation();

  // gameLog.push(render());

  /*
  while (!gameWinner && gameLog.length < 2) {
    // player takes turn
    const position = takeTurn();
    boardArray[position] = currentPlayer;

    // function to check win scenarios and update gameWinner if game won

    // else switch players and continue the game

    // check for draw / full board
    const draw = boardArray.every((cell) => Boolean(cell));

    gameWinner = draw;
    gameLog.push(render());
  }
  */

  return gameLog;
};

module.exports = { ticTacToe };
