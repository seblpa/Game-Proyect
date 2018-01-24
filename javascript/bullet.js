function Bullet(posX, posY,ctx) {
  this.x = posX;
  this.y = posY
	this.width = 5;
  this.height = 5;
  this.speed = 30;
}
Bullet.prototype.moveBullet = function() {
  console.log("entrando a la funcion de movimiento")
  this.y -= this.speed;
}


Bullet.prototype.updateBullet = function (ctx){
  ctx.fillStyle = "red";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}