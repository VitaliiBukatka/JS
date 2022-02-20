// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let main_header = document.getElementById('main_header');
// main_header.classList.add('dec_2022');

// b) робить шириниу елементу ul 400px

// let ulW400 = document.getElementsByTagName('ul');
// ulW400[0].style.width = '400px';
// ulW400[0].style.border = '5px solid grey';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let classLinkList = document.getElementsByClassName('linkList');
// for (const classLinkListElement of classLinkList) {
//     classLinkListElement.style.width = '50%';
//     classLinkListElement.style.border = '1px solid red';
//     classLinkListElement.style.margin = '3px';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// let listElement2Text = document.getElementsByClassName('listElement2');
// listElement2Text[0].innerHTML = '<a href=""><b>text</b></a>';

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let liAllGrey = document.getElementsByTagName('li');
// for (const liAllGreyElement of liAllGrey) {
//     liAllGreyElement.style.backgroundColor = 'grey';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let aAllEl = document.getElementsByTagName('a');
// for (const aAllElElement of aAllEl) {
//     aAllElElement.classList.add('anchor');
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір
// тексту на 40 пікселів

// let aAllSize = document.getElementsByTagName('a');
// for (const aAllSizeElement of aAllSize) {
//     if (aAllSizeElement.innerText === 'link3') {
//         aAllSizeElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aAllXxx = document.getElementsByTagName('a');
// for (let aAllElement of aAllXxx) {
//     console.log(aAllElement);
//     let newClass = aAllElement.innerText
//     aAllElement.classList.add(`element_${newClass}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let allSubHeader = document.getElementsByClassName('sub-header');
// for (const allSubHeaderElement of allSubHeader) {
//     allSubHeaderElement.style.color = prompt('Enter color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()

// let allSubHeaderColTxt = document.getElementsByClassName('sub-header');
// for (const allSubHeaderColTxtElement of allSubHeaderColTxt) {
// if (allSubHeaderColTxtElement.innerText === 'content 2 segment'){
//     allSubHeaderColTxtElement.style.color = prompt('Enter color')
// }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let allSubHeaderColTxt = document.getElementsByClassName('content_1');
// for (const allSubHeaderColTxtElement of allSubHeaderColTxt) {
//     allSubHeaderColTxtElement.innerText = prompt('enter your text')
// }

// l) отримати елементи p та змінити їм padding на 20px

// let aAllP = document.getElementsByTagName('p');
// for (const aAllPElement of aAllP) {
//     aAllPElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let allTxt2 = document.getElementsByClassName('text2');
// console.log(allTxt2);
// for (const allTxt2Element of allTxt2) {
// allTxt2Element.innerText = 'dec-2021';
// }

