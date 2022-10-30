// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const elements = {
    buttonUp: document.querySelector('button[data-action="increment"]'),
    buttonDown: document.querySelector('button[data-action="decrement"]'),
    score: document.querySelector('#value') 
};

const decrementValue = () => elements.score.innerHTML = counterValue -=1;
const incrementValue = () => elements.score.innerHTML = counterValue +=1;

elements.buttonUp.addEventListener('click', incrementValue);
elements.buttonDown.addEventListener('click', decrementValue);