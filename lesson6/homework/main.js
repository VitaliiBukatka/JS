// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 1варіант:
// console.log('hello world'.length);
// console.log('lorem ipsum'.length);
// console.log('javascript is cool'.length);

// 2 варіант:
// let str = 'hello world';
// console.log(str.length);
// let str2 = 'lorem ipsum';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// 1варіант:
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
//
// // 2 варіант:
// let str = 'hello world';
// let upperStr = str.toUpperCase();
// console.log(upperStr);
//
// let str2 = 'lorem ipsum';
// let upperStr2 = str2.toUpperCase();
// console.log(upperStr2);
//
// let str3 = 'javascript is cool';
// let upperStr3 = str3.toUpperCase();
// console.log(upperStr3);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// 1варіант:
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
//
// // // 2 варіант:
// let str = 'hello world';
// let lowStr = str.toLowerCase();
// console.log(lowStr);
//
// let str2 = 'lorem ipsum';
// let lowStr2 = str2.toLowerCase();
// console.log(lowStr2);
//
// let str3 = 'javascript is cool';
// let lowStr3 = str3.toLowerCase();
// console.log(lowStr3);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string    ';
// console.log(str.trim());

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToArray = (str) => {
//     return str.split(' ');
// };
// console.log(stringToArray('Каждый охотник желает знать'));
// document.write(stringToArray('Каждый охотник желает знать'));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості
// символів.
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
// document.write(delete_characters('Каждый охотник желает знать', 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {return str.split(' ').join('-').toUpperCase();}
// document.write(insert_dash('HTML JavaScript PHP'));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього
// регістру у верхній.

// let firstUp = (str) => {return str[0].toUpperCase() + str.slice(1)};
// console.log(firstUp('hello world'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// };
// console.log(capitalize('hello world'));