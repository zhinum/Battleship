export class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.ifSunk = false;
    this.horCoordinate = null; // hor = horizontal, ver = vertical  ::::: they are coordinates.
    this.verCoordinate = null;
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
  setCoordinates(hor, ver) {
    this.horCoordinate = hor;
    this.verCoordinate = ver;
  }

  coordinates() {
    return [this.horCoordinate, this.verCoordinate];
  }
}

/* const destroyer = new Ship(4);

destroyer.hit();
destroyer.hit();
destroyer.hit();
destroyer.hit(); */
