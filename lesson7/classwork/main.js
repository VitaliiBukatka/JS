// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю  ${this.maxSpeed}  на годину`)
//     };
//     this.info = function () {
//         for (const argumentsKey in this) {
//             if (typeof this[argumentsKey] !== 'function') {
//                 console.log(`${argumentsKey} ${this[argumentsKey]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let newAuto = new Car('Honda', 'Japan', '2007', 260, '2.0');
// console.log(newAuto);
// newAuto.drive();
// newAuto.info();
// newAuto.increaseMaxSpeed(30);
// newAuto.changeYear('2010');
// newAuto.addDriver('michael')

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю  ${this.maxSpeed}  на годину`)
//         };
//         this.info = function () {
//             for (const argumentsKey in this) {
//                 if (typeof this[argumentsKey] !== 'function') {
//                     console.log(`${argumentsKey} ${this[argumentsKey]}`)
//                 }
//             }
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         };
//     };
// }
//
// let newAuto = new Car('Honda', 'Japan', '2007', 320, '2.0');
// console.log(newAuto);
// newAuto.drive();
// newAuto.info();
// newAuto.increaseMaxSpeed(30);
// newAuto.changeYear('2010');
// newAuto.addDriver('michael')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
//
// let newCinderellaArr = [
//     new Cinderella('Anna', 18, 37),
//     new Cinderella('Alla', 19, 36),
//     new Cinderella('Anita', 21, 35),
//     new Cinderella('Amina', 22, 38),
//     new Cinderella('Sasha', 24, 39),
//     new Cinderella('Tanya', 19, 40),
//     new Cinderella('Nastya', 18, 39),
//     new Cinderella('Yulya', 27, 38),
//     new Cinderella('Lyalya', 23, 38),
//     new Cinderella('Liya', 25, 37)
// ];
// console.log(newCinderellaArr);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// class Prince {
//     constructor(name, age, findSize) {
//         this.name = name;
//         this.age = age;
//         this.findSize = findSize;
//     };
// }
//
// let prince = new Prince('Dariy', 35, 36);
//
// let loveIs = (newCinderellaArr, prince) => {
//     for (const newCinderellaArrElement of newCinderellaArr) {
//         if (newCinderellaArrElement.size === prince.findSize) {
//             return `Your Cinderella - ${newCinderellaArrElement.name}`
//         }
//     }
// };
// console.log(loveIs(newCinderellaArr, prince));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let loveCinderella = newCinderellaArr.find((item) => item.size === prince.findSize);
// console.log(loveCinderella);