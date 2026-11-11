import { Ship } from "./ship.js";
describe("ship testing", () => {
  let destroyer;
  beforeEach(() => {
    destroyer = new Ship(4);
  });
  test("Correctly create ship objects", () => {
    expect(destroyer).toEqual({
      length: 4,
      hitCount: 0,
      ifSunk: false,
      startCoordinate: null,
      endCoordinate: null,
    });
  });

  describe("testing ships game functions", () => {
    beforeEach(() => {
      destroyer.hit();
      destroyer.hit();
    });
    test("hitCount increases with a hit", () => {
      expect(destroyer.hit()).toBe(3);
    });
    test("returns true if sunk, returns false if not", () => {
      expect(destroyer.isSunk()).toBe(false);
      destroyer.hit();
      destroyer.hit();
      expect(destroyer.isSunk()).toBe(true);
    });
  });
});
