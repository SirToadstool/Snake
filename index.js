class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.snake = new Snake();
    this.food = new Food();
    this.scale = 10;
    this.direction = 'RIGHT';
    this.interval;
  }

  collide = () => {
    if (this.snake.body[0].left < this.food.right &&
      this.snake.body[0].right > this.food.left &&
      this.snake.body[0].bottom > this.food.top &&
      this.snake.body[0].top < this.food.bottom) {
      return true;
    }
    return false;
  }

  drawRectangle = (rectangle) => {
    this.context.fillStyle = rectangle.color;
    this.context.fillRect(rectangle.position.x, rectangle.position.y, rectangle.size.x, rectangle.size.y);
  }

  drawCanvas = () => {
    this.context.fillStyle = 'lightgrey';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  draw = () => {
    this.drawCanvas();

    let snakeX = this.snake.head.position.x;
    let snakeY = this.snake.head.position.y;

    this.snake.move();

    if (this.snake.head.left < 0 || this.snake.head.right > this.canvas.width) {
      this.snake.head.position.x = snakeX;
    }

    if (this.snake.head.top < 0 || this.snake.head.bottom > this.canvas.height) {
      this.snake.head.position.y = snakeY;
    }

    if (this.collide(this.snake, this.food)) {
      this.food.move(this.canvas.width, this.canvas.height, this.scale);
      this.snake.grow();
    }

    for (let i = 0; i < this.snake.body.length; ++i) {
      let segment = this.snake.body[i];
      this.drawRectangle(segment);
    }

    this.drawRectangle(this.food);
  }

  update = () => {
    this.draw();
  }

  start = () => {
    this.interval = setInterval(this.update, 125);
  }

  stop = () => {
    clearInterval(this.interval);
  }

  reset = () => {
    clearInterval(this.interval);
    this.snake = new Snake();
    this.food = new Food();
    this.direction = 'RIGHT';
    this.interval = null;
    this.draw();
  }
}