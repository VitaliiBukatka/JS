// --створити масив з:
//     - з 5 числових значень

// let arr = [1, 2, 3, 4, 5];


// - з 5 стічкових значень

// let arr1 = ['dom', 'js', 'java', 'true', 'css'];


// - з 5 значень стрічкового, числового та булевого типу

// let arr2 = ['css', false, 45, true, 'js'];


// - та вивести його в консоль

// console.log(arr, arr1, arr2);
// console.log(arr + ' ' + arr1 + ' ' + arr2);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr3 = [];
// arr3[0] = 1;
// arr3[1] = 5;
// arr3[2] = 'jhgfvc';
// arr3[3] = true;
// arr3[4] = 458;
// arr3[5] = 'iuyt';
// arr3[6] = 999;
// console.log(arr3);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, laborum.</p>
//     </div>`)
// }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//     <p>Lorem ipsum dolor sit amet.</p>
//     ${i}
// </div>`)
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<div>
//     <h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
//     </div>`)
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<div>
//     <h1>${i} Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
//     </div>`)
//     i++;
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of arr) {
//     console.log(number)
// }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['css', 'html', 'aida', 'js', 'java', 'sara', 'sirko', 'vasya', 'tree', 'honda'];
//
// for (const number of arr) {
//     console.log(number)
// }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = ['asd', 999, true, false, 111, 'qwerty', 555, true, 777, 'fdsa'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (const number of arr) {
//     console.log(number)
// }
//
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = ['asd', 999, true, false, 111, 'qwerty', 555, true, 777, 'fdsa'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         console.log(arr[i])
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = ['asd', 999, true, false, 111, 'qwerty', 555, true, 777, 'fdsa'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i])
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = ['asd', 999, true, false, 111, 'qwerty', 555, true, 777, 'fdsa'];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i])
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'qwe';
// arr[1] = 111;
// arr[2] = 777;
// arr[3] = true;
// arr[4] = false;
// arr[5] = 'rrr';
// arr[6] = '9999';
// arr[7] = true;
// arr[8] = 789;
// arr[9] = 'asd';
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (const arrElement of arr) {
//     console.log(arrElement)
// }
//
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('step: ' + i + '');
//     document.write('step: ' + i + '');
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log('step: ' + i + '');
//     document.write('step: ' + i + '');
// }


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log('step: ' + i + '');
//     document.write('step: ' + i + '');
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0)
//         console.log('step: ' + i + '');
//         document.write('step: ' + i + '');
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0)
//         console.log('step: ' + i + '');
//     document.write('step: ' + i + '');
// }