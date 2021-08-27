# Pomodoro 1
✅ 1 large outside-in test:
  WHEN Horizontal victory (top row) for Player X
  EXPECT output to be an array of printed moves

should be split up into:
✅  Game files
✅  Board
  ✅  board should render on creation
  ✅  renderBoard function broken (causing infinite loop)
- Player

# Pomodoro 2
✅  Create Player files
✅ Delete old index file and test
- Player tests:
  ✅ GIVEN a TicTacToe Player
  ✅ WHEN the Player is initialised
      THEN their pin is set
✅ Delete old index file and test
   WHEN the Player takes a turn
      THEN their pin is placed on the board

# Pomodoro 3
✅ Rename `selectPosition` to `selectRandomPosition`
✅ Refactor (reduce DRY) Player.test.js
  Add test to Player.test.js for Player O taking their first turn
  (second turn of the game)
  GIVEN a TicTacToe Player
  WHEN Player X has already gone and Player O takes their first turn
  THEN they place their pin in the bottom middle square of the board
✅ refactor Math spies in tests to mock return value is smaller
🚧 tictactoe:
  ✅ initialisation: output array with empty board, title & subtitle
  - hardcode Player X wins with a horizontal victory along the top row
  - add 'PLAYER X WON!' to output array
- update OutsideIn test with mocks of Players taking turns:
    Player.selectRandomPosition (or Math.random)
-

# Tech Debt
