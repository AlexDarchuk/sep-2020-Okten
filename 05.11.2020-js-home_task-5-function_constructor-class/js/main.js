

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }

// function Html(name,action,attribute) {
//     this.name = name;
//     this.action = action;
//     this.attribute = attribute;
// }

// let link = new Html ('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',[{href: 'Задает адрес документа, на который следует перейти.'},{target: 'Имя окна или фрейма, куда браузер будет загружать документ.'},{name: 'Устанавливает имя якоря внутри документа.'}]);
// let block = new Html('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{align: 'Задает выравнивание содержимого тега'}, {title: 'Добавляет всплывающую подсказку к содержимому.'}]);
// let heading = new Html('<h1>', 'тег <h1> представляет собой наиболее важный заголовок первого уровня', [{align: 'Задает выравнивание содержимого тега'}, {class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}]);
// let span = new Html('<span>', 'Тег <span> предназначен для определения строчных элементов документа', [{class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, {onclick: 'Щелчок левой кнопкой мыши на элементе.'}, {style: 'Применяется для определения стиля элемента с помощью правил CSS.'}]);
// let input = new Html('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{name: 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.'}, {value: 'Значение элемента.'}]);
// let form = new Html('<form>', 'Тег <form> устанавливает форму на веб-странице.', [{action: 'Адрес программы или документа, который обрабатывает данные формы.'}, {method: 'Метод протокола HTTP.'}]);
// let option = new Html('<option>', 'Тег <option> определяет отдельные пункты списка', [{disabled: 'Заблокировать для доступа элемент списка.'}, {label:'Указание метки пункта списка.'}]);
// let select = new Html('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{size: 'Количество отображаемых строк списка.'}, {form: 'Связывает список с формой.'}]);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================


// class HtmlTag {
//     constructor(name,action,attribute) {
//         this.name = name;
//         this.action = action;
//         this.attribute = attribute;
//     }
// }

// let linkTag = new HtmlTag('<a>','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',[{href: 'Задает адрес документа, на который следует перейти.'},{target: 'Имя окна или фрейма, куда браузер будет загружать документ.'},{name: 'Устанавливает имя якоря внутри документа.'}]);
// let blockTag = new HtmlTag('<div>','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [{align: 'Задает выравнивание содержимого тега'}, {title: 'Добавляет всплывающую подсказку к содержимому.'}]);
// let headingTag = new HtmlTag('<h1>', 'тег <h1> представляет собой наиболее важный заголовок первого уровня', [{align: 'Задает выравнивание содержимого тега'}, {class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}]);
// let spanTag = new HtmlTag('<span>', 'Тег <span> предназначен для определения строчных элементов документа', [{class: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, {onclick: 'Щелчок левой кнопкой мыши на элементе.'}, {style: 'Применяется для определения стиля элемента с помощью правил CSS.'}]);
// let inputTag = new HtmlTag('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем', [{name: 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.'}, {value: 'Значение элемента.'}]);
// let formTag = new HtmlTag('<form>', 'Тег <form> устанавливает форму на веб-странице.', [{action: 'Адрес программы или документа, который обрабатывает данные формы.'}, {method: 'Метод протокола HTTP.'}]);
// let optionTag = new HtmlTag('<option>', 'Тег <option> определяет отдельные пункты списка', [{disabled: 'Заблокировать для доступа элемент списка.'}, {label:'Указание метки пункта списка.'}]);
// let selectTag = new HtmlTag('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', [{size: 'Количество отображаемых строк списка.'}, {form: 'Связывает список с формой.'}]);

// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// =============================================

// let car = {
//     model: 'Octavia',
//     producer: 'Skoda',
//     year: 2015,
//     maxSpeed: 220,
//     motor: 1.8,
//     driver: {},
//     drive: function() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info: function() {
//         console.log(`
//         model: ${this.model},
//         producer: ${this.producer},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         motor: ${this.motor},
//         `);
//     },
//     increaseMaxSpeed: function(newSpeed) {
//         this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//     }
// }


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let driver = {one: 1, two: 2};
// function Car(model,producer,year, maxSpeed,motor,driver) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.motor = motor;
//     this.driver = driver;
//     this.info = function() {
//         console.log(`
//         model: ${this.model},
//         producer: ${this.producer},
//         year: ${this.year},
//         maxSpeed: ${this.maxSpeed},
//         motor: ${this.motor},
//         `);
//     };
//     this.increaseMaxSpeed = function(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function(newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function(driver) {
//         this.driver = driver;
//     };
// }

