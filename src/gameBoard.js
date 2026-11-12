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
    this.board[ver][hor] = length;
  }
  //edges are added in a directed manner.

  hasEdges(hor, ver) {
    this.rangeCheck(hor, ver);
    return this.board[hor][ver] === 1 ? true : false;
  }

  placeShip(hor, ver, length, direction) {
    let range;
    if (direction === "horizontal") {
      range = 10 - hor;
      if (range >= length) {
        for (let i = 0; i <= length; i++) {
          this.addEdges(hor++, ver, length);
        }
      } else {
        const behindShip = length - range;
        for (let i = 0; i <= range; i++) {
          this.addEdges(hor++, ver);
        }
        for (let i = 0; i <= behindShip; i++) {
          this.addEdges(hor--, ver);
        }
      }
    } else {
      range = 10 - ver;
      if (range >= length) {
        for (let i = 0; i <= length; i++) {
          this.addEdges(hor, ver++, length);
        }
      } else {
        const behindShip = length - range;
        for (let i = 0; i <= range; i++) {
          this.addEdges(hor, ver++);
        }
        for (let i = 0; i <= behindShip; i++) {
          this.addEdges(hor, ver--);
        }
      }
    }
  }
  rangeCheck(hor, ver) {
    if (hor < 0 || hor > 10 || ver < 0 || ver > 10) {
      throw new Error("out of range");
    }
  }
}
