let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let groot = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

let xPos = 100;
let yPos = 150;
let grav = 5;
let gap = 200;
let pipe = [];
var score = 0;

groot.src = "img/groot.png";
bg.src = "img/bcg.jpeg";
fg.src = "img/earth.png";
pipeUp.src = "img/up.png";
pipeBottom.src = "img/bottom.png";

document.addEventListener('DOMContentLoaded', draw)
document.addEventListener("keydown", moveUp);

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

function moveUp() {
    yPos -= 45;
}

pipe[0] = {
    x: cvs.width,
    y: 0
}

function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(groot, xPos, yPos);
    drawGroot()

    ctx.drawImage(fg, 0, cvs.height - fg.height + 10);

    ctx.fillStyle = "#fff";
    ctx.font = "24px Luckiest Guy";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

function drawGroot() {
    yPos += grav;

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x - 100, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x -= 1;

        if (pipe[i].x == 1167) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        if (xPos + groot.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y + pipeUp.height ||
            yPos + groot.height >= pipe[i].y + pipeUp.height + gap) ||
            yPos + groot.height >= cvs.height - fg.height) {

            popup.style.display = 'block';
            return 
            // location.reload();
        }
        console.log(pipe[i].x)
        if (pipe[i].x == 36) {
            score++;
        } //score?????????????????/
    }
}
const popup = document.getElementById("popup");

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});