// let skoda = new Car('Octavia','Skoda', 2015, 220, 1.8);
// // console.log(skoda.addDriver(driver));
// console.log(skoda.driver);
// console.log(skoda.producer);

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// let driver = {one: 1, two: 2};
// class Car {
//     constructor(model,producer,year, maxSpeed,motor,driver) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.motor = motor;
//         this.driver = driver;
//         this.info = function() {
//             console.log(`
//             model: ${this.model},
//             producer: ${this.producer},
//             year: ${this.year},
//             maxSpeed: ${this.maxSpeed},
//             motor: ${this.motor},
//             `);
//         };
//         this.increaseMaxSpeed = function(newSpeed) {
//             this.maxSpeed += newSpeed;
//         };
//         this.changeYear = function(newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function(driver) {
//             this.driver = driver;
//         };
//     }
// }

// let skodaOktavia = new Car('Octavia','Skoda', 2015, 220, 1.8);

// console.log(skodaOktavia);
// console.log(skodaOktavia.addDriver(driver));
// console.log(skodaOktavia.driver);
// console.log(skodaOktavia.producer);

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor  (name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// let cinder1 = new Cinderella('Masha', 22, 36);
// let cinder2 = new Cinderella('Tanja', 35, 38);
// let cinder3 = new Cinderella('Olena', 20, 34);
// let cinder4 = new Cinderella('Olga', 45, 40);
// let cinder5 = new Cinderella('Anna', 27, 37);
// let cinder6 = new Cinderella('Diana', 34, 38);
// let cinder7 = new Cinderella('Vita', 28, 39);
// let cinder8 = new Cinderella('Nika', 20, 32);
// let cinder9 = new Cinderella('Sveta', 18, 33);
// let cinder10 = new Cinderella('Lysja', 19, 35);

// let cinderella = [cinder1, cinder2, cinder3, cinder4, cinder5, cinder6, cinder7, cinder8, cinder9, cinder10];

// class Princ {
//     constructor(name,age,searchShoes) {
//         this.name = name;
//         this.age = age;
//         this.searchShoes = searchShoes || +prompt('Введи від 32 - 40');
//         this.myCinderella = function(searchShoes) {
//             let shoes = 0;
//             for (let key of searchShoes) {
//                 if(key.footSize === this.searchShoes) {
//                     shoes = key;
//                 }
//             }
//             document.write('Імя моєї попилюшки'+ ' ' + shoes.name);
//         }
//     }
// }

// let vasja = new Princ('Vasya', 50, );
// vasja.myCinderella(cinderella);


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinder1 = new Cinderella('Masha', 22, 36);
let cinder2 = new Cinderella('Tanja', 35, 38);
let cinder3 = new Cinderella('Olena', 20, 34);
let cinder4 = new Cinderella('Olga', 45, 40);
let cinder5 = new Cinderella('Anna', 27, 37);
let cinder6 = new Cinderella('Diana', 34, 38);
let cinder7 = new Cinderella('Vita', 28, 39);
let cinder8 = new Cinderella('Nika', 20, 32);
let cinder9 = new Cinderella('Sveta', 18, 33);
let cinder10 = new Cinderella('Lysja', 19, 35);

let cinderella = [cinder1, cinder2, cinder3, cinder4, cinder5, cinder6, cinder7, cinder8, cinder9, cinder10];

function Princ (name, age, searchShoes) {
    this.name = name;
    this.age = age;
    this.searchShoes = searchShoes || +prompt('Введи від 32 - 40');
    this.myCinderella = function(searchShoes) {
                    let shoes = 0;
                    for (let key of searchShoes) {
                        if(key.footSize === this.searchShoes) {
                            shoes = key;
                        }
                    }
                    document.write('Імя моєї попилюшки'+ ' ' + shoes.name);
                }

}

let vasja = new Princ('VAsja', 45,);
console.log(vasja);
vasja.myCinderella(cinderella);