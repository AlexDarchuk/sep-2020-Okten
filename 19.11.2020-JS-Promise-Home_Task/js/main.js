// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.






// function myDay(alarm) {
//     console.log('Будильник 8:00');
//     setTimeout(() =>{
//         console.log('Проклятий ранок!');
//         alarm();
//     }, 2000);
// }

// function washFace(wash) {
//     setTimeout(() =>{
//         console.log('Прийом душа!');
//         wash();
//     }, 1000);
// }

// function drinkCoffee(milk, drink) {
//     console.log('Провірити воду в кавоварці!');
//     setTimeout(() =>{
//         if (milk > 10) {
//             drink('О да смачне капучіно!', null);
//             return;
//         } 
//             drink(null, 'Бррр гірке еспресо!');
//     }, 1500);
// }

// function learnedJs(js) {
//     console.log('Ще раз послухаєм Віктора!');
//     setTimeout(() =>{
//         console.log('Виконуєм дз!');
//         js();
//     }, 4000);
// }

// function lunch(sausage, eat) {
//     console.log('Обід!');
//     setTimeout(() =>{
//         if(sausage) {
//             eat('Афігенний хавчик!-', null);
//             return;
//         } 
//             eat(null, 'Обід як у студента!');
//     }, 2500);
// }

// function riding(cll) {
//     console.log('Їдим на урок в автошколу!');
//     setTimeout(() =>{
//         console.log('1.5 години стресу!');
//         cll();
//     }, 1000);
// }

// function nightChatik(chatik) {
//     console.log('Вертаємось на вечірню лекцію!');
//     setTimeout(() =>{
//         console.log('Віктор на связі!');
//         chatik();
//     }, 2000);
// }

// myDay(() =>{
//     console.log('Зібрався і встав!');
//     washFace(() =>{
//         console.log('Чистим зуби!');
//             drinkCoffee(100, (err, data) => {
//                 if (err) {
//                     console.log(`Печенько з ${err}`);
//                 } else {
//                     console.log(data);
//                 }
                    
//                 learnedJs(() =>{
//                     console.log('Віктора мало, дивимся розвязок дз!');
//                     lunch(true, (err, data) =>{
//                         if(err) {
//                             console.log(`${err} После сытного обеда, по закону Архимеда, полагается поспать!`);
//                         }else {
//                             console.log(data);
//                         }
                        
//                         riding(() =>{
//                             console.log('Тяжко в навчанні, легко в бою!');
//                             nightChatik(() =>{
//                                 console.log('Знов завал!');
//                             });
//                         });
//                     });
//                 });
//              });
//     });
// });

// Promise


// function myDay() {
//     return new Promise((resolve) =>{
//         console.log('Будильник 8:00');
//         setTimeout(() =>{
//             resolve('Проклятий ранок!');
//         }, 2000);
//     })
// }

// function washFace() {
//     return new Promise ((resolve) => {
//         setTimeout(() =>{
//             resolve('Прийом душа!');   
//         }, 1000);
//     })
// }

// function drinkCoffee(milk) {
//    return new Promise ((resolve, reject) => {
//     console.log('Провірити воду в кавоварці!');
//     setTimeout(() =>{
//         if (milk > 10) {
//             reject('Бррр гірке еспресо!');
//         } 
//             resolve('О да смачне капучіно!');
//         }, 1500);
//    });
// }

// function learnedJs() {
//    return new Promise ((resolve) =>{
//     console.log('Ще раз послухаєм Віктора!');
//     setTimeout(() =>{
//         resolve('Виконуєм дз!');
//     }, 4000);
//    })
// }

// function lunch(sausage) {
//    return new Promise ((resolve, reject) => {
//     console.log('Обід!');
//     setTimeout(() =>{
//         if(sausage) {
//             resolve('Афігенний хавчик!-');
//         } 
//             reject('Обід як у студента!');
//     }, 2500);
//    });
// }

// function riding() {
//    return new Promise ((resolve) =>{
//     console.log('Їдим на урок в автошколу!');
//     setTimeout(() =>{
//         resolve('1.5 години стресу!');
//     }, 1000);
//    })
// }

// function nightChatik() {
//     return new Promise ((resolve) => {
//         console.log('Вертаємось на вечірню лекцію!');
//     setTimeout(() =>{
//         resolve('Віктор на связі!');
//     }, 2000);
//     })
// }

// myDay()
// .then((alarm) =>{
//     console.log(alarm);
//     console.log('Зібрався і встав!');

//     return washFace()
// })
// .then ((face) =>{
//     console.log(face);
//     console.log('Чистим зуби!');

//     return drinkCoffee(9)
// })
// .then((coffee) => {
//     console.log(`Печенько з ${coffee}`);

//     return learnedJs();
// })
// .then ((js) => {
//     console.log(js);
//     console.log('Віктора мало, дивимся розвязок дз!');

//     return lunch(true);
// })
// .then ((eat) => {
//     console.log(`${eat} После сытного обеда, по закону Архимеда, полагается поспать!`);

//     return riding();
// })
    // .then ((avto) => {
    //     console.log(avto);
    //     console.log('1.5 години стресу!');

    //     return nightChatik();
    // })

// .then ((chatik) => {
//     console.log(chatik);
//     console.log('Знов завал!');
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('СПАТКИ!');
// })

function myDay() {
    return new Promise((resolve) =>{
        console.log('Будильник 8:00');
        setTimeout(() =>{
            resolve('Проклятий ранок!');
        }, 2000);
    })
}

function washFace() {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve('Прийом душа!');   
        }, 1000);
    })
}

function drinkCoffee(milk) {
   return new Promise ((resolve, reject) => {
    console.log('Провірити воду в кавоварці!');
    setTimeout(() =>{
        if (milk > 10) {
            reject('Бррр гірке еспресо!');
        } 
            resolve('О да смачне капучіно!');
        }, 1500);
   });
}

function learnedJs() {
   return new Promise ((resolve) =>{
    console.log('Ще раз послухаєм Віктора!');
    setTimeout(() =>{
        resolve('Виконуєм дз!');
    }, 4000);
   })
}

function lunch(sausage) {
   return new Promise ((resolve, reject) => {
    console.log('Обід!');
    setTimeout(() =>{
        if(sausage) {
            resolve('Афігенний хавчик!-');
        } 
            reject('Обід як у студента!');
    }, 2500);
   });
}

function riding() {
   return new Promise ((resolve) =>{
    console.log('Їдим на урок в автошколу!');
    setTimeout(() =>{
        resolve('1.5 години стресу!');
    }, 1000);
   })
}

function nightChatik() {
    return new Promise ((resolve) => {
        console.log('Вертаємось на вечірню лекцію!');
    setTimeout(() =>{
        resolve('Віктор на связі!');
    }, 2000);
    })
}

async function day () {
  try {
    const my = await myDay();
    console.log(my);
    console.log('Зібрався і встав!');

    const wash = await washFace();
    console.log(wash);
    console.log('Чистим зуби!');

    const coffe = await drinkCoffee(91);
    console.log(`Печенько з ${coffe}`);

    const js = await learnedJs();
    console.log(js);
    console.log('Віктора мало, дивимся розвязок дз!');
    
    const sausage = await lunch(true);
    console.log(`${sausage} После сытного обеда, по закону Архимеда, полагается поспать!`);

    const avto = await riding();
    console.log(avto);

    const chatik = await nightChatik();
    console.log(chatik);
    console.log('Знов завал!');
  } catch (err) {
      console.log(err);
  }
}

day();