// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const elem = { 
    fontSizeControl: document.querySelector ('#font-size-control'),
    text: document.querySelector('#text'),
}    

const changeFontSize = () => {
    elem.text.style.fontSize = `${elem.fontSizeControl.value}px`;
}

elem.fontSizeControl.addEventListener('change' , changeFontSize);