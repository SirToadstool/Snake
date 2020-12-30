document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) {
    game.snake.changeDirection(-10, 0);
  } else if (event.keyCode == 38) {
    game.snake.changeDirection(0, -10);
  } else if (event.keyCode === 39) {
    game.snake.changeDirection(10, 0);
  } else if (event.keyCode === 40) {
    game.snake.changeDirection(0, 10);
  }
});

document.getElementById('start').addEventListener('click', function() {
  game.start();
});

document.getElementById('stop').addEventListener('click', function() {
  game.stop();
});

document.getElementById('reset').addEventListener('click', function() {
  game.reset();
});