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
let th = document.createElement('th');
th.innerHTML = `
    <tr>Name</tr>
    <tr>score</tr>
`
//info output
const names = ['Ksishik', 'Ann', 'Liz'];
const score = [3, 2, 4];

const json = localStorage.getItem('object')
const normaObj = JSON.parse(json);

names.push(normaObj.name)
score.push(normaObj.score)

for (let i = 0; i < names.length; i++) {
    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${names[i]}</td>
        <td>${score[i]}</td>
    `
    tbody.appendChild(tr)
}

thead.appendChild(th);
table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(heading);
document.getElementById('body').appendChild(table);
document.getElementById('body').appendChild(tableBcg);
