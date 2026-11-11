export class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.ifSunk = false;
    this.startCoordinate = null;
    this.endCoordinate = null;
  }

  hit() {
    this.hitCount += 1;
    this.isSunk();

    return this.hitCount;
  }

  isSunk() {
    if (this.length === this.hitCount) {
      this.ifSunk = true;
    }

    return this.ifSunk;
  }
  setCoordinates(start, end) {
    this.startCoordinate = start;
    this.endCoordinate = end;
  }

  coordinates() {
    return [this.startCoordinate, this.endCoordinate];
  }
}

/* const destroyer = new Ship(4);

destroyer.hit();
destroyer.hit();
destroyer.hit();
destroyer.hit(); */
