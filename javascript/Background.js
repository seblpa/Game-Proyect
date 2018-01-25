function Background(ctx) {
  this.img = new Image();
  this.img.src = "images/background.png";
}

Background.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, 0, 0);
}
