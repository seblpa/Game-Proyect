function Player(ctx, x, y) {
  this.x = 480;
  this.y = 535;
  this.speed = 5;
  this.ctx = ctx;
  ctx.img = new Image();
  ctx.img.src = "images/hero.png";
  ctx.img.onload = function() {
    ctx.drawImage(ctx.img, ctx.x, ctx.y);
  };



Player.prototype.render = function(ctx) {
      this.ctx.x = this.x;
      this.ctx.y = this.y;
}

Player.prototype.moveRight = function (keyCode) {
 this.x+=1;
 console.log(this.x)
//       console.log('antes: ' + this.x);
//       /*if(keyCode === 39 && this.x > 480) {
//             this.x = 480;
//         }
//       */
      
//       switch (keyCode) {
           
//         case 39: 
//         if (this.x > 480) {
//             this.x += 1;
//         }
//         break;
//         case 37: 
//         if (this.x < 20) {
//               this.x = 20;
//         }
//         break;
//       default:
//         return;
//   }
  
}
}
