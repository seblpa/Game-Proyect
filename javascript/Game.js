function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.player = new Player(this.ctx);
  this.enemies = [];
  this.numberOfEnemies =12;
  this.bullet = new Bullet(this.player.x,this.player.y,this.ctx);
}

Game.prototype.generateEnemies = function() {
  for (i = 0; i <= this.numberOfEnemies; i++) {
    this.enemies.push(new Enemy(this.ctx, 50 * i, 10));
  }
  for (i = 0; i <= this.numberOfEnemies; i++) {
    this.enemies.push(new Enemy(this.ctx, 50 * i, 60));
  }
  for (i = 0; i <= this.numberOfEnemies; i++) {
    this.enemies.push(new Enemy(this.ctx, 50 * i, 110));
  }
  for (i = 0; i <= this.numberOfEnemies; i++) {
    this.enemies.push(new Enemy(this.ctx, 50 * i, 160));
  }
};
Game.prototype.updateEnemiesDirection = function() {
  var lastEnemy = this.enemies[this.enemies.length-1];
  var firstEnemy = this.enemies[0];
  //si el último no puede moverse hacia la derecha, le cambiamos la dirección a todos hacia la izquierda.
  if (!lastEnemy.canMoveR()) {
      this.enemies.forEach(function(enemy) {
      enemy.directionR = false;
    });
  }
  //si el primero no puede moverse hacia la izquierda, le cambiamos la dirección a todos hacia la derecha.
  else if(!firstEnemy.canMoveL()) {
    this.enemies.forEach(function(enemy) {
      enemy.directionR = true;
    });
  }

};

Game.prototype.updateEnemiesMove = function(){
    this.enemies.forEach(function(enemy) {
      if(enemy.directionR)enemy.moveR();
      else enemy.moveL();
    });
}

var counter = 0;

Game.prototype.detecteColision = function(bullet){
  for (var i = 0; i < this.enemies.length; i++) {
    if (this.enemies[i].x < bullet.x + bullet.width &&
      this.enemies[i].x + this.enemies[i].width > bullet.x &&
      this.enemies[i].y < bullet.y + bullet.height &&
      this.enemies[i].y + this.enemies[i].height > bullet.y) {
        
        this.enemies[i].y = -900
        counter++;

    }
    this.ctx.font="30px Ubuntu";
    this.ctx.fillStyle = '#fff'
    this.ctx.fillText('Score: '+counter,50,570)
}
}

Game.prototype.generateExplosion = function() {
 
}