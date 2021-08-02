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
  constructor(pin) {
    this.pin = pin;
  }

  getPin() {
    return this.pin;
  }
}

module.exports = Player;
