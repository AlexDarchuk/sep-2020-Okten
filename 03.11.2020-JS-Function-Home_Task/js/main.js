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


// function maxNumberArray (max) {
   
//     console.log(Math.max(max));
// }






























// maxNumberArray(maxArray);
// let str = "Helllooo World";
// let charArt = str.indexOf('W');
// console.log(charArt);
// let strSl = str.slice(9);
// console.log(strSl);

// let nameS = 'Alex Darchuk';
// let strings = nameS.split(' ');
// console.log(strings);

// let arr = [56, 5, 3, 12];
// let s1 = arr.join(' ');
// console.log(s1);


// let s2 = s1.split(' ');
// console.log(s2);
// let ink = s2.includes('Yarik');
// console.log(ink);


// function sumator (one, two) {
//     console.log(one + two);
//     return one + two;
// }

// let sumRes = sumator(5, 10);

// console.log(sumRes);

// function divider (sum, divider) {
//     console.log(sum / divider);
// }

// divider(sumRes, 3)

// let ddd = (a,b) => a + b;

// let fff = ddd(10, 45);
// console.log(fff);

// let rrr = (c, v) => c / v;

