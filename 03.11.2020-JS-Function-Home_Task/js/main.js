// // - створити функцію яка виводить масив

// let myArray = [5, 6, 2, 9 ,4];

// function showArray (my) {
//     console.log(my);
// }

// // showArray(myArray);

// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function randomArray (lenght) {
//     let myArray = [];
//     for (let i = 0; i < lenght; i++) {
//        myArray.push(Math.floor(Math.random() *12))  
//     }
//     return myArray;
// }
// const arra1 = randomArray(10);
// showArray(arra1);

// // - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function minNumber (a,b,c) {
//     console.log(Math.min(a,b,c)); 
// }
// minNumber(9,6,8);

// // - створити функцію яка приймає три числа та виводить та повертає найбільш

// function maxNumber (a,b,c) {
//     console.log(Math.max(a,b,c)); 
// }
// maxNumber(9,6,8);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function showMax () {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let key of arguments) {
//         if(key > max) {max = key};
//         if(key < min) {min = key};
//     }
//     console.log(max);
//     return min;
// }

// let min = showMax(3,6,7,9);
// console.log(min);


// - створити функцію яка повертає найбільше число з масиву

// let maxArray = [5, 8, 2, 90, 46, 4];

// function maxNumArr (maxArray){
//     let maxValue = maxArray[0];

//    for (let i = 0; i < maxArray.length; i++) {
//        if(maxArray[i] > maxValue) {
//            maxValue = maxArray[i]
//        }
//     }   

//     console.log(maxValue);
// }
// maxNumArr(maxArray);

// // - створити функцію яка повертає найменьше число з масиву

// let minArray = [5, 8, 2, 90, 46, 4];

// function minNumArr (minArray){
//     let minValue = minArray[0];

//    for (let i = 0; i < minArray.length; i++) {
//        if(minArray[i] < minValue) {
//            minValue = minArray[i]
//        }
//     }   

//     console.log(minValue);
// }
// minNumArr(minArray);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let sumArray = [5, 8, 2, 90, 46, 4];
// let sumNum = 0;

// function sumNumber (sumArray) {
//     for (let i = 0; i < sumArray.length; i++) {
//         sumNum += sumArray[i];   
//     }  
//     return sumNum;
// }
// sumNumber(sumArray);
// console.log(sumNum);

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let mediumNamber = 0;
// function mediumNum (sumArray) {
//     mediumNamber = sumNum / sumArray.length;
//     return mediumNamber;
// }
// mediumNum(sumArray);
// console.log(mediumNamber);

// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let avto = [
//     {production: 'toyota', power: 67, color: 'black', year: 2010},
//     {production: 'mazda', power: 86, color: 'gray', year: 2015},
//     {production: 'opel', power: 90, color: 'red', year: 2013},
//     {production: 'bmw', power: 70, color: 'black', year: 2009},
//     {production: 'citroen', power: 83, color: 'gray', year: 2017},
//     {production: 'renault', power: 97, color: 'red', year: 2019},
//     {production: 'honda', power: 80, color: 'black', year: 2000},
//     {production: 'kia', power: 65, color:'gray', year: 2016},
//     {production: 'audi', power: 91, color: 'red', year: 2004},
//     {production: 'mercedes', power: 100, color: 'black', year: 2017}
// ];

// const sumAvto = (avto) => avto.length;
// const sumObjAvto = sumAvto(avto);

// console.log(sumObjAvto);

// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// let avto1 = [
//     {production: 'toyota', power: 67, color: 'black', year: 2010},
//     {production: 'mazda', power: 86, color: 'gray', year: 2015},
//     {production: 'opel', power: 90, color: 'red', year: 2013},
//     {production: 'bmw', power: 70, color: 'black', year: 2009},
//     {production: 'citroen', power: 83, color: 'gray', year: 2017},
//     {production: 'renault', power: 97, color: 'red', year: 2019},
//     {production: 'honda', power: 80, color: 'black', year: 2000},
//     {production: 'kia', power: 65, color:'gray', year: 2016},
//     {production: 'audi', power: 91, color: 'red', year: 2004},
//     {production: 'mercedes', power: 100, color: 'black', year: 2017}
// ];


// function allNum (avto1) {
//     let a = 0;
//     for (const keyArr of avto1) {
//         for (const key in keyArr) {
//             a++;
//             }
//         }
//     return a;
// }
// const avtoNum = allNum(avto1);
// console.log(avtoNum);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let arr1 = [1,2,3,4,7];
// let arr2 = [2,3,4,5,9];

// function sumArr (arr1, arr2) {
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3.push(arr1[i] + arr2[i]);
//     }
//     return arr3;
// }
// const sumArray2 = sumArr(arr1, arr2);
// console.log(sumArray2);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let numberArray3 = [1,2,3,5,7,9];

