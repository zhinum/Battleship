class GameBoard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => {
      Array(10).fill(0);
    });
  }
  //gameBoard is an adjacency matrix numbered 0 to 10
  addEdges(start, end) {
    this.board[start][end] = 1;
    this.board[end][start] = 1;
  }
  //edges are added in a directed manner.

  hasEdges(start, end) {
    this.board[start][end] === 1 ? true : false;
  }
}
