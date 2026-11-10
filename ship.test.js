import { Ship } from "../ship.js";

test("Correctly create ship objects", () => {
  const destroyer = new Ship(4);
  expect(destroyer).toEqual({
    length: 4,
    hitCount: 0,
    ifSunk: false,
  });
});
