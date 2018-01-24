function Player(ctx) {
  this.x = 500;
  this.y = 490;
  this.width = 100;
  this.height = 100;
  this.speed = 50;
  this.ctx = ctx;
}

Player.prototype.move= function(key) {
  var that = this;
  switch(key) {
    case 37:
    that.x -= this.speed;
    break;
    case 39:
    that.x += this.speed;
    break;
}
}


Player.prototype.updatePlayer = function (){
  this.ctx.fillStyle = "red";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}
