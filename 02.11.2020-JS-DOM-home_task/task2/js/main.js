// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

let dog = {
    name: 'tuzik', 
    color: 'black', 
    breed: 'shepherd'
};

for (let key in dog) {
    console.log('key', key);
}
console.log(Object.keys(dog));
console.log('________________');

let person = {
    age: 25, 
    nationality: 'ukrainian', 
    height: 180
};

for (let key in person) {
    console.log('key', key);
}
console.log(Object.keys(person));
console.log('________________');

let car = {
    fuel: 'diesel',
    power: 81,
    model: 'skoda'
};

for (let key in car) {
    console.log('key', key);
}
console.log(Object.keys(car));
console.log('________________');

let apartment = {
    size: 68, 
    rooms: 2, 
    balcony: true,
};

for (let key in apartment) {
    console.log(key);
}
console.log(Object.keys(apartment));
console.log('________________');

let book = {
    author: 'Nick Morgan', 
    pages: 336, 
    price: 280
};

for (let key in book) {
    console.log(key);
}
console.log(Object.keys(book));
console.log('________________');



// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let man = {
    name: 'Alex',
    age: 33,
    skills: ['js', 'html', 'css'],
    wife: {
        name: 'Olena',
        age: 30
    }
};

for (let key in man) {
    console.log(key);
}
console.log(Object.keys(man));
console.log('________________');


let zoo = {
    location: 'Lviv',
    animals: ['Lion', 'Monkey', 'Birds'],
    lion : {
        length: 1.2,
        weight: 180,
        speed: 80
    }
};

for (let key in zoo) {
    console.log(key);
}
console.log(Object.keys(zoo));
console.log('________________');


let cars = {
    production : 'opel',
    model: ['Astra', 'Omega', 'Vectra'],
    vectra: {
        color: 'gray',
        power: 92,
        weight: 1200
    },
    contry: 'Germany'
}

// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (let key in cars) {
    console.log(key);
}
console.log(Object.keys(cars));
console.log('________________');

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let avto = [
    {production: 'toyota', power: 67, color: 'black', year: 2010},
    {production: 'mazda', power: 86, color: 'gray', year: 2015},
    {production: 'opel', power: 90, color: 'red', year: 2013},
    {production: 'bmw', power: 70, color: 'black', year: 2009},
    {production: 'citroen', power: 83, color: 'gray', year: 2017},
    {production: 'renault', power: 97, color: 'red', year: 2019},
    {production: 'honda', power: 80, color: 'black', year: 2000},
    {production: 'kia', power: 65, color:'gray', year: 2016},
    {production: 'audi', power: 91, color: 'red', year: 2004},
    {production: 'mercedes', power: 100, color: 'black', year: 2017}

];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
for (let i = 0; i < avto.length; i++) {
    console.log(avto[i]);
}
console.log('_________________');

let i = 0;
while (i < avto.length){
    console.log(avto[i]);
    i++;
}
console.log('_________________');

for (let key of avto) {
    console.log(key);
}
console.log("__________________________");
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    {name: 'amsterdam', region: 'europe', contry: 'nederlands', population: 17000000},
    {name: 'london', region: 'europe', contry: 'great britain', population: 56000000},
    {name: 'lviv', region: 'europe', contry: 'ukraine', population: 34000000},
    {name: 'krakow', region: 'europe', contry: 'poland', population: 28000000},
    {name: 'berlin', region: 'europe', contry: 'germany', population: 36000000},
    {name: 'paris', region: 'europe', contry: 'france', population: 72000000},
    {name: 'madrid', region: 'europe', contry: 'spain', population: 64000000},
    {name: 'roma', region: 'europe', contry: 'itali', population: 51000000},
    {name: 'praha', region: 'europe', contry: 'czech', population: 28000000},
    {name: 'riga', region: 'europe', contry: 'latvia', population: 5000000},
];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log("_____________________________");

let b = 0;
while (b < cities.length){
    console.log(cities[b]);
    b++;
}
console.log('_________________');

for (let key of cities) {
    console.log(key);
}
console.log("__________________________");
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.


let avtoDriver = [
    {production: 'toyota', power: 67, color: 'black', year: 2010, driver: {name: 'max', age: 34, sex: 'man', experience: 10}},
    {production: 'mazda', power: 86, color: 'gray', year: 2015, driver: {name: 'bob', age: 54, sex: 'man', experience: 7}},
    {production: 'opel', power: 90, color: 'red', year: 2013, driver: {name: 'sem', age: 25, sex: 'man', experience: 30}},
    {production: 'bmw', power: 70, color: 'black', year: 2009, driver: {name: 'nik', age: 47, sex: 'man', experience: 22}},
    {production: 'citroen', power: 83, color: 'gray', year: 2017, driver: {name: 'alex', age: 37, sex: 'man', experience: 20}},
    {production: 'renault', power: 97, color: 'red', year: 2019, driver: { name: 'den', age: 50, sex: 'man', experience: 12}},
    {production: 'honda', power: 80, color: 'black', year: 2000, driver: {name: 'vasya', age: 51, sex: 'man', experience: 15}},
    {production: 'kia', power: 65, color:'gray', year: 2016, driver: {name: 'kolya', age: 29, sex: 'man', experience: 24}},
    {production: 'audi', power: 91, color: 'red', year: 2004, driver: {name: 'viktor', age:39, sex: 'man', experience: 5}},
    {production: 'mercedes', power: 100, color: 'black', year: 2017, driver: {name: 'serg', age: 43, sex: 'man', experience: 9}}
];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
for (let i = 0; i < avtoDriver.length; i++) {
    console.log(avtoDriver[i]);
}
console.log("_________________________");

