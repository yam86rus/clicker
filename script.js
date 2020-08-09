let clicks = 1; // храним число кликов
let bestScore = 0; // хранима лучший результат
const TIMEOUT = 5000; // продолжительность игры 5 секунд

// получение элементов
const display = document.getElementById('display'),
    button = document.getElementById('button'),
    counter = document.getElementById('counter'),
    scoreValue = document.querySelector('.score-value'),
    buttonRestart = document.getElementById('button-restart');

// функции

function start() {
    counter.textContent = clicks++; // сразу выводим +1 клик
    const startTime = Date.now(); //получаем текущее количество милисекунд
    display.textContent = formatTime(TIMEOUT); // выводим количество оставшихся милисекунд
    button.onclick = () => counter.textContent = clicks++; // увеличиваем количество кликов

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100);


    const timeout = setTimeout(() => {
        button.onclick = null; //Убираем обработчик с кнопки
        display.textContent = 'Game Over. Your score: ' + (clicks - 1); //Выводим сообщение 'Game Over'
        buttonRestart.style.display = 'block';
        button.textContent = ':)';
        button.style.backgroundColor = '#ff9d6b';
        bestScore = clicks > bestScore ? clicks - 1 : bestScore; // обновляем BestScore
        scoreValue.textContent = bestScore; // выводим Best Score на экран

        clearInterval(interval);
        clearTimeout(timeout);

    }, TIMEOUT);
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}

// события
button.onclick = start; // событие на кнопку Start

buttonRestart.addEventListener('click', () => { // событие на кнопку Restart
    clicks = 0;
    button.textContent = 'Click!';
    button.style.backgroundColor = '#fc5e32';
    counter.textContent = clicks;
    buttonRestart.style.display = 'none';
    start();
});

// При запуске выполняются функции
scoreValue.textContent = bestScore;