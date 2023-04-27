
var controller = {
    init: function() {
        this.view = view;
        this.model = model;
        this.view.init();
        this.model.init();
        this.direction = 39;
        var thatView = this.view;
        var thatController = this;

        var play = setInterval( function(e) {
            if (thatController.model.snake.dead) {

                alert("Game is Over");
                clearInterval(play);
            } else {
                thatController.update();
            }
        } , 200);

    },

//change direction
  changeDirection : function(direction) {
    this.direction = direction;

},
//update game
  update: function() {
        this.view.drawGround();
    this.model.updateSnake(this.direction);
    this.view.drawFood();
    this.view.drawSnake();
    this.view.drawScore();
}
}
//start game
controller.init();
