const { ticTacToe } = require('../src/index');

describe.skip('Game Board Creation phase', () => {
  it('should print a title, empty tic-tac-toe board and status message', () => {
    const expectedTitle = 'Game Board Creation...';
    const expectedStatusMsg =
      'Board Created.\nThe game will start with player X';
    const expectedBoard = [
      ' | | ',
      '-+-+-',
      ' | | ',
      '-+-+-',
      ' | | ',
      '\n',
    ].join('\n');

    const output = ticTacToe();

    expect(output).toEqual(expect.stringContaining(expectedTitle));
    expect(output).toEqual(expect.stringContaining(expectedStatusMsg));
    expect(output).toEqual(expect.stringContaining(expectedBoard));
  });
});

describe.skip('Player X wins with a vertical line in first column', () => {
  const mathRandomSpy = jest.spyOn(Math, 'random');

  it(`should print a title, a tic-tac-toe board with 3 vertical X's in the first column and a status message`, () => {
    const expectedTitle = 'Player X:';
    const expectedStatusMsg = 'PLAYER X WON!';
    const expectedBoard = [
      'X| | ',
      '-+-+-',
      'X|O| ',
      '-+-+-',
      'X| |O',
      '\n',
    ].join('\n');

    const moves = [0.1, 0.5, 0.4, 0.9, 0.7];
    moves.forEach((move) => {
      mathRandomSpy.mockResolvedValueOnce(move);
    });

    const output = ticTacToe();

    expect(output).toEqual(expect.stringContaining(expectedTitle));
    expect(output).toEqual(expect.stringContaining(expectedStatusMsg));
    expect(output).toEqual(expect.stringContaining(expectedBoard));
  });
});
