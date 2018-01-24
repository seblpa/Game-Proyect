function Bullet(posX) {
  this.x = posX;
  this.y = posY
	this.width = 5;
  this.height = 5;
  this.speed = 30;
}


Bullet.prototype.updateBullet = function (){
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Bullet.prototype.moveBullet = function() {
  console.log("entrando a la funcion de movimiento")
  
}

