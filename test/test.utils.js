const TOP_LEFT = 0.02;
const TOP_MID = 0.1;
const TOP_RIGHT = 0.2;
const MID_LEFT = 0.3;
const MID_MID = 0.4;
const MID_RIGHT = 0.5;
const BOTTOM_LEFT = 0.6;
const BOTTOM_MID = 0.7;
const BOTTOM_RIGHT = 0.8;

const positions = {
  TOP_LEFT,
  TOP_MID,
  TOP_RIGHT,
  MID_LEFT,
  MID_MID,
  MID_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_MID,
  BOTTOM_RIGHT,
};

const selectRandomPositionMock = (mockPositions) => {
  const mathRandomSpy = jest.spyOn(global.Math, 'random');
  mockPositions.forEach((position) => {
    mathRandomSpy.mockReturnValueOnce(position);
  });
};

module.exports = {
  positions,
  selectRandomPositionMock,
};
