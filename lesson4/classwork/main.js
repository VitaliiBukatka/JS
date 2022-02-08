// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumber(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else if (c < a && c < b) {
//         console.log(c)
//     } else {
//         console.log('ви не ввели вірні числа')
//     }
// }
//
// minNumber(20, 15, 7);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     } else {
//         console.log('ви не ввели вірні числа')
//     }
// }
//
// maxNumber(99, 111, 77);


// - створити функцію яка повертає найбільше число з масиву

// const functionMaxElement = (arr) => {
//     let maxElem = arr[0];
//     for (const funMaxElement of arr) {
//         if (funMaxElement > maxElem)
//             maxElem = funMaxElement;
//     }
//     return maxElem;
// };
// const funMaxLog = functionMaxElement([1, 3, 8, 5, 12, 1, 88, 77, 65, 777]);
// console.log(funMaxLog);


// - створити функцію яка повертає найменьше число з масиву

// const functionMinElement = (arr) => {
//     let minElem = arr[0];
//     for (const funMinElement of arr) {
//         if (funMinElement < minElem)
//             minElem = funMinElement;
//     }
//     return minElem;
// };
// const funMinLog = functionMinElement([2, 3, 8, 5, 12, 6, 88, 77, 65, 777]);
// console.log(funMinLog);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const functionSum = (array) => {
//     let i = 0;
//     for (const arrElement of array) {
//         i += arrElement;
//     }
//     return i;
// };
// let sum = functionSum([10, 8, 7, 6]);
// console.log(sum);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const functionMid = (array) => {
//     let i = 0;
//     for (const arrElement of array) {
//         i += arrElement;
//     }
//     return i / array.length;
// };
// let mid = functionMid([10, 9, 7, 6]);
// console.log(mid);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);

// function funcRElement(){
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const funRandomElement of arguments) {
//         if (funRandomElement > max) max = funRandomElement;
//         if (funRandomElement < min) min = funRandomElement;
//     }
//     console.log("max ",max);
//     return min;
// }
// const min = funcRElement(68,100,11,15,185,99,44);
// console.log("min ",min);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function arrRandom(arrLength) {
//     let array = [];
//     for (let i = 0; i < arrLength; i++) {
//         array.push(Math.round(Math.random()*100))
//     }
//     return array;
// }
// console.log(arrRandom(50));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.

// function arrRandom(arrLength, limit) {
//     let array = [];
//     for (let i = 0; i < arrLength; i++) {
//         array.push(Math.round(Math.random()*limit))
//     }
//     return array;
// }
// console.log(arrRandom(50, 700));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function newReverse (array){
//     let arr = [];
//     for (let i = 0; i < array.length; i++){
//         arr[i] = array[(array.length - 1) - i]
//     }
//     return arr;
// }

// console.log(newReverse([1,2,3,4,5,6,7,8,9]));

