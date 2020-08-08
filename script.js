let clicks = 0; // храним число кликов

const TIMEOUT = 5000; // продолжительность игры 5 секунд

// получение элементов
const display = document.getElementById('display');
const button = document.getElementById('button');
const counter = document.getElementById('counter');

// функции

function start() {
    const startTime = Date.now(); //получаем текущее количество милисекунд
    display.textContent = formatTime(TIMEOUT); // выводим количество оставшихся милисекунд
    button.onclick = () => counter.textContent = clicks++; // увеличиваем количество кликов

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);


    const timeout = setTimeout(() => {
        button.onclick = null; //Убираем обработчик с кнопки
        display.textContent = 'Game Over'; //Выводим сообщение 'Game Over'

        clearInterval(interval);
        clearTimeout(timeout);

    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

// события
button.onclick = start;