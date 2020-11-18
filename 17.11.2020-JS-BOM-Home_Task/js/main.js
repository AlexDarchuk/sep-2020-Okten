// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArea = document.forms.formText.textArea;

// textArea.oninput = () => {
//     localStorage.setItem('key' ,textArea.value);
//  console.log(textArea.value);
// };

// textArea.value = localStorage.getItem('key');

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let form = document.getElementById('formAction');
// getForm(form);

// function formSave(t) {
//     saveForm(t);
// };
   
// function saveForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const element = tag[i];
//         if(element.type === 'checkbox' || element.type === 'radio') 
//             element.checked ? element.value = true : element.value = false;
//             localStorage.setItem(element.id, element.value);
      
//     }
// }

// function getForm(tag){
//     for (let i = 0; i < localStorage.length; i++) {
//         if(localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id);
//             if(tag.children[i].value === 'true') {
//                 tag.children[i].setAttribute('checked', 'checked');
//             }
//         }
//     }
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// let left = document.getElementById('left');
// let right = document.getElementById('right'); 
// let formHistory = document.forms.formHistory.text;
// let bntHistory = document.getElementById('bntHistory');

// bntHistory.onclick = () => {
//     localStorage.setItem(localStorage.length + 1, formHistory.value);
// };

// left.onclick = () => {
//     let count;
//     for (let key in localStorage) {
        
//         console.log(key);
//         if(localStorage.hasOwnProperty(key)) {
//             if(localStorage.getItem(key) === formHistory.value) {
//                 count = key;
//             }
//         }
//     }
//     formHistory.value = localStorage.getItem(count - 1);
// };
// right.onclick = () => {
//     let count;
//     for (let key in localStorage) {
        
//         console.log(key);
//         if(localStorage.hasOwnProperty(key)) {
//             if(localStorage.getItem(key) === formHistory.value) {
//                 count = key;
//             }
//         }
//     }
//     formHistory.value = localStorage.getItem(+count + 1);
// };



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const ARRAY_USERS = 'ARRAY_USERS';
const tempUser = {};
let content = document.getElementById('content');

let userForm = document.forms.user;
let btnUser = document.getElementById('btnUser');

btnUser.onclick = ev => {
    // ev.preventDefault();
    let person = {...tempUser};
     tempUser = {};
    for (let i = 0; i < userForm.children.length; i++) {
        const elementUser = userForm.children[i];
        if(elementUser.id && elementUser.type !== 'submit') {
            person[elementUser.id] = elementUser.value;
        }
    }
     if(!(person.id)) {
        person.id = new Date().getTime();
     }
    console.log(person);
    saveUser(person);
};

getDataFromLst();

function saveUser(us) {
    if(localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS))
        const find = arrayUsers.find(value => value.id === us.id)
    if(find) {
        const filter = arrayUsers.filter(value => value.id !== us.id);
        filter.push(user);
        localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
    }else {
        arrayUsers.push(us)
        localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
    }
    }else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([us]));
    }
}
function getDataFromLst () {
    if(localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        for (const item of arrUser) {
            console.log(item);
            content.appendChild(createDivPerson(item));
        }
    }
}

function createDivPerson(user) {
  let main = document.createElement('div');
  let flag = true;
  for (const key in user) {
      if(flag){
        let h3 = document.createElement('h3');
        h3.innerText = key + " : " + user[key];
        main.appendChild(h3);
        flag = false;
      } else {
        let p = document.createElement('p');
        p.innerText = key + " : " + user[key];
        main.appendChild(p);
      }
  }
main.style = "width : 300px; border : red 1px solid; float: left;"
let b1 = document.createElement('button');
let b2 = document.createElement('button');

b1.innerText = "Edit";
b2.innerText = "Delete"; 

b1.onclick = () => {
    editUser(user.id);
}

b2.onclick = () => {
    deleteUser(user.id);
}

main.appendChild(b1);
main.appendChild(b2);


    return main;
}

function deleteUser (id) {
   const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
   const filter = parse.filter(user => user.id !== id);
   localStorage.setItem(ARRAY_USERS, JSON.stringify(filter))
   location.reload();
}

function editUser (id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const user = parse.find(user => user.id === id);
    for (let i = 0; i < userForm.children.length; i++) {
        const elementUser = userForm.children[i];
        if(elementUser.id && elementUser.type !== 'submit') {
            for (const key in user) {
               if (elementUser.id === key) {
                elementUser.value = user[key];
               }
            }
        }
    }
    tempUser = user;
}