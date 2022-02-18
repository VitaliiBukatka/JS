// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//          street: 'Kulas Light',
//          suite: 'Apt. 556',
//          city: 'Gwenborough',
//          zipcode: '92998-3874',
//          geo: {
//              lat: '-37.3159',
//              lng: '81.1496'
//          }
//      },
//     phone: '1-770-736-8031 x56442',

//     website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//          catchPhrase: 'Multi-layered client-server neural-net',
//          bs: 'harness real-time e-markets'
// }
// }

// class Data {
//     constructor(id, name, username, email, adress, street, suite, city, zipcode, geo, lat, lng, phone, website, company,
//                 nameCompany, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.adress = {
//             street: street,
//             suite: suite,
//             city: city,
//             zipcode: zipcode,
//             geo: {
//                 lat: lat,
//                 lng: lng
//             }
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             nameCompany: nameCompany,
//             catchPhrase: catchPhrase,
//             bs: bs
//         }
//     }
// }
//
// let newData = new Data(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'adress',
//     'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', 'geo', '-37.3159', '81.1496',
//     '1-770-736-8031 x56442', 'hildegard.org', 'company', 'Romaguera-Crona',
//     'Multi-layered client-server neural-net', 'harness real-time e-markets');
//
// console.log(newData);


// -Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }



class TegInform {
    constructor(nameTag, action, attrs, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
        this.nameTag = nameTag;
        this.action = action;
        this.attrs = [[titleOfAttr, actionOfAttr], [titleOfAttr2, actionOfAttr2]];
    }
}

let newTegInformA = new TegInform(
    'Тег <a>',
    'является одним из важных элементов HTML и предназначен для создания ссылок',
    'attrs',
    'accesskey',
    'Активация ссылки с помощью комбинации клавиш',
    'coords',
    'Устанавливает координаты активной области');
console.log(newTegInformA);
let newTegInformDiv = new TegInform(
    'Элемент <div>',
    'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'attrs',
    'align',
    'Задает выравнивание содержимого тега <div>',
    'title',
    'Добавляет всплывающую подсказку к содержимому');
console.log(newTegInformDiv);
let newTegInformH1 = new TegInform(
    'тег <h1>',
    'представляет собой наиболее важный заголовок первого уровня',
    'attrs',
    'align',
    'Определяет выравнивание заголовка',
    'hidden',
    'Скрывает содержимое элемента от просмотра');
console.log(newTegInformH1);
let newTegInformSpan = new TegInform(
    'Тег <span>',
    'предназначен для определения строчных элементов документа',
    'attrs',
    'contenteditable',
    'Сообщает, что элемент доступен для редактирования пользователем',
    'style',
    'Применяется для определения стиля элемента с помощью правил CSS');
console.log(newTegInformSpan);
let newTegInformInput = new TegInform(
    'Тег <input>',
    'является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса ' +
    'и обеспечить взаимодействие с пользователем',
    'attrs',
    'accept',
    'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'form',
    'Связывает поле с формой по её идентификатору');
console.log(newTegInformInput);
let newTegInformForm = new TegInform(
    'Тег <form>',
    'устанавливает форму на веб-странице',
    'attrs',
    'autocomplete',
    'Включает автозаполнение полей формы',
    'novalidate',
    'Отменяет встроенную проверку данных формы на корректность ввода');
console.log(newTegInformForm);
let newTegInformOption = new TegInform(
    'Тег <option>',
    'определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'attrs',
    'label',
    'Указание метки пункта списка',
    'selected',
    'Заранее устанавливает определенный пункт списка выделенным');
console.log(newTegInformOption);
let newTegInformSelect = new TegInform(
    'Тег <select>',
    'позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'attrs',
    'disabled',
    'Блокирует доступ и изменение элемента',
    'required',
    'Список обязателен для выбора перед отправкой формы');
console.log(newTegInformSelect);


