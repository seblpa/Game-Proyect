function Enemy (ctx) {
  this.x = 10;
  this.y = 10;
  this.width = 150;
  this.height = 80;
  this.speed = 2;
  this.ctx = ctx;
  this.time = Date.now();
}

Enemy.prototype.updateEnemy = function() {
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.move = function() {
  this.x += this.speed;
}

Enemy.prototype.moveR = function() {
  if(this.canMoveR())this.x += this.speed;
}

Enemy.prototype.moveL = function() {
  if(this.canMoveL())this.x -= this.speed;
}

Enemy.prototype.canMoveR = function() {
  console.log(this.x,this.speed)
  if(this.x >=850){
    this.speed = -2;
    this.y += 20;
  }
}

Enemy.prototype.canMoveL = function() {
   if(this.x <= 0){
      this.speed= 2;
      this.y += 20;
   }; 
}

