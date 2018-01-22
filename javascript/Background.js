function Background(ctx) {
ctx.background = new Image();
ctx.background.src = 'images/background.png';
ctx.background.onload = function(){
ctx.drawImage(ctx.background, 0, 0);
}
}
