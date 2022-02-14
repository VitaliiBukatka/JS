// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// class User {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let arr = [];
// arr.push(
//     user = new User(1, 'vasya', 'bochkin', 'bochkin@i.ua', '+3807777777'),
//     user = new User(2, 'bodya', 'valet', 'valet@i.ua', '+38011111111'),
//     user = new User(5, 'anita', 'moya', 'moya@i.ua', '+3809999999999999'),
//     user = new User(4, 'alla', 'myron', 'myron@i.ua', '+380222222222222'),
//     user = new User(6, 'vetal', 'sam', 'sam@i.ua', '+380333333333'),
//     user = new User(8, 'anna', 'myron', 'anna@i.ua', '+380444444444'),
//     user = new User(3, 'lesya', 'boyarsky', 'boyarsky@i.ua', '+380555555555'),
//     user = new User(7, 'vano', 'bosyj', 'bosyj@i.ua', '+3806666666'),
//     user = new User(10, 'serg', 'star', 'serg@i.ua', '+38088888888'),
//     user = new User(9, 'vitya', 'vaskin', 'vaskin@i.ua', '+3800000000000')
// );
// console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(arr.filter((item) => item.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arr.sort((a,b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arrClient = [];
// arrClient.push(
//     client = new Client(1, 'vasya', 'bochkin', 'bochkin@i.ua', '+3807777777',
//         ['apple', 'doll', 'water', 'car']),
//     client = new Client(2, 'bodya', 'valet', 'valet@i.ua', '+38011111111',
//         ['orange', 'house']),
//     client = new Client(5, 'anita', 'moya', 'moya@i.ua', '+3809999999999999',
//         ['ball']),
//     client = new Client(4, 'alla', 'myron', 'myron@i.ua', '+380222222222222',
//         ['honda', 'bmw', 'acura', 'lexus', 'audi', 'mercedes', 'skoda']),
//     client = new Client(6, 'vetal', 'sam', 'sam@i.ua', '+380333333333',
//         ['doll', 'water']),
//     client = new Client(8, 'anna', 'myron', 'anna@i.ua', '+380444444444',
//         ['water']),
//     client = new Client(3, 'lesya', 'boyarsky', 'boyarsky@i.ua', '+380555555555',
//         ['apple', 'doll', 'water', 'car', 'map']),
//     client = new Client(7, 'vano', 'bosyj', 'bosyj@i.ua', '+3806666666',
//         ['apple', 'doll', 'water', 'dog', 'cat']),
//     client = new Client(10, 'serg', 'star', 'serg@i.ua', '+38088888888',
//         ['potatoes', 'ride', 'feel']),
//     client = new Client(9,
//     'vitya', 'vaskin', 'vaskin@i.ua', '+3800000000000',
//         ['pencil', 'pen', 'chair', 'table'])
// )
// console.log(arrClient)


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

// console.log(arrClient.sort((a,b) => a.order.length - b.order.length));