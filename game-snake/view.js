const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

var view = {
    init: function () {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.scale = 32;
        this.canvas.width = 608;
        this.canvas.height = 608;
        this.drawGround();
        this.drawSnake();
        this.drawFood();
        this.drawScore();

    },
    drawGround() {
        this.context.drawImage(ground, 0, 0);
    },

//draw snake
    drawSnake: function () {
        this.snake = [];
        this.snake[0] = {
            x: 9 * this.scale,
            y: 10 * this.scale,
        };
        for (var i = 0; i < this.snake.length; i++) {
            this.context.fillStyle = (i == 0) ? "green" : "white";
            this.context.fillRect(this.snake[i].x, this.snake[i].y, this.scale, this.scale);
            this.context.strokeStyle = "red";
            this.context.strokeRect(this.snake[i].x, this.snake[i].y, this.scale, this.scale);
        }
    },

//draw food
    drawFood: function () {
        this.food = {
            x: Math.floor(Math.random() * 17 + 1) * this.scale,
            y: Math.floor(Math.random() * 15 + 3) * this.scale,
        };
        this.context.drawImage(foodImg, this.food.x, this.food.y);
    },

//draw score
    drawScore: function () {
        var score = 0;
        this.context.fillStyle = 'black';
        this.context.font = '20px Arial';
        this.context.fillText('Score: ' + score, 10*this.scale, 30*this.scale);
    },
}