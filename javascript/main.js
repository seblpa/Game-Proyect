window.onload = function () {
var game = new Game();
var bullet;
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

//aqui iremos añadiendo update de enemy, y otros objetos
function update(){
  game.player.updatePlayer(game.ctx, game.player);
  if(typeof(bullet)!="undefined"){
    bullet.updateBullet(game.ctx)
    bullet.moveBullet() 
  }
  game.enemy.updateEnemy(game.ctx, game.enemy);
  game.enemy.move();
  game.enemy.moveR();
  game.enemy.moveL();
  game.enemy.canMoveR();
  game.enemy.canMoveL();
}



//estas lineas ya no se tocan
function updateCanvas(){
  game.ctx.clearRect(0,0,1000,600);
  update();
  window.requestAnimationFrame(updateCanvas);
}
window.requestAnimationFrame(updateCanvas);
}


