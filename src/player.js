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

  selectRandomPosition() {
    let selectedPosition;

    while (selectedPosition === undefined) {
      const position = Math.floor(Math.random() * 10);

      if (this.board.getSquare(position) === ' ') {
        selectedPosition = position;
      }
    }

    return selectedPosition;
  }

  takeTurn() {
    const position = this.selectRandomPosition();
    this.board.placePin(this.pin, position);
  }
}

module.exports = Player;
