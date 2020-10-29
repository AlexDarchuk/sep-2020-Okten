
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

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let elemArr2 = ["lviv", "kyiv", "lutsk", "rivne", "sumy", true, 34, false, 2, 8, 9, 55];

   for (let i = 0; i < elemArr2.length; i++) {
                if (typeof elemArr2[i] === "boolean") {
            console.log(elemArr2[i]);
        }
        
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let i = 0; i < elemArr2.length; i++) {
    if (typeof elemArr2[i] === 'number') {
console.log(elemArr2[i]);
    }

}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < elemArr2.length; i++) {
    if (typeof elemArr2[i] === 'string') {
console.log(elemArr2[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let newArr = [];
newArr[0] = 'hello';
newArr[1] = 'world';
newArr[2] = 34;
newArr[3] = 'day';
newArr[4] = 4;
newArr[5] = false;
newArr[6] = 'say';
newArr[7] = true;
newArr[8] = 34;
newArr[9] = 9;

for (let i = 0; i < newArr.length; i++) {
   console.log(newArr[i]);  
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i); 
}
document.write('<br/>') 
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i);
}
document.write('<br/>') 

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <= 100; i = i + 2 ) {
    console.log(i);
    document.write(i); 
}
document.write('<br/>') 
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i <= 100; i++) {
    if ((i % 2) == 0) {
        console.log(i);
        document.write(i); 
    }
}
document.write('<br/>') 
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i <= 100; i++) {
    if ((i % 2) !== 0) {
        console.log(i);
        document.write(i); 
    }
}

// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

