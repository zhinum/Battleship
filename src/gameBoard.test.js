import { GameBoard } from "./gameBoard.js";

describe("gameBoard test", () => {
  let gBoard;
  beforeEach(() => {
    gBoard = new GameBoard();
  });
  test("gamboard constructor test", () => {
    expect(gBoard.board).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  describe("gameBoard board functions", () => {
    test("addEdge add directed edges to matrix", () => {
      gBoard.addEdges(3, 7);

      expect(gBoard.hasEdges(3, 7)).toBe(true);
    });

    test("hasEdge return false if empty", () => {
      expect(gBoard.hasEdges(8, 9)).toBe(false);
    });

    test("checktest for out of range coordinates", () => {
      expect(() => gBoard.addEdges(-2, 10)).toThrow("out of range");
    });
  });

  describe("ship placement test on gameBoard", () => {
    test("correct ship placement according to coordinates", () => {
      gBoard.placeShip(2, 5, 4, "horizontal");
      expect(gBoard.board).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 4, 4, 4, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]);
    });
    test("correctly place ship behind set coordinate if out of range", () => {
      gBoard.placeShip(3, 8, 4, "horizontal");
      gBoard.placeShip(3, 0, 5, "vertical");
      gBoard.placeShip(6, 3, 3, "horizontal");
      gBoard.placeShip(8, 7, 6, "vertical");
      gBoard.placeShip(0, 9, 2, "vertical");

      expect(gBoard.board).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 4, 4, 4, 4],
        [5, 0, 0, 0, 0, 0, 0, 6, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 6, 0, 0],
        [5, 0, 0, 3, 3, 3, 0, 6, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
      ]);
    });
  });
});
