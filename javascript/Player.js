function Player(ctx) {
  this.x = 500;
  this.y = 490;
  this.width = 100;
  this.height = 100;
  this.speed = 50;
  this.ctx = ctx;
  this.img = new Image();
  this.img.src = 'images/hero.png'
}

Player.prototype.move = function(key) {
  switch(key) {
    case 37:
    this.x -= this.speed;
    break;
    case 39:
    this.x += this.speed;
    break;
}
}

Player.prototype.updatePlayer = function (){
  this.ctx.drawImage(this.img,this.x,this.y)
  // this.ctx.fillStyle = "red";
  // this.ctx.fillRect(this.x, this.y, this.width, this.height);
}
