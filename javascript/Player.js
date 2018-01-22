function Player(ctx,x,y) {
  this.x = 255;
  this.speed = 5;
  this.img = new Image();
  this.img.src = "images/player.png";
  this.img.onload = function(){
      this.drawImage(this.img, 0, 580);
  }
}

Player.prototype.move = function (key) {
  switch (key) {
      case 37: // left
            ctx.x -= ctx.speed;
            if (ctx.x < 35) {
                  ctx.x = 35;
            }
      break;
      case 39: // right
            ctx.x += ctx.speed;
            if (ctx.x > 480) {
                  ctx.x = 480;
            }
      break;      
      default:
      return; // exit ctx handler for other keys
  }
}