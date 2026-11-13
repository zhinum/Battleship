export class Ship {
  constructor(length, direction) {
    this.length = length;
    this.hitCount = 0;
    this.ifSunk = false;
    this.startCordinates = null; //
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
  setCoordinates([sVer, sHor], [eHor, eVer]) {
    this.startCordinates = [sVer, sHor]; // shor = start horizontal, sver = start vertical  ::::: they are coordinates
    this.endCoordinates = [eVer, eHor]; // ehor = end horizontal, ever = end vertical
  }

  startCoord() {
    return this.startCordinates;
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
