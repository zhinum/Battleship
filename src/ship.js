export class Ship {
  constructor(length, direction) {
    this.length = length;
    this.hitCount = 0;
    this.ifSunk = false;
    this.startCoordinates = null; //
    this.endCoordinates = null;
    this.direction = direction;
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
  setCoordinates([sVer, sHor], [eVer, eHor]) {
    this.startCoordinates = [sVer, sHor]; // shor = start horizontal, sver = start vertical  ::::: they are coordinates
    this.endCoordinates = [eVer, eHor]; // ehor = end horizontal, ever = end vertical
  }

  startCoord() {
    return this.startCoordinates;
  }

  endCoord() {
    return this.endCoordinates;
  }
}

/* const destroyer = new Ship(4);

destroyer.hit();
destroyer.hit();
destroyer.hit();
destroyer.hit(); */
