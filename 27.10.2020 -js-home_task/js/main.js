
// // 1
let sey = 'hello';
let school = 'owu';
let domain = 'com';
let region = 'ua';
let numOne = 1;
let numTwo = 10;
let numThree = -999;
let numFour = 123;
let numFive = 3.14;
let numSix = 2.7;
let numSeven = 16;
let isYes = true;


// // 2
sey = 'world';
school = 'web';
domain = 'internet';
region = 'lviv';
numOne = 3;
numTwo = 15;
numThree = -59;
numFour = 300;
numFive = 7.12;
numSix = 3.6;
numSeven = 28;
isYes = false;

console.log(sey);
console.log(school);
console.log(domain);
console.log(region);
console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numFour);
console.log(numFive);
console.log(numSix);
console.log(isYes);

alert(sey);
alert(school);
alert(domain);
alert(region);
alert(numOne);
alert(numTwo);
alert(numThree);
alert(numFour);
alert(numFive);
alert(numSix);
alert(isYes);


// // 3
const age = 30;
const color = 'red';
const name = 'Alex';

console.log(age, color, name);
document.write(age, ' ', color, ' ', name);
alert(age);
alert(color);
alert(name);


// // 4
let firsName = prompt("Вкажіть ваше ім'я!");
let lastName = prompt("Вкажіть ваше прізвище!");
let surName = prompt("Вкажіть ваше ім'я по батькові!");

console.log(firsName, lastName, surName);
document.write(firsName, ' ', lastName, ' ', surName);
alert(firsName);
alert(lastName);
alert(surName);


// 5
let person = `${firsName} ${lastName} ${surName}`;
console.log(person);

// // 6
let firsNameMama = prompt("Вкажіть ім'я Мами!");
let lastNameMama = prompt("Вкажіть прізвище Мами!");
let surNameMama = prompt("Вкажіть ім'я Мами по батькові!");

console.log(firsNameMama, lastNameMama, surNameMama);
document.write(firsNameMama, ' ',lastNameMama, ' ',surNameMama);
alert(firsNameMama);
alert(lastNameMama);
alert(surNameMama);

let personMama = `${firsNameMama} ${lastNameMama} ${surNameMama}`;
console.log(personMama);

let firsNameDad = prompt("Вкажіть ім'я Тата!");
let lastNameDad = prompt("Вкажіть прізвище Тата!");
let surNameDad = prompt("Вкажіть ім'я Тата по батькові!");

console.log(firsNameDad, lastNameDad, surNameDad);
document.write(firsNameDad, ' ', lastNameDad, ' ', surNameDad);
alert(firsNameDad);
alert(lastNameDad);
alert(surNameDad);

let personDad = `${firsNameDad} ${lastNameDad} ${surNameDad}`;
console.log(personDad);

// 7

let takeNumONe = +prompt('Вкажіть число!');
let takeNumTwo = +prompt('Вкажіть число!');
let takeNumThree = +prompt('Вкажіть число!');

console.log(takeNumONe, takeNumTwo, takeNumThree);

// 8
let takeNumFour = parseInt(prompt('Вкажіть число!'));
let takeNumFive = parseInt(prompt('Вкажіть число!'));
let takeNumSix = parseInt(prompt('Вкажіть число!'));
let takeNumSeven = parseInt(prompt('Вкажіть число!'));

let result = takeNumFour + takeNumFive + takeNumSix + takeNumSeven;
console.log(result);

// 9
let numFloatOne = parseFloat(prompt('Вкажіть число через крапку!'));
let numFloatTwo = parseFloat(prompt('Вкажіть число через крапку!'));
let numFloatThree= parseFloat(prompt('Вкажіть число через крапку!'));

let resultFloat = numFloatOne + numFloatTwo + numFloatThree;
console.log (resultFloat);

// 10
let numRoundOne = Math.round(prompt('Вкажіть число через крапку!'));
let numRoundTwo = Math.round(prompt('Вкажіть число через крапку!'));
let numRoundThree= Math.round(prompt('Вкажіть число через крапку!'));

let resultRound = numRoundOne + numRoundTwo + numRoundThree;
console.log (resultRound);

// 11
let numPowdOne = prompt('Вкажіть число!');
let numPowdTwo = prompt('Вкажіть число!');

console.log (Math.pow(numPowdOne, numPowdTwo));

// 12
let a = 100; 
let b = '100'; 
let c = true; 
let d = undefined;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

// 13
5 < 6 -> true
5 > 6 -> false
5 >= 6 -> false
5 === 6 -> false
10 == 10 -> true
10 >= 10 -> true
10 < 10 -> false
10 > 10 -> false
10 != 10 -> false
123 === '123' -> false
123 == '123' -> true

// 14

console.log(132 > 100 && 45 < 12 );--false
console.log(34 > 33 && 23 < 90 );--true
console.log(99 > 100 && 45 > 12 );--false
console.log(132 > 100 || 45 < 12 );--true
console.log(111 > 11 || 45 < 111 );--true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );-true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );--true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );--false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));--true
console.log(!!'-1');--true
console.log(!!-1);--true
console.log(!!'0');-true
console.log(!!'null');--true
console.log(!!'undefined');--true
console.log(!!(3/'owu'));--false
console.log((111 > 11 || 45 < 111) ||  !!'0');--tue
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));
