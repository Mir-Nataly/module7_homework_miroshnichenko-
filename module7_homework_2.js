/* Задание 2 Модуль 7 */


const user = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 18
}

function checkProperties (obj, str) {
    console.log (obj in str);
};

checkProperties ('name', user)