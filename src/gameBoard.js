export class GameBoard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(0));
  }
  //gameBoard is an adjacency matrix numbered 0 to 10
  // hor = horizontal, ver = vertical  ::::: they are coordinates.
  addEdges(hor, ver) {
    this.board[hor][ver] = 1;
    this.board[ver][hor] = 1;
  }
  //edges are added in a directed manner.

  hasEdges(hor, ver) {
    this.board[hor][ver] === 1 ? true : false;
  }

  placeShip(coordinateArray) {
    let hor = coordinateArray[0];
    let ver = coordinateArray[1];
    this.addEdges(hor, ver);
  }
}
