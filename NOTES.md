# Pomodoro 1
✅ 1 large outside-in test:
  WHEN Horizontal victory (top row) for Player X
  EXPECT output to be an array of printed moves

🚧 should be split up into:
- Game files
✅  Board
  ✅  board should render on creation
  ✅  renderBoard function broken (causing infinite loop)
- Player

# Pomodoro 2
✅  Create Player files
🚧 Delete old index file and test
- Player tests:
  - GIVEN a TicTacToe Player
    - WHEN the Player is initialised
      - THEN their pin is set
    - WHEN the Player takes a turn
      - THEN their pin is placed on the board

# Tech Debt
- worthless tests
- might be worth using classes
