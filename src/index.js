let title;
let statusMessage;
let boardArray;

const gameLog = [];
let currentPlayer;
let gameWinner;

const PLAYER_X = 'X';
const PLAYER_O = 'O';

const gameCreation = () => {
  title = 'Game Board Creation...';
  statusMessage = 'Board Created.\nThe game will start with player X';
  boardArray = [null, null, null, null, null, null, null, null, null];
  currentPlayer = PLAYER_X;
};

const takeTurn = () => {
  let selectedCell;

  // FIXME: infinite loop happening here
  while (selectedCell) {
    const position = Math.floor(Math.random * 10);

    if (!boardArray[position]) {
      selectedCell = position;
    }
  }
};

const renderBoard = (board) => {
  // FIXME: board is now a single dimension array
  const output = board
    .map((row) => {
      return row.map((cell) => cell || ' ').join('|');
    })
    .join('\n-+-+-\n');

  return `${output}\n`;
};

const render = () => {
  const gameBoard = renderBoard(boardArray);
  const game = [title, gameBoard, statusMessage].join('\n');

  console.log(game);
  return game;
};

const ticTacToe = () => {
  gameCreation();

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
