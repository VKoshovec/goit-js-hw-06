function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input 
// и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
// сколько указано в amount и добавляет их в div#boxes.

//   1.  Размеры самого первого <div> - 30px на 30px.
//   2.  Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
//   3.  Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
 
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.  

const controls = {
  input: document.querySelector('#controls').querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  elemBox: document.querySelector('#boxes'),
}

// check input value
const inputValue = () => {
  if (controls.input.value !=="" &&
   Number(controls.input.value) > 0 &&
   Number(controls.input.value) <= 99) {
    return controls.input.value;
  } else {
    alert("Input number from 1 to 99!");
    controls.input.value = "";
  }
}; 

controls.input.addEventListener('input', inputValue);

// callback - create single element <div> with style
const createElem = (wh) => {
  const newElem = document.createElement("div");
  newElem.style.width = `${wh}px`;
  newElem.style.height = `${wh}px`;
  newElem.style.margin = "10px";
  newElem.style.backgroundColor = getRandomHexColor();
  return newElem;
}

// creating collection 
const createCollection = () => {
  const elemQuantity = inputValue();
  const ElemArr = [];
  const startSize = 30;
  
  //clear collection
  controls.elemBox.innerHTML = "";

  for (let index = 0; index < elemQuantity; index++) {
    ElemArr.push(createElem(startSize + (index * 10)));
  }

  controls.elemBox.append(...ElemArr);
  controls.input.value = "";
}

// buttons events 
controls.btnCreate.addEventListener('click', createCollection);
controls.btnDestroy.addEventListener('click', ()=> {controls.elemBox.innerHTML = ""});

