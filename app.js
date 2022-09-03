let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

let xPos = 10;
let yPos = 150;
let grav = 1.5;
let gap = 90;
let pipe = [];

bird.src = "img/flappy_bird_bird.png";
bg.src = "img/bcg.jpeg";
pipeUp.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";

document.addEventListener('DOMContentLoaded', draw)
document.addEventListener("keydown", moveUp);

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

function moveUp() {
    yPos -= 25;
}

pipe[0] = {
    x: cvs.width,
    y: 0
}
console.log(cvs.width)


function draw() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(bird, xPos, yPos);

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x -= 3;
        console.log(pipe[i].x)

        if (pipe[i].x == 1167) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        if (xPos + bird.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y + pipeUp.height || 
            yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || 
            yPos + bird.height >= cvs.height) {
            location.reload(); 
        }
    }

    yPos += grav;

    requestAnimationFrame(draw);
}