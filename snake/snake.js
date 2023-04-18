// script.js

const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");
const scoreDisplay = document.getElementById("score");
let gameInterval;

startBtn.addEventListener("click", startGame);

function startGame() {
  clearInterval(gameInterval);
  startBtn.innerText = "Restart Game";
  const snake = new Snake();
  const food = new Food();
  let score = 0;
  scoreDisplay.innerText = `Score: ${score}`;

  gameInterval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update(food);
    snake.draw();

    if (snake.eat(food.position)) {
      score++;
      scoreDisplay.innerText = `Score: ${score}`;
      food.randomize();
    }

    if (snake.checkCollision()) {
      clearInterval(gameInterval);
      startBtn.innerText = "Start Game";
      alert("Game Over! Try again.");
    }
  }, 100);
}

function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * 20) * 20,
    y: Math.floor(Math.random() * 20) * 20,
  };
}

class Snake {
  constructor() {
    this.body = [{ x: 200, y: 200 }];
    this.direction = { x: 0, y: 0 };
    this.newDirection = { x: 0, y: 0 };
    document.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleKeydown(e) {
    if (e.key === "ArrowUp" && this.direction.y === 0) {
      this.newDirection = { x: 0, y: -20 };
    } else if (e.key === "ArrowDown" && this.direction.y === 0) {
      this.newDirection = { x: 0, y: 20 };
    } else if (e.key === "ArrowLeft" && this.direction.x === 0) {
      this.newDirection = { x: -20, y: 0 };
    } else if (e.key === "ArrowRight" && this.direction.x === 0) {
      this.newDirection = { x: 20, y: 0 };
    }
  }

  update(food) {
    this.direction = this.newDirection;
    const newHead = {
      x: this.body[0].x + this.direction.x,
      y: this.body[0].y + this.direction.y,
    };
    this.body.unshift(newHead);
    if (!this.eat(food.position)) {
      this.body.pop();
    }
  }

  draw() {
    ctx.fillStyle = "green";
    this.body.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, 20, 20);
      ctx.strokeStyle = "white";
      ctx.strokeRect(segment.x, segment.y, 20, 20);
    });
  }

  eat(foodPosition) {
    return this.body[0].x === foodPosition.x && this.body[0].y === foodPosition.y;
  }

  checkCollision() {
    const head = this.body[0];
    return (
      head.x < 0 ||
      head.x >= canvas.width ||
      head.y < 0 ||
      head.y >= canvas.height ||
      this.body.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
    );
  }
}

class Food {
  constructor() {
    this.randomize();
  }

  randomize() {
    this.position = randomGridPosition();
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, 20, 20);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(this.position.x, this.position.y, 20, 20);
  }
}

   
