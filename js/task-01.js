//1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.

const categoreis = document.querySelector("#categories").querySelectorAll(".item");
console.log(categoreis.length);

//2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и
//  количество элементов в категории (всех вложенных в него <li>).

categoreis.forEach((cat) => { 
    console.table(cat.firstElementChild.textContent, cat.querySelectorAll('li').length);
});