let c = 0;
while (c < avtoDriver.length){
    console.log(avtoDriver[c]);
    c++;
}
console.log('_________________');

for (let key of avtoDriver) {
    console.log(key);
}
console.log("__________________________");


// взять объекты из задания 1 и превратить каждый в json.

let newDog = JSON.stringify(dog);
console.log(newDog);
let cloneDog = JSON.parse(newDog);
console.log(cloneDog);

let newPerson = JSON.stringify(person);
let clonePerson = JSON.parse(newPerson);
console.log(clonePerson);

let newCar = JSON.stringify(car);
let cloneCar = JSON.parse(newCar);
console.log(cloneCar);

let newApartment = JSON.stringify(apartment);
let cloneApartment = JSON.parse(newApartment);
console.log(cloneApartment);

let newBook = JSON.stringify(book);
let cloneBook = JSON.parse(newBook);
console.log(cloneBook);


// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (let key of avto) {
    let avtoJson = JSON.stringify(key);
    console.log(avtoJson);
}
console.log("__________________________");

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let key of cities) {
    let citiesJson = JSON.stringify(key);
    console.log(citiesJson);
}
console.log("__________________________");

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
let avtoDriverArr = [];
for (let key of avtoDriver) {
    let avtoDriveJson = JSON.stringify(key);
    avtoDriverArr.unshift(avtoDriveJson);
   
}
console.log(avtoDriverArr);

console.log("__________________________");

// - Создать массив пользователей. 
// У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let man1 = [
    {name: 'Alex', age: 33, skills: ['js', 'html', 'css']},
    {name: 'Nik', age: 33, skills: ['java', 'html', 'css']},
    {name: 'Olya', age: 33, skills: ['php', 'css']},
    {name: 'Oleg', age: 33, skills: ['mysql', 'html']},
];

for (let user of man1) {
    console.log('Name', user.name);
    
    for (let  skill of user.skills) {
    console.log('skill', skill);
    }
}

// - Создать массив пользователей. 
// У каждого пользователя обязательно должено быть поле skills которое является массивом. 
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. 
// Скопировать все skills всех пользователей в отедльный массив

let man2 = [
    {name: 'Alex', age: 33, skills: ['js', 'html', 'css']},
    {name: 'Nik', age: 33, skills: ['java', 'html', 'css']},
    {name: 'Olya', age: 33, skills: ['php', 'css']},
    {name: 'Oleg', age: 33, skills: ['mysql', 'html']},
];
let newMan = [];

for (let user of man1) {
    console.log('Name', user.name);
    
    for (let  skill of user.skills) {
    console.log('skill', skill);
    newMan.unshift(skill);
    }
}
console.log(newMan);


// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

 let users = [
    {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
    {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
    {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
    {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
];

for (let user of users) {
    console.log(user);
    for (let skill of user.skills) {
        console.log(skill);
    }
}



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості


let usersAdr = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];


let adrArr = [];
for( let key of usersAdr) {
    adrArr.unshift(key.address);
}
console.log(adrArr);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let block = document.createElement('div');
block.style.width = '1000px';
block.style.height = 'auto';
block.style.marginBottom = '10px';
block.style.background = 'yellow';
document.body.appendChild(block);

for( let key of usersAdr) {
   block.innerText += `${key.name} ${key.age} ${key.status} ${key.address.city} ${key.address.country} ${key.address.street} ${key.address.houseNumber} , `;
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for( let key of usersAdr) {
    let block = document.createElement('div');
    block.style.width = '1000px';
    block.style.height = 'auto';
    block.style.marginBottom = '10px';
    block.style.background = 'yellow';
    document.body.appendChild(block);
    
    block.innerText = `${key.name} ${key.age} ${key.status} ${key.address.city} ${key.address.country} ${key.address.street} ${key.address.houseNumber} , `;
 }

// - За допомоги циклу проітерувати  масив users, 
// записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам , 
// блок з адресою зробити окремим блоком, з блоками для кожної властивості


for( let key of usersAdr) {
    let block = document.createElement('div');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let addressStr = '';
    for (let address1 in key.address) {
        addressStr = addressStr + ' ' + key.address[address1];
    }
    h3.innerText = key.name;
    p1.innerText = key.age;
    p2.innerText = addressStr;

    block.appendChild(h3);
    block.appendChild(p1);
    block.appendChild(p2);
    document.body.appendChild(block);

 }