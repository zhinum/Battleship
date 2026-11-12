import { Ship } from "./ship.js";
export class GameBoard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
  }
  //gameBoard is an adjacency matrix numbered 0 to 10
  // hor = horizontal, ver = vertical  ::::: they are coordinates.
  //to be able to tell which ship is which i placed their length number on the matrix. this is against the rule of adjacency matrix,
  //  so this is not an adjacency matrix, ITS MY GAME BOARD
  addEdges(hor, ver, length) {
    this.rangeCheck(hor, ver);
    this.board[hor][ver] = length;
  }
  //edges are added in a directed manner.

  hasEdges(hor, ver) {
    this.rangeCheck(hor, ver);
    return this.board[hor][ver] === 1 ? true : false;
  }

  placeShip(hor, ver, length, direction) {
    if (direction === "vertical") {
      const horRange = 9 - hor;
      if (horRange >= length) {
        for (let i = 1; i <= length; i++) {
          this.addEdges(hor++, ver, length);
        }
      } else {
        let originalHor = hor;
        const behindShip = length - horRange;

        for (let i = 0; i <= horRange; i++) {
          this.addEdges(hor++, ver, length);
        }
        for (let i = 1; i <= behindShip; i++) {
          this.addEdges(originalHor--, ver, length);
        }
      }
    } else {
      const verRange = 9 - ver;
      if (verRange >= length) {
        for (let i = 1; i <= length; i++) {
          this.addEdges(hor, ver++, length);
        }
      } else {
        let originalVer = ver;
        const behindShip = length - verRange;

        for (let i = 0; i <= verRange; i++) {
          this.addEdges(hor, ver++, length);
        }
        for (let i = 1; i <= behindShip; i++) {
          this.addEdges(hor, originalVer--, length);
        }
      }
    }
  }
  rangeCheck(hor, ver) {
    if (hor < 0 || hor > 9 || ver < 0 || ver > 9) {
      throw new Error("out of range");
    }
  }
}

const player1Board = new GameBoard();
const destroyer = new Ship(4, "horizontal");
destroyer.setCoordinates(3, 8);

player1Board.placeShip(1, 8, 4, destroyer.direction);
