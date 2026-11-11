import { Ship } from "./ship.js";
import { GameBoard } from "./gameBoard.js";

const destroyer = new Ship(4);
destroyer.setCoordinates(1, 5);

const player1Board = new GameBoard();
