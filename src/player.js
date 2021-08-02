/*
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
*/

class Player {
  constructor(pin, board) {
    this.pin = pin;
    this.board = board;
  }

  getPin() {
    return this.pin;
  }

  takeTurn() {
    this.board.placePin(this.pin, 0);
  }
}

module.exports = Player;
