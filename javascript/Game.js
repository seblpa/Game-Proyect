function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.player = new Player(this.ctx);
  this.bullet = new Bullet(this.player.x,this.player.y,this.ctx)
}
