// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи -
// складає або конкатенує їх між собою.

// function arg(a, b) {
//     if (a === 'number' || a === 'string' || a === 'boolean') {
//         console.log(a)
//     } else if (b === undefined) {
//         console.log(a)
//     } else {
//         console.log(a + b)
//     }
// }
//
// arg('asd', 33);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

// function sumArray(arr, arr2) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i], arr2[i]);
//         newArray.push(arr[i] + arr2[i]);
//     }
//     return newArray;
// }
//
// console.log(sumArray([1, 2, 3, 4], [2, 3, 4, 5]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// function arrKeyLog(arr) {
//     let newArr = [];
//     for (let arrElement of arr) {
//         for (let arrElementKey in arrElement) {
//             newArr.push(arrElementKey)
//         }
//     }
//     console.log(newArr)
// }
//
// arrKeyLog([{name: 'Dima', age: 13}, {model: 'Camry'}]);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function arrKeyLog(arr) {
//     let array = [];
//     for (let arrElement of arr) {
//         for (const arrElementKey in arrElement) {
//        array.push(arrElement[arrElementKey])
//         }
//     }
//         console.log(array)
// }
//
// arrKeyLog([{name: 'Dima', age: 13}, {model: 'Camry'}]);
