class Snake {
  constructor() {
    this.body = [];
    this.body[0] = new Rectangle(0, 0, 10, 10, '#0e0');;
    this.xdir = 10;
    this.ydir = 0;
  }
  move = () => {
    let head = this.body[0];
    let temp = new Rectangle(head.position.x, head.position.y, head.size.x, head.size.y, head.color);

    this.body.pop();

    temp.position.x += this.xdir;
    temp.position.y += this.ydir;

    this.body.unshift(temp)
  }
  grow = () => {
    const copy = {
      posX: this.body[0].position.x,
      posY: this.body[0].position.y,
      sizeX: this.body[0].size.x,
      sizeY: this.body[0].size.y,
      color: this.body[0].color
    };
    let newSegment = new Rectangle(copy.posX, copy.posY, copy.sizeX, copy.sizeY, copy.color);
    this.body.push(newSegment);
  }
  changeDirection = (x, y) => {
    this.xdir = x;
    this.ydir = y;
  }
  get head() {
    return this.body[0];
  }
  get tail() {
    return this.body[this.body.length - 1];
  }
}