export class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.ifSunk = false;
  }

  hit() {
    this.hitCount += 1;
    return this.hitCount;
  }

  isSunk() {
    if (this.length === this.hitCount) {
      this.ifSunk = true;
    }
    return this.ifSunk;
  }
}
