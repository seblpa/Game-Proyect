window.onload = function () {
var background = new Background();
var game = new Game();
game.generateEnemies()
var bullet = new Bullet();
$(document).keydown(function(e){
  switch(e.keyCode){
      case 37: // izquierda
      game.player.move(e.keyCode);
      game.player.updatePlayer();
      break;
      case 39: // derecha
      game.player.move(e.keyCode);
      game.player.updatePlayer();
      break;
      case 32:  //bullets
      bullet = new Bullet(game.player.x,game.player.y,game.ctx)
      break;
  }
});

function update(){
  background.draw(game.ctx);
  game.detecteColision(bullet);
  game.updateEnemiesDirection();
  game.updateEnemiesMove();
  game.generateExplosion();
  game.player.updatePlayer(game.ctx, game.player);
  if(typeof(bullet)!="undefined"){
    bullet.updateBullet(game.ctx)
    bullet.moveBullet() 
  }
  game.enemies.forEach(function(enemy){ 
    enemy.updateEnemy();  
  })
 
}

//estas lineas ya no se tocan
function updateCanvas(){
  game.ctx.clearRect(0,0,1000,600);
  update();
  window.requestAnimationFrame(updateCanvas);
}
window.requestAnimationFrame(updateCanvas);
}



