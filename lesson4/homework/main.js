// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function s(a, b) {
//     return a * b;
// }
// console.log(s(4,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function s(r) {
//     let Pi = 3.14;
//     return Pi*Math.pow(r,2)
// }
// console.log(s(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function s(r, h) {
//     let Pi = 3.14;
//     return 2 * Pi * r * h;
// }
// console.log(s(10, 20));


// - створити функцію яка приймає масив та виводить кожен його елемент
//
// function arrElemenLog(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// arrElemenLog([1, 2, 3, 4, 5, 6, 7, 8, 9])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pTxt(txt) {
//     document.write(`<p>${txt}</p>`)
// }
//
// pTxt('Hello world');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function table3Item(txt) {
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// table3Item('hello')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function table3Item(txt, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// table3Item('hello',3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function listDocWr(arr) {
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ol>`)
// }
//
// listDocWr([1, 23, 'asd', true, 777, 'qwe']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let newArr = [
//     {id: 1, name: 'Lia', age: 27},
//     {id: 2, name: 'Anita', age: 19},
//     {id: 3, name: 'Vasya', age: 35}
// ];
// function docWrObjArr(arr) {
//     for (const arrayElement of arr) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// docWrObjArr(newArr);
