function Snake(x,y){
    this.x = x;
    this.y = y;
    this.direction = "RIGHT";
    this.length = 1;
    this.body = [];
    this.body[0] = [this.x, this.y];
    this.dead = false;
}
function Food(x,y){
    this.x = x;
    this.y = y;
}
var model = {
    init: function () {
        this.createSnake();
        this.createFood();
    },
    createSnake() {
        this.snake = new Snake(9*view.scale, 10*view.scale);
    },
    createFood() {
        this.food = new Food(Math.floor(Math.random() * view.scale), Math.floor(Math.random() * view.scale));
    },
    updateSnake: function (direction) {
        // is snake dead?
        this.snake.dead = this.checkSnake();
        var head = this.snake.body[0];
        var scale = view.scale;
        var newPart = [];
        if (direction === undefined) {
            direction = this.snake.direction;
        }
        switch (direction) {
            //left
            case 37:
                newPart = [(head[0] - scale), head[1]];
                this.snake.direction = direction;
                //updates body and length of snake
                if (this.checkEatFood()) {
                    this.snake.length++;
                    this.snake.body.unshift([this.food.x - 1, this.food.y]);
                    this.destroyFood();
                    this.updateScore();
                    this.createFood();
                }
                break;
            //up
            case 40:
                newPart = [head[0], (head[1] + scale)];
                this.snake.direction = direction;
                //updates body and length of snake
                if (this.checkEatFood()) {
                    this.snake.length++;
                    this.snake.body.unshift([this.food.x, this.food.y + 1]);
                    this.destroyFood();
                    this.updateScore();
                    this.createFood();
                }
                break;
            //right
            case 39:
                newPart = [(head[0] + scale), head[1]];
                this.snake.direction = direction;
                //updates body and length of snake
                if (this.checkEatFood()) {
                    this.snake.length++;
                    this.snake.body.unshift([this.food.x + 1, this.food.y]);
                    this.destroyFood();
                    this.updateScore();
                    this.createFood();
                }
                break;
            //down
            case 38:
                newPart = [head[0], (head[1] - scale)];
                this.snake.direction = direction;
                //updates body and length of snake
                if (this.checkEatFood()) {
                    this.snake.length++;
                    this.snake.body.unshift([this.food.x, this.food.y - 1]);
                    this.destroyFood();
                    this.updateScore();
                    this.createFood();
                }
                break;

        }
        this.snake.body.pop();
        this.snake.body.unshift(newPart);
    },
    checkEatFood() {
        var head = this.snake.body[0];
        if (head[0] === this.food.x && head[1] === this.food.y) {
            return true;
        }
        return false;
    },
    destroyFood() {
        this.food = [];
    },
    updateScore() {
        this.score += 10;
    },
    getScore() {
        return this.score;
    },

    checkSnake() {
        var head = this.snake.body[0];
        var scale = view.scale;
        //check if snake hits wall
        if (head[0] < 0 || head[0] > (view.canvas.width - scale) || head[1] < 0 || head[1] > (view.canvas.height - scale)) {
            return true;
        }
        //check if snake hits itself
        for (var i = 1; i < this.snake.body.length; i++) {
            if (head[0] === this.snake.body[i][0] && head[1] === this.snake.body[i][1]) {
                return true;
            }
        }
        return false;
    }

}





