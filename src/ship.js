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
  setCoordinates([sHor, sVer], [eHor, eVer]) {
    this.startCordinates = [sHor, sVer]; // shor = start horizontal, sver = start vertical  ::::: they are coordinates
    this.endCoordinates = [eHor, eVer]; // ehor = end horizontal, ever = end vertical
  }

  startCordinatess() {
    return this.startCordinates;
  }

  endCoordinates() {
    return this.endCoordinates;
  }
}

/* const destroyer = new Ship(4);

destroyer.hit();
destroyer.hit();
destroyer.hit();
destroyer.hit(); */
