// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let world = {
  dog: {name: 'tuzik', age: 8, status: true, color: 'black', breed: 'shepherd'},
  person: {name: 'kolya', age: 25, status: true, nationality: 'ukrainian', height: 180},
  car: {model: 'skoda', color: 'gray', age: 6, fuel: 'diesel', power: 81},
  apartment : {size: 68, rooms: 2, balcony: true, floor: 4,},
  book: {name: 'javaScript for kids', author: 'Nick Morgan', pages: 336, language: 'ukraine', price: 280}
};
console.log(world);

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let life = ['rex', 'sharik', 'max', 'lucy', 'duke', 'vasya', 'olya', 'anna', 'oleg', 'masha', 'skoda', 'audi', 'mazda', 'bmw', 'toyota'];

console.log(life);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка


let everyDayLife = {
    apartment : {size: 68, rooms: 2, balcony: true, floor: 4,},
    driver: {nameAge: ['Bob', 31,], height: 186, bus: 'MAN'},
    toy: {color: 'white', name: 'Luky', soft: true, },
    table: {producer: 'JYSK', features: {color: 'white', width: 80, length: 120, weight: 21}},
    bag: {color: 'black', producer: 'guess', model: 'shopper bag', price: 100}
};
console.log(everyDayLife);

// Дан массив:
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
            ];
            
console.log(users[7].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[9].age);
console.log(users[4].age + ' ' + users[4].name);
console.log(users[5].age + ' ' + users[5].status);

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let content = document.getElementById('content');
console.log(content.innerText);

let rules = document.getElementById('rules');
console.log(rules.innerText);


content.textContent = 'Я тут!';
rules.textContent = 'Я ще ще ще ще ще раз тут!'

// - отримати всі елементи з класом fc_rules
let elemLi = document.getElementsByClassName('fc_rules');

// - поміняти колір тексту у всіх елементів fc_rules на червоний
for (let tagLi of elemLi) {
    tagLi.style.color = 'red';
}

let elements = [content, rules,];

for (let elem of elements) {
    elem.style.background = 'red';
    elem.style.color = 'blue';
}
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClass = rules.classList.value;
console.log(rulesClass);


