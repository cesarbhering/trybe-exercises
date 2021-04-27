const btnClickHere = document.getElementById('clickHere');
let clicksDone = 0;
document.getElementById('clickCounter').innerText = clicksDone;

btnClickHere.addEventListener('click', () => (clicksDone += 1, document.getElementById('clickCounter').innerText = clicksDone));