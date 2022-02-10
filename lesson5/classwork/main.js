// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (a, b, c) => {
//     if (a < b && a < c) {
//         return (a)
//     } else if (b < a && b < c) {
//         return (b)
//     } else if (c < a && c < b) {
//         return (c)
//     } else {
//         return ('ви не ввели вірні числа')
//     }
// }
//
// console.log(minNumber(8, 12, 5));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         return (a)
//     } else if (b > a && b > c) {
//         return (b)
//     } else if (c > a && c > b) {
//         return (c)
//     } else {
//         return ('ви не ввели вірні числа')
//     }
// }
//
// console.log(maxNumber(77, 1000, 99));


// - створити функцію яка повертає найбільше число з масиву

// const functionMaxElement = (arr) => {
//     let maxElem = arr[0];
//     for (const funMaxElement of arr) {
//         if (funMaxElement > maxElem)
//             maxElem = funMaxElement;
//     }
//     return maxElem;
// };
// console.log(functionMaxElement([8, 5, 7, 1, 77, 63, 99, 55, 8, 11]));


// - створити функцію яка повертає найменьше число з масиву

// const functionMinElement = (arr) => {
//     let minElem = arr[0];
//     for (const funMinElement of arr) {
//         if (funMinElement < minElem)
//             minElem = funMinElement;
//     }
//     return minElem;
// };
// console.log(functionMinElement([11, 9, 7, 3, 12, 6, 88, 77, 65, 777]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const functionSum = (array) => {
//     let i = 0;
//     for (const arrElement of array) {
//         i += arrElement;
//     }
//     return i;
// };
// console.log(functionSum([1, 2, 10]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const functionMid = (array) => {
//     let i = 0;
//     for (const arrElement of array) {
//         i += arrElement;
//     }
//     return i / array.length;
// };
// console.log(functionMid([5, 5, 10, 10]));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);


// let funcRElement = (arguments) => {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const funRandomElement of arguments) {
//         if (funRandomElement > max) max = funRandomElement;
//         if (funRandomElement < min) min = funRandomElement;
//     }
//     console.log("max ",max);
//     return min;
// }
// const min = funcRElement([68,100,11,15,185,99,44]);
// console.log("min ",min);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arrRandom = (arrLength) => {
//     let array = [];
//     for (let i = 0; i < arrLength; i++) {
//         array.push(Math.round(Math.random()*100))
//     }
//     return array;
// }
// console.log(arrRandom(50));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

// let arrRandom = (arrLength, limit) => {
//     let array = [];
//     for (let i = 0; i < arrLength; i++) {
//         array.push(Math.round(Math.random()*limit))
//     }
//     return array;
// }
// console.log(arrRandom(50, 700));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let newReverse = (array) => {
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         arr[i] = array[(array.length - 1) - i]
//     }
//     return arr;
// }
// console.log(newReverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));