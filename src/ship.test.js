import { Ship } from "./ship.js";
describe("ship testing", () => {
  let destroyer;
  beforeEach(() => {
    destroyer = new Ship(4, "horizontal");
  });
  test("Correctly create ship objects", () => {
    expect(destroyer).toEqual({
      length: 4,
      hitCount: 0,
      ifSunk: false,
      startCoordinates: null,
      endCoordinates: null,
      direction: "horizontal",
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

    test("correctly sets coordinates", () => {
      destroyer.setCoordinates([3, 4], [3, 8]);
      expect(destroyer.startCoord()).toEqual([3, 4]);
      expect(destroyer.endCoord()).toEqual([3, 8]);
    });
  });
});
