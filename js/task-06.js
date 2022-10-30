// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// 1. Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// 2. Если введено подходящее количество символов, то border инпута становится зелёным,
//  если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.

const input = document.querySelector ('#validation-input');
const inputLength = input.dataset.length;

function checkValue () {
   if (input.value.length < 6) {

     if (input.classList.contains("valid")){
       input.classList.replace("valid", "invalid");
     } else {
        input.classList.add("invalid");
     }
    
   } else {

     if (input.classList.contains("invalid")){
        input.classList.replace("invalid", "valid");
      } else {
         input.classList.add("valid");
      }

   }
}

input.addEventListener('blur', checkValue);