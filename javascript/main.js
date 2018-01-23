window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var game = new Game();
    setInterval(function() {
      game.player.render();
      game.player.moveRight();
    }, 100);
  };
}


  /*
  document.onkeydown = function (key) {
    switch (key) {
          case 37: // left
                if (game.player.x - game.player.speed > 0) {
                      game.player.x -= game.player.speed;
                }
          break;
          case 39: // right
          if (game.player.x + game.player.speed < 950) {
                game.player.x += game.player.speed;
          }
          break;      
         
  }
}
}
*/