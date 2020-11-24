
var ctx, canvas, ballX = 50, ballY = 50;
window.onload = function () {
    drawEverything();
}
function drawEverything(ctx) {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    //canvas
    ctx.fillStyle = '#0e0e0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // console.log("Draw fired.");
    //Ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "RED"
    ctx.fill();
}