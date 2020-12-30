class Rectangle {
  constructor(x = 0, y = 0, width, height, color) {
    this.position = new Vector(x, y);
    this.size = new Vector(width, height);
    this.color = color;
  }

  get left() {
    return this.position.x;
  }
  get right() {
    return this.position.x + this.size.x / 2;
  }
  get top() {
    return this.position.y;
  }
  get bottom() {
    return this.position.y + this.size.y / 2;
  }
}