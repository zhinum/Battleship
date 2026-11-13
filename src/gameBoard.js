import { Ship } from "./ship.js";
export class GameBoard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
  }
  //gameBoard is an adjacency matrix numbered 0 to 10
  // hor = horizontal, ver = vertical  ::::: they are coordinates.
  //to be able to tell which ship is which i placed their length number on the matrix. this is against the rule of adjacency matrix,
  //  so this is not an adjacency matrix, ITS MY GAME BOARD
  addEdges(ver, hor, length) {
    this.rangeCheck(hor, ver);
    this.board[ver][hor] = length;
  }
  //edges are added in a directed manner.

  hasEdges(ver, hor) {
    this.rangeCheck(ver, hor);
    return this.board[ver][hor] !== 0 ? true : false;
  }

  placeShip([sVer, sHor], [eVer, eHor], length, direction) {
    // shor = start horizontal, sver = start vertical  ::::: they are coordinates
    //ehor = end horizontal, ever = end vertical
    if (direction === "horizontal") {
      while (sHor !== eHor + 1) {
        this.addEdges(sVer, sHor++, length);
      }
    } else {
      while (sVer !== eVer + 1) {
        this.addEdges(sVer++, sHor, length);
      }
    }
  }
  rangeCheck(ver, hor) {
    if (ver < 0 || hor > 9 || ver < 0 || ver > 9) {
      throw new Error("out of range");
    }
  }
}

/* const player1Board = new GameBoard();
const destroyer = new Ship(4, "horizontal");
destroyer.setCoordinates(3, 8);

player1Board.placeShip(1, 8, 4, destroyer.direction);
 */
