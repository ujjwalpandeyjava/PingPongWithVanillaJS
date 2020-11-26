
var ctx, canvas, ballX = 50, ballY = 50, changeInballX = 15, changeInBallY = 10;
var leftPaddleY = 200, rightPaddleY = 100;
var x = 0;
var player1Score = 0, player2Score = 0;
const paddleHeight = 100, paddleWidth = 10;
var audio1 = document.getElementById("myAudio1");
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');
window.onload = function () {
    let framesPerSec = 20;
    setInterval(() => {
        movingThings();
        drawEverything();
    }, 1000 / framesPerSec);
    canvas.addEventListener('mousemove', function (Event) {
        var mousPos = calculateMousePos(Event)
        leftPaddleY = mousPos.y - (paddleHeight / 2)

    })
}
function drawNet() {
    for (let i = 0; i < canvas.width; i += 40) {
        ctx.fillStyle = 'white'
        ctx.fillRect(canvas.width / 2 - 1, i, 2, 20)
    }
}
function drawEverything() {
    //canvas
    ctx.fillStyle = '#0e0e0f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // console.log("Draw fired.");
    //net
    drawNet();
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
    ctx.fillRect(canvas.width - 10, rightPaddleY, paddleWidth, paddleHeight)
    //score
    ctx.fillText(player1Score, 150, 100)
    ctx.fillText(player2Score, canvas.width - 150, 100)
}
function rightPaddleAI() {
    rightPaddleYCenter = rightPaddleY - (paddleHeight / 2)
    if (rightPaddleYCenter < ballY - 35) {
        rightPaddleY += 8.5;
    } else if (rightPaddleYCenter > ballY + 35) {
        rightPaddleY -= 8.5;
    }
}
function movingThings() {
    rightPaddleAI();
    ballX += changeInballX;
    ballY += changeInBallY;
    if (ballX >= canvas.width - 10) {
        if (ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
            audio1.play();
            changeInballX *= -1;
        } else {
            player1Score++;
            ballReset();
        }
    }
    if (ballX <= 10) {
        if (ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
            audio1.play();
            changeInballX *= -1;
        } else {
            player2Score++;
            ballReset();
        }
    }
    if (ballY >= canvas.height - 5) {
        changeInBallY *= -1;
    }
    if (ballY <= 5) {
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
};
function ballReset() {
    if (player1Score >= 3) {

    }
    else if (player2Score >= 3) {

    }
}
changeInballX *= -1;
ballX = canvas.width / 2;
ballY = canvas.height / 2;
}