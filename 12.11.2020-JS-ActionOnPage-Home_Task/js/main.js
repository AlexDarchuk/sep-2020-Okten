// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let block = document.createElement('div');
// block.setAttribute('id', 'text');
// document.body.appendChild(block);

// let btnHideBlock = document.createElement('button');
// btnHideBlock.setAttribute('class', 'btnHide');
// btnHideBlock.innerText = 'Hide!!!!!';
// document.body.appendChild(btnHideBlock);

// btnHideBlock.onclick = (ev) => {
//     block.style.display = 'none';
//     btnHideBlock.style.display = 'none';
// }

// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// //  та повідомити про це користувача

// let form = document.forms.form;
// let actionText = form.actionText;

// form.submit.addEventListener('click', ev => {
//       ev.preventDefault();
//       if(actionText.value > 18) {
//           alert('Ваш вік більше 18!');
//           actionText.value = '';
//       } else {
//           alert('Покиньтe сторінку!');
//           actionText.value = '';
//       }
//      });

//     //  - Создайте меню, которое раскрывается/сворачивается при клике

//     let menu = document.querySelector('.menu');
//     let btnHideMenu = document.querySelector('.hide')

//     btnHideMenu.onclick = (ev) => {
//         if (menu.style.height === '100%') {
//             menu.style.height = '0'
//             btnHideMenu.innerText = 'SHOW!';
//             return;
//         }
//             menu.style.height = '100%'
//             btnHideMenu.innerText = 'HIDE!';
//     };

// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вывести список комментариев в документ, каждый в своем блоке.
// // Добавьте каждому комментарию по кнопке для сворачивания его body.

// let cars = [
//     {producer: 'Audi', price: 22000, color: 'White'},
//     {producer: 'Bmw', price: 18000, color: 'Black'},
//     {producer: 'Mazda', price: 28000, color: 'Blue'},
//     {producer: 'Mercedes', price: 25000, color: 'Red'},
//     {producer: 'Toyota',  price: 20000, color: 'Gray'},
// ];



// cars.forEach(user => {
//     let div = document.createElement('div');
//     div.innerText = `producer: ${cars.producer}; age: ${cars.price}; color: ${cars.color}`;
    
//     div.style.backgroundColor = 'red';
//     div.style.margin = '30px';

//     let btn = document.createElement('button');
//     btn.innerText = 'DELETE!';

//     btn.onclick = (ev) => {
//       ev.target.parentElement.style.display = 'none'
//     }
//     div.appendChild(btn);
//     document.body.appendChild(div);
//   })

// //   - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується 
// //   та виводиться на консоль інформація з цих 2х форм.
// //   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// //   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let formBtn = document.querySelector('#formBtn');
// let form2 = document.forms.form2
// let form3 = document.forms.form3

// let textAc2 = form2.actionText2;
// let numberAc = form2.actionNamber;

// let textAc = form3.actionText;
// let passAc = form3.actionPass;

// formBtn.onclick = (ev) => {
//     ev.preventDefault();
//     console.log(passAc.value);
//     console.log(numberAc.value);
//     console.log(textAc.value);
//     console.log(passAc.value);
//     passAc.value = '';
// };

// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.

// // let blockTable = document.querySelector('.table');

// // function tableGener (tr, td, block) {
// //     let table = document.createElement('table');
// //         table.setAttribute('border', '1');
// //         table.style.width = '300px';
// //         table.style.height = '300px';
    
// //     for (let i = 1; i < tr; i++) {
// //         let tr = document.createElement('tr');
// //             tr.innerText = `${i}`;
// //             table.appendChild(tr);
// //         for (let j = 1; j < td; j++) {
// //             let td = document.createElement('td');
// //                 td.innerText = `${j}`;
// //             tr.appendChild(td);
// //         }
// //     }
// //     block.appendChild(table);
// // }
// // tableGener(10, 10, blockTable);

// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)

// let blockTable = document.querySelector('.myTable');
// let tableBtn = document.querySelector('#tableBtn');
// let inputTh = document.forms.formTabl.inputTh;
// let inputTd = document.forms.formTabl.inputTd;
// let inputTdIn = document.forms.formTabl.inputTdIn;

