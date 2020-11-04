
// // --створити масив та вивести його в консоль:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//  let numArr = [5, 34, 67, 2, 8];
//  let strArr = ["str", "namber", "bool", "obj", "null"];
//  let bigArr = ["lviv", "kyiv", "lutsk", "rivne", "sumy", true, 34, false, 2, 8, 9, 55];
//  let jointArr = [numArr[2], strArr[3], bigArr[0]];

//  console.log(numArr);
//  console.log(strArr);
//  console.log(bigArr);
//  console.log(jointArr);

//  // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//  let tekst = "<div>довільним текст</div>";

//  for (let i = 0; i < 10; i++) {
//      document.write(tekst);  
//  }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//  let tekst2 = "<div>довільним текст довільним текст</div>";

//  for (let i = 0; i < 10; i++) {
//      document.write(tekst2 + [i]);
//  }


// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//  let strH1 = "<h1>цикл while</h1>";

//  let i = 1;

//  while (i <= 20) {
//     document.write(strH1);
//     i++;   
//  }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//  let strH2 = "<h1>цикл while індекс всередині</h1>";

//  let c = 1;

//  while (c <= 20) {     
//      document.write(strH2 + [c]);
//      c++;   
//  }


// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в ци
// let numberTwo = [23, 5, 7, 28, 67, 2, 9, 34, 89, 12];

// for (let i = 0; i < numberTwo.length; i++) {
//     console.log(numberTwo[i]);
// }


// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let cityArr = ["lviv", "kyiv", "lutsk", "rivne", "sumy", "vinnytsia", "zhytomyr", "kharkiv", "ternopil", "chernivtsi"];

// for (let i = 0; i < cityArr.length; i++) {
//         console.log(cityArr[i]);
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let elemArr = ["lviv", "kyiv", "lutsk", "rivne", "sumy", true, 34, false, 2, 8, 9, 55];

// for (let i = 0; i < elemArr.length; i++) {
//     console.log(elemArr[i]);
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let elemArr2 = ["lviv", "kyiv", "lutsk", "rivne", "sumy", true, 34, false, 2, 8, 9, 55];

