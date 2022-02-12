// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let validName = (str, symbol) => {
//     let newArr = [];
//     if (str.includes(symbol)) {
//         let a = str.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// validName(n3, '_');


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let arr = (length) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//         newArr.push(Math.floor(Math.random() * 100));
//     }
//     return newArr;
// };
// console.log(arr(50));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// let arr = (length) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//         newArr.push(Math.floor(Math.random() * 100));
//     }
//     newArr.sort((a, b) => a - b)
//     return newArr;
// };
// console.log(arr(50));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let arr = (length) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//         newArr.push(Math.floor(Math.random() * 100));
//     }
//     return newArr.sort((a, b) => a - b).filter((a) => a % 2 === 0);
// };
// console.log(arr(50));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = (length) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//         newArr.push(Math.floor(Math.random() * 100));
//     }
//     return newArr.map((a) => a.toString());
// };
// console.log(arr(50));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortArr = (arr, direct) => {
//     if (direct === 'forward') return arr.sort((a, b) => a - b);
//     if (direct === 'reverse') return arr.sort((a, b) => b - a);
// };
// console.log(sortArr([3, 21, 11], 'reverse'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// let newArr = coursesAndDurationArray.sort
// ((a, b) => b.monthDuration - a.monthDuration);
// console.log(newArr);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let newArr = coursesAndDurationArray.filter((item)=> {
//     return item.monthDuration > 5
// });
// console.log(newArr);