// tableBtn.addEventListener('click', (ev) => {

//     tableGener(inputTh.value, inputTd.value, inputTdIn.value, blockTable);
   
// });


// function tableGener (tr,td,numberTd,block) {
//     block.innerHTML = '';
//     let table = document.createElement('table');
//         table.setAttribute('border', '1');
//         table.style.width = '300px';
//         table.style.height = '300px';
    
//     for (let i = 1; i <= tr; i++) {
//         let tr = document.createElement('tr');
//             tr.innerText = `${i}`;
//             table.appendChild(tr);
//         for (let j = 1; j <= td; j++) {
//             let td = document.createElement('td');
//                 td.innerText = `${numberTd}`;
//             tr.appendChild(td);
//         }
//     }
//     block.appendChild(table);
// }

// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let img = document.querySelectorAll('.carousel__img');
// let nextBtn = document.querySelector('.next');
// let prevBtn = document.querySelector('.prev');
// let vievSlide = 0;

// function showSlides(n) {
//     if (n > img.length) {
//         vievSlide = 1;
//     }
//     if (n < 1) {
//         vievSlide = img.length;
//     }
//     img.forEach(item => item.style.display = 'none');
//     img[vievSlide-1].style.display = 'block';
// }

// showSlides(vievSlide);

// nextBtn.addEventListener('click', () => {
//     showSlides(vievSlide += 1)
// });
// prevBtn.addEventListener('click', () => {
//     showSlides(vievSlide += -1)
// });


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку


// let words = ['дідько', 'грець', 'рило', 'бахур', 'джмелик', 'живчик'];


// let inputWords = document.querySelector('input[name=inputWord]');
// let wordsBtn = document.querySelector('div.word button');
// wordsBtn.addEventListener('click', () =>{
// let aaa = -1;
//     for (const word of words) {
//         console.log(word);
//         if(aaa < 0) aaa = document.forms.formWord.inputWord.value.indexOf(word);
//         console.log(aaa);
//     }
//     alert(aaa === -1 ? 'Іди в гінделик повчися!' : 'Чувак ти багато знаєш!');
// });



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let h2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');

// for (let i = 0; i < h2.length; i++) {
//     let li= document.createElement('li');
//     let a = document.createElement('a');
//     let link = 'link' + i;
//     a.href = '#' + link;
//     h2[i].setAttribute('id' , link);
//     a.innerHTML = h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }

// content.appendChild(ul);
// content.style.width = '30%';
// wrap.style.width = '70%';
// content.style.float = 'left';
// wrap.style.float = 'left';

// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];

let content = document.getElementById('content');
let filterContent = document.createElement('div');
filterContent.appendChild(filterUsers(usersWithAddress));


let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');

let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');

let btn = document.createElement('button');
    btn.innerText = 'Відсіяти';

label1.innerText = 'Статус fslse';
label2.innerText = 'Старші 29 років';
label3.innerText = 'Проживають у місті київ';

input1.type = 'checkbox';
input2.type = 'checkbox';
input3.type = 'checkbox';

content.appendChild(filterContent);
content.appendChild(label1);
content.appendChild(input1);
content.appendChild(label2);
content.appendChild(input2);
content.appendChild(label3);
content.appendChild(input3);
content.appendChild(btn);

btn.onclick = (ev) => {
    let myUser = JSON.parse(JSON.stringify(usersWithAddress));

    if(input1.checked) myUser = myUser.filter((value) => !value.status);
    if(input2.checked) myUser = myUser.filter((value) => value.age >= 29);
    if(input3.checked) myUser = myUser.filter((value) => value.address.city ==='Kyiv');

    filterContent.innerHTML = '';
    filterContent.appendChild(filterUsers(myUser));
}

function filterUsers (arr) {
    let main = document.createElement('div');
    arr.forEach(item => {
        let block = document.createElement('div');
        let h3 = document.createElement('h3');
        block.innerHTML = JSON.stringify(item);
        main.appendChild(block);
    });
    return main;
}