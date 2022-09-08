let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

const popup = document.getElementById("popup");
const result = document.querySelector('.result');
const ratingBtn = document.querySelector('.ratingBtn');
const mainPageBtn = document.querySelector('.mainPageBtn');
const againBtn = document.querySelector('.againBtn');

let groot = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

let xPos = 100;
let yPos = 150;
let grav = 1.5;
let gap = 230;
let pipe = [];
var score = 0;

groot.src = "img/groot.png";
bg.src = "img/bcg.jpeg";
fg.src = "img/earth.png";
pipeUp.src = "img/up.png";
pipeBottom.src = "img/bottom.png";

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

window.addEventListener('resize', function () {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
}, true);

document.addEventListener('DOMContentLoaded', draw)
document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 38:
            yPos -= 25;
            break;
        case 40:
            yPos += 25;
            break;
        case 39:
            xPos += 25;
            break;
        case 37:
            xPos -= 25;
            break;
        default:
            break;
    }
});
document.addEventListener('click', () => {
    window.navigator.vibrate(200)
    yPos -= 25;
})

// window.onbeforeunload = function () {
//     return "Are you sure?";
// }

pipe[0] = {
    x: cvs.width,
    y: 0
}

function draw() {
    ctx.drawImage(bg, 0, 0, cvs.width, cvs.height);
    ctx.drawImage(groot, xPos, yPos);

    drawGroot();

    ctx.drawImage(fg, 0, cvs.height - fg.height + 20);

    ctx.fillStyle = "#fff";
    ctx.font = "24px Luckiest Guy";
    ctx.fillText("Score: " + score, 10, cvs.height - 15);
    ctx.fillText("Name: " + localStorage.getItem('player'), 120, cvs.height - 15);

    requestAnimationFrame(draw);
}

function drawGroot() {
    yPos += grav;

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y - 190);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y - 190 + pipeUp.height + gap);

        pipe[i].x -= 1;

        if (cvs.width >= 1100) {
            if (pipe[i].x == 1000) {
                pipe.push({
                    x: cvs.width,
                    y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
                });
            }
        } else if (cvs.width <= 600) {
            if (pipe[i].x == 50) {
                pipe.push({
                    x: cvs.width,
                    y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
                });
            }
        }

        if (xPos + groot.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y - 190 + pipeUp.height ||
                yPos + groot.height >= pipe[i].y + pipeUp.height + gap) || yPos + groot.height >= cvs.height - fg.height) {

            popup.style.display = 'block';
            pipe[i].x = cvs.width;
            result.textContent = `Ваш результат: ${score}`;
        }

        if (xPos + groot.width === pipe[i].x + pipeUp.width) {
            score++;
        }
    }
}

againBtn.addEventListener('click', () => {
    location.reload();
})

ratingBtn.addEventListener('click', () => {
    // const obj = {
    //     'name': localStorage.getItem('player'),
    //     'score': score
    // };
    // localStorage.setItem('object', JSON.stringify(obj));
    window.location = "./result.html";
})

mainPageBtn.addEventListener('click', () => {
    window.location = "./index.html";
})