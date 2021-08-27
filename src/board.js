class Board {
  constructor() {
    this.squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  }

  render() {
    const topRow = `${this.squares[0]}|${this.squares[1]}|${this.squares[2]}`;
    const middleRow = `${this.squares[3]}|${this.squares[4]}|${this.squares[5]}`;
    const bottomRow = `${this.squares[6]}|${this.squares[7]}|${this.squares[8]}`;
    const spacer = '-+-+-';
    return [topRow, spacer, middleRow, spacer, bottomRow, ''];
  }

  getSquare(position) {
    return this.squares[position];
  }

  placePin(pin, position) {
    this.squares[position] = pin;
  }
}

module.exports = Board;
