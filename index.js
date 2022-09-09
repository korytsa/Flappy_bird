const form = document.querySelector(".filds");
const input = document.querySelector("#name");
const button = document.querySelector(".startBtn");

const validInput = ({target}) => {
    if (target.value.length > 2 && target.value.length < 10) {
        button.removeAttribute('disabled');
        return
    }
    button.setAttribute("disabled", "");
};

function triggerInput() {
    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });

    input.dispatchEvent(event);
}

input.addEventListener("input", validInput, false);

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("player", input.value);
    window.location = "./game.html";
};

form.addEventListener("submit", handleSubmit, false);

//sounds
const groots = (document.querySelector('.groots'))
const grootSounds = new Audio();

grootSounds.src = "sounds/whoosh.mp3";
// console.log(allGroot)

groots.addEventListener('mouseover', (e) => {
    if(e.currentTarget !== e.target){
        grootSounds.play()
    }
})