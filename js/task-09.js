function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
// при клике на button.change-color и выводит значение цвета в span.color
// Для генерации случайного цвета используй функцию getRandomHexColor

const btnColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const changeColor = () => {
  const currentColor = getRandomHexColor();
  spanColor.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
}

btnColor.addEventListener('click',changeColor);