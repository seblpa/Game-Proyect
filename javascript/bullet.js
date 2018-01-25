function Bullet(posX, posY,ctx) {
  this.x = posX;
  this.y = posY;
	this.width = 5;
  this.height = 5;
  this.speed = 10; 
  this.img = new Image();
  this.img.src = 'images/missile1.png';
}
 
Bullet.prototype.moveBullet = function() {
    this.y -= this.speed;
}

Bullet.prototype.updateBullet = function (ctx){
  ctx.drawImage(this.img,this.x,this.y); 
}


