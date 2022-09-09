let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tableBcg = document.createElement('div');
let heading = document.createElement('h2');

table.classList.add('table');
thead.classList.add('thead');
tbody.classList.add('tbody');
tableBcg.classList.add('table_bcg');

heading.textContent = 'Rating'

//heading
let tr = document.createElement('tr');
let th1 = document.createElement('th');
let th2 = document.createElement('th');
let th3 = document.createElement('th');

th1.textContent = 'Place';
th2.textContent = 'Name';
th3.textContent = 'Score';

tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)


//info output
const names = [];
const score = [];

const json = localStorage.getItem('result')
const normResult = JSON.parse(json);

for (let i = 0; i < normResult.length; i++) {
    normResult.sort((a,b) => {
        return (b.score - a.score)
    })
    
    names.push(normResult[i].name)
    score.push(normResult[i].score)
}

for (let i = 0; i < names.length; i++) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.textContent = [i + 1];
    td2.textContent = `${names[i]}`;
    td3.textContent = `${score[i]}`;

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tbody.appendChild(tr)
}

thead.appendChild(tr);
table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(heading);
document.getElementById('body').appendChild(table);

//buttons
let buttons = document.createElement('div');
let mainPageBtn = document.createElement('button');
let playAgainBtn = document.createElement('button');

buttons.classList.add('buttonsResultPage');

mainPageBtn.textContent = 'Main page';
playAgainBtn.textContent = 'Play again';

buttons.appendChild(mainPageBtn);
buttons.appendChild(playAgainBtn);

document.getElementById('body').appendChild(buttons);
document.getElementById('body').appendChild(tableBcg);

playAgainBtn.addEventListener('click', () => {
    window.location = "./game.html";
})

mainPageBtn.addEventListener('click', () => {
    window.location = "./index.html";
})