//    for (let i = 0; i < elemArr2.length; i++) {
//                 if (typeof elemArr2[i] === "boolean") {
//             console.log(elemArr2[i]);
//         }
        
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (let i = 0; i < elemArr2.length; i++) {
//     if (typeof elemArr2[i] === 'number') {
// console.log(elemArr2[i]);
//     }

// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let i = 0; i < elemArr2.length; i++) {
//     if (typeof elemArr2[i] === 'string') {
// console.log(elemArr2[i]);
//     }
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let newArr = [];
// newArr[0] = 'hello';
// newArr[1] = 'world';
// newArr[2] = 34;
// newArr[3] = 'day';
// newArr[4] = 4;
// newArr[5] = false;
// newArr[6] = 'say';
// newArr[7] = true;
// newArr[8] = 34;
// newArr[9] = 9;

// for (let i = 0; i < newArr.length; i++) {
//    console.log(newArr[i]);  
// }

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i); 
// }
// document.write('<br/>') 
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i);
// }
// document.write('<br/>') 

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i = i + 2 ) {
//     console.log(i);
//     document.write(i); 
// }
// document.write('<br/>') 
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if ((i % 2) == 0) {
//         console.log(i);
//         document.write(i); 
//     }
// }
// document.write('<br/>') 
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if ((i % 2) !== 0) {
//         console.log(i);
//         document.write(i); 
//     }
// }

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let i = 0; i <= 2; i++) {
//     for(let j = 0; j <= 59; j++) {
//         console.log((i) + ':' + j);
//         if (i == 2 && j == 0) {
//             break;
//         }
//     } 
// }


// for (let i = 0; i <= 2; i++) {
//     for(let x = 0; x <= 20; x++) {
//        for (let j = 0; j <= 59; j++){
//         console.log((i) + ':' + (x) + ':' + (j));
//        }
//     } 
// }

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let ddd = ['a', 'b', 'c'];
// let strNew = '';

// for (let i = 0; i < ddd.length; i++) {
//     strNew += ddd[i];
// }
// console.log(strNew);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let ttt = ['a', 'b', 'c'];
// let strNew2 = '';

// let i = 0;

// while (i < ttt.length) {
//     strNew2 += ttt[i];
//     i++;
// }

// console.log(strNew2);

// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let ccc = ['a', 'b', 'c'];
// let strNew3 = '';

// for (const iterator of ccc) {
//     strNew3 +=iterator;
// }

// console.log( strNew3);


// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let strArray = ['a', 'b', 'c'];

// for (let i = 1; i <= 3; i++) {
//     strArray.push(i);
// }

// console.log(strArray);

// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let numRevers = [1, 2, 3];
// let aaa = [];
// for (let i = 1; i <= numRevers.length; i++) {
//    aaa.unshift(i);
// }
// console.log(aaa);

// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let numArray = [1, 2, 3];

// for (let i = 4; i <= 6; i++) {
//     numArray.push(i);
// }
// console.log(numArray);

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let strArray2 = ['js', 'css', 'jq'];
// let js = strArray2.shift();
// let jq = strArray2.pop();
// document.write(js,' ', jq);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let numArray2 = [1, 2, 3, 4, 5];
// let numArray3 = numArray2.slice(3);
// console.log(numArray3);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let numArray4 = [1, 2, 3, 4, 5];
// let numArray5 = numArray4.slice(0, 2);
// console.log(numArray5);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let numArray6 = [1, 2, 3, 4, 5];
// let numArray7 = numArray6.splice(1,2);
// console.log(numArray6);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let numArray8 = [1, 2, 3, 4, 5];
// let numArray9 = numArray8.splice(3, 0, 'a', 'b', 'c');
// console.log(numArray8);

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let numArr2 = [1, 2, 3, 4, 5];
// let numArr3 = numArr2.splice(1,4,'a', 'b', 2, 3, 4, 'c', 5, 'e');
// console.log(numArr2);

// // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let numArr4  = [3, 40, 5, 6, 8, 32, 88, 33, 6, 9];

// for (let i = 0; i < numArr4.length; i++) {
//     if (numArr4[i] % 2 == 0) {
//         console.log(numArr4[i]);
//     }
// }

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let numArr5  = [3, 40, 5, 6, 8, 32, 88, 33, 6, 9];
// let numArr6 = [];

// for (let i = 0; i < numArr5.length; i++) {
//     numArr6.push(numArr5[i]);
// }
// console.log(numArr6);

// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let numArr7  = [3, 40, 5, 6, 8, 32, 88, 33, 6, 9];
// let numArr8 = [];
// for (let i = 0; i < numArr7.length; i++) {
//    numArr8 += numArr7[i];
// }
// console.log(numArr8);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
// // 

let numArr9 = [2,17,13,6,22,31,45,66,100,-18];

// let j = 0;

// while (j < numArr9.length) {
//     console.log(numArr9[j]);
//     j++;
// }

// for (let i = 0; i < numArr9.length; i++) {
//    console.log(numArr9[i]);
// }

// let y = 0;

// while (y < numArr9.length) {
//     if (numArr9[y] % 2 !== 0) {
//         console.log(numArr9[y]);       
//     }
//     y++;
// }

// for (let i = 0; i < numArr9.length; i++) {
//     if (numArr9[i] % 2 !== 0) {
//           console.log(numArr9[i]);       
//     }
// }

// let r = 0;
// while (r < numArr9.length) {
//     if (numArr9[r] % 2 == 0) {
//         console.log(numArr9[r]);       
//     }
//     r++;
// }

// for (let i = 0; i < numArr9.length; i++) {
//       if (numArr9[i] % 3 == 0) {
//             numArr9[i] = 'okten';
//       }
//       console.log(numArr9[i]);
//     }
// console.log(numArr9);

let count = numArr9.length - 1;

for (let i = 0; i < numArr9.length; i++) {
        numArr9[i] = numArr9[count];
        count = count - 1;  
        console.log(numArr9[i]);
}
console.log(numArr9);

// var arr = new Array(1,2,3,4,5,6,7,8,9,10);
// var arr_2 = arr;
// var i = 0;
// var count = arr.length;

// for (i = 0; i < arr.length; i++) {
//     document.write(arr[i] + ' ');

// }
// count=count-1;
// i = 0;
// for (i = 0; i < arr.length; i++) {
//      arr[i]=arr[count];
//      arr[count]=arr_2[i];
//      count=count-1;

// }
// document.write('<br>');
// for (i = 0; i < arr.length; i++) {
//     document.write(arr[i] + ' ');

// }