// function newArr (numberArray3, i) {
//     let numberArray4 = [...numberArray3];
//     if (i < numberArray4.length-1) {
//         let sum = numberArray4[i];
//         numberArray4[i] = numberArray4[i+1];
//         numberArray4[i+1] = sum;
//     }
//     return numberArray4;
// }

// const numberArray5 = newArr(numberArray3, 3);
// console.log(numberArray3);
// console.log(numberArray5);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function numArr2 (numArr) {
//     let arrZero = [];
//     let arrOne = [];
//     for (const key of numArr) {
//         key === 0 ? arrZero.push(0) : arrOne.push(key);  
//     }
//     return arrOne.concat(arrZero);
// }
// console.log(numArr2([1,0,6,0,3]));
// console.log(numArr2([0,1,2,3,4]));
// console.log(numArr2([0,0,1,0]));




// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// let text = document.createElement('h1');
// text.innerText = 'Hello owu Hello';

// function textInBody (arguments) {
//     let block = document.createElement('div');
//     block.innerText = 'Hello owu';
//     document.body.appendChild(block);
//     document.body.appendChild(arguments);
// }
// textInBody(text);
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


// let avto2 = [
//     {production: 'toyota', power: 67, color: 'black', year: 2010},
//     {production: 'mazda', power: 86, color: 'gray', year: 2015},
//     {production: 'opel', power: 90, color: 'red', year: 2013},
//     {production: 'bmw', power: 70, color: 'black', year: 2009},
//     {production: 'citroen', power: 83, color: 'gray', year: 2017},
//     {production: 'renault', power: 97, color: 'red', year: 2019},
//     {production: 'honda', power: 80, color: 'black', year: 2000},
//     {production: 'kia', power: 65, color:'gray', year: 2016},
//     {production: 'audi', power: 91, color: 'red', year: 2004},
//     {production: 'mercedes', power: 100, color: 'black', year: 2017}
// ];

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// function avtoInId (avto) {
//     let block = document.getElementById('avto');
//     let list = document.createElement('ul');
//         block.appendChild(list);
//     for (let i = 0; i < avto.length; i++) {
//        let car = avto[i];
//        let listAvto = document.createElement('li');
//        listAvto.innerHTML = car.production;
//        list.appendChild(listAvto);
//     }
// }
// avtoInId(avto2);

// function avtoBlock (avto) {
//     let block = document.getElementById('avto');
//     for (let i = 0; i < avto.length; i++) {
//         let avtoItem = avto[i];
//         let blockDiv = document.createElement('div');
//         blockDiv.innerText = `${avtoItem.production} ${avtoItem.power} ${avtoItem.color} ${avtoItem.year}`;
//         block.appendChild(blockDiv);
//     }
// }
// avtoBlock(avto2);

// function avtoInBlock (avto) {
//     let block = document.getElementById('avto');
    
    
//     for (let i = 0; i < avto.length; i++) {
        
//       for (const key in avto[i]) {
//         let blockDiv = document.createElement('div');
//             blockDiv.innerHTML = `${key} : ${avto[i][key]}`;
//             block.appendChild(blockDiv);
//           }  
//       }
//     }
   
// avtoInBlock(avto2);

// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// function usersCities (userArray, cityArray) {
//     let users = JSON.parse(JSON.stringify(userArray));
//     let cities = JSON.parse(JSON.stringify(cityArray));
//         for (const city of cities) {
//           for (const user of users) {
//               if (user.id === city.user_id) {
//                user.adress = city;
//            }
//         }  
//     }
//     return users;
// }

// let userCitiesId = usersCities (usersWithId, citiesWithId);
// console.log(userCitiesId);


// function usersCities (usersWithId, citiesWithId) {
//     let users = [];
//         for (const city of citiesWithId) {
//           for (const user of usersWithId) {
//               if (user.id === city.user_id) {
//                     user.adress = city;
//                     users.unshift(user);
//             }
//         }  
//     }
//     return users;
// }

// let userCitiesId = usersCities (usersWithId, citiesWithId);
// console.log(userCitiesId);


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];


let wrap = document.getElementById('wrap');


function textInBlock(arguments) {

    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        let rulesBlock = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        wrap.appendChild(rulesBlock);
        wrap.appendChild(h2);
        wrap.appendChild(p);
        rulesBlock.className = `rules rule${i + 1}`;
        // rulesBlock.classList.add('rules');
        // rulesBlock.classList.add(`bab rule${i + 1}`);
        h2.innerText = element.title;
        p.innerText = element.body; 
    }
   
}
textInBlock(rules);

