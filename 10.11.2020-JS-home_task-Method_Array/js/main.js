// - создать массив с 20 числами.
let numberArray = [3, 8, 56, -78, 90, 1, 456, 5, 32, 6, 40, 7, -32, 927, 58, 14, 7.5, 4, 93, 2];
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let numberSort = numberArray.sort((a,b) => a - b);
// console.log(numberSort);
// let numberSort2 = numberArray.sort((a, b) => b - a);
// console.log(numberSort2);



// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// let numberFilter = numberArray.filter((value) => {
//     if(value % 3 == 0) {
//         return true;
//     }   
// });
// console.log(numberFilter);
// let numberFilter2 = numberArray.filter((value) => {
//     if(value % 10 == 0) {
//         return true;
//     }   
// });
// console.log(numberFilter2);


// -- перебрать (проитерировать) массив при помощи foreach()
// let numberFor = numberArray.forEach((value, index) => {
//     console.log('value'+ ':' + value, 'index'+ ':' + index);
// });

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let numberMap = numberArray.map((value) => {
//     return value * 3;
// });
// console.log(numberMap);


// - создать массив со словами на 15-20 элементов.

let namesArray = ['Edward', 'Kolya', 'Tanya', 'Sharpe', 'Magnetic', 'Alex', 'Olga', 'Dorota', 'Sem', 'Dima', 'Anna', 'Edi', 'Andre', 'Ira', 'Sasha'];


// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let nameSort = namesArray.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } 
//     {
//         return -1;
//     }
// });
// console.log(nameSort);
// let nameSort2 = namesArray.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } 
//     {
//         return 1;
//     }
// });
// console.log(nameSort2);


// -- отфильтровать слова длиной менее 4х символов

// let namesFilter = namesArray.filter((value) => {
//     if(value.length < 4) {
//         return true;
//     }
// });
// console.log(namesFilter);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let namesMap = namesArray.map((value) => {
//     value = value + '!';
//     return value;
// });
// console.log(namesMap);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
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
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let usersAge = users.sort((a, b) => {
//     return a.age - b.age;
// })
// console.log(usersAge);
// let usersAge2 = users.sort((a, b) => {
//     return b.age - a.age;
// })
// console.log(usersAge2);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let usersLenght = users.sort((a, b) => {
//     return b.name.length - a.name.length;
// });
// console.log(usersLenght);

// let usersLenght2 = users.sort((a, b) => {
//     return a.name.length - b.name.length;
// });
// console.log(usersLenght2);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let usersId = JSON.parse(JSON.stringify(users));

// let userIdMap = usersId.map((value, index) => {
//     value.name_id = index + 1;
//     return value;
// });
// console.log(userIdMap);


// // - відсортувати його за індентифікатором

// let userIdSort = usersId.sort((a, b) => {
//     return b.name_id - a.name_id;
// });
// console.log(userIdSort);


// // -- наисать функцию калькулятора с 2мя числами и колбеком

// function calc( a, b, callback) {
//     return callback(a,b);
// }
// calc(20, 5, function(a,b) {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
// });
// // -- наисать функцию калькулятора с 3мя числами и колбеком
// console.log('________________________________');
// function calc2( a, b, c, callback) {
//     return callback(a,b,c);
// }
// calc2(20, 5, 2, function(a,b,c) {
//     console.log(a + b * c);
//     console.log(a - b + c);
//     console.log(a * b / c);
//     console.log(a / b + c);
// });