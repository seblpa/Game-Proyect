function Enemy (ctx,x,y) {
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.speed = 2;
  this.ctx = ctx;
  this.time = Date.now();
  this.directionR = true;
  this.img = new Image();
  this.img.src = 'images/enemy.png';
}

Enemy.prototype.updateEnemy = function() {
this.ctx.drawImage(this.img,this.x,this.y, 35, 35);  
}

Enemy.prototype.moveR = function() {
  if(this.canMoveR()){
    this.x += this.speed;
  };
}

Enemy.prototype.moveL = function() {
  if(this.canMoveL())this.x -= this.speed;
}
Enemy.prototype.moveDown = function() {
    this.y += 40;
  };

Enemy.prototype.canMoveR = function() {
  if(this.x >=890){
    this.directionR = false;
    return false;
  }else{return true}
}

Enemy.prototype.canMoveL = function() {
  if(this.x <=80){
    this.directionR = true;
    return false;
  }else{return true}
}


