
var ctx, canvas, ballX = 50, ballY = 50, changeInballX = 15, changeInBallY = 10;
var audio1 = document.getElementById("myAudio1");
window.onload = function () {
    let framesPerSec = 60;
    setInterval(() => {
        movingThings();
        drawEverything();

    }, 1000 / framesPerSec);
}
function movingThings() {
    ballX += changeInballX;
    ballY += changeInBallY;
    if (ballX >= 900 || ballX <= 0) {
        audio1.play();
        changeInballX *= -1;
    }
    if (ballY >= 700 || ballY <= 0) {
        changeInBallY *= -1;
    }
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
    ctx.arc(ballX, ballY, 7, 0, 2 * Math.PI);
    ctx.fillStyle = "RED"
    ctx.fill();
    //Paddle Left

    ctx.fillStyle = 'white'
    ctx.fillRect(0, 100, 10, 100)
    //Paddle Right
    ctx.fillStyle = 'white'
    ctx.fillRect(canvas.width - 10, 200, 10, 100)
}