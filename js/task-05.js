// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

const elements = {
    input: document.querySelector('#name-input'),
    caption: document.querySelector('#name-output')
}

const setValue = () => {
    if (elements.input.value != "") {
        elements.caption.textContent = elements.input.value
    } else {
        elements.caption.textContent = "Anonymous";
    }
};

elements.input.addEventListener('input', setValue);