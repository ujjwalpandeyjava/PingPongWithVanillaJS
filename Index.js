
var ctx, canvas, ballX = 50, ballY = 50, changeInballX = 15, changeInBallY = 10;
var leftPaddleY = 200, RightPaddleY = 0;
const paddleHeight = 100, paddleWidth = 10;
var audio1 = document.getElementById("myAudio1");
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');
window.onload = function () {
    let framesPerSec = 60;
    setInterval(() => {
        movingThings();
        drawEverything();

    }, 1000 / framesPerSec);
    canvas.addEventListener('mousemove', function (Event) {
        var mousPos = calculateMousePos(Event)
        leftPaddleY = mousPos.y - (paddleHeight / 2)
        
    })
}
function drawEverything() {
    //canvas
    ctx.fillStyle = '#0e0e0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // console.log("Draw fired.");
    //Ball
    ctx.beginPath();
    ctx.arc(ballX, ballY, 7, 0, 2 * Math.PI), true;
    ctx.fillStyle = "RED"
    ctx.fill();
    //Paddle Left
    ctx.fillStyle = 'white'
    ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight)
    //Paddle Right
    ctx.fillStyle = 'white'
    ctx.fillRect(canvas.width - 10, 200, paddleWidth, paddleHeight)
}
function movingThings() {
    ballX += changeInballX;
    ballY += changeInBallY;
    if (ballX >= canvas.width - 5 || ballX <= 5) {
        audio1.play();
        changeInballX *= -1;
    }
    if (ballY >= canvas.height - 5 || ballY <= 5) {
        changeInBallY *= -1;
    }
}
function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}