function Game() {
this.canvas = document.getElementById('canvas');
this.ctx = canvas.getContext('2d');
this.player = new Player(ctx);
this.background = new Background(ctx);

 //window.requestAnimationFrame(game(), game.move())
}