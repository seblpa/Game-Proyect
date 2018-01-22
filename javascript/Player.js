function Player(ctx,x,y) {
  ctx.x = 255;
  ctx.speed = 5;
  ctx.img = new Image();
  ctx.img.src = "imgages/player.png";
  ctx.img.onload = function () {
        ctx.drawImage(img, ctx.x,580);
 
  }
}

CreatePlayer.prototype.move = function (key) {
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