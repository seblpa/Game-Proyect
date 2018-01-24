function Enemy (ctx) {
  this.x = 10;
  this.y = 10;
  this.width = 150;
  this.height = 80;
  this.speed = 30;
  this.ctx = ctx;
  this.time = Date.now();
}

Enemy.prototype.updateEnemy = function() {
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.move = function() {
  var now = Date.now()
  var delta = this.time-now;
  this.time = now;
  this.x -= this.speed*(delta/1000);
}

