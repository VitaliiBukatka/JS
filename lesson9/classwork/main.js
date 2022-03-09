// - є масив
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу
//     створити окремий блок, та помістити його у div.member

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// for (const simpson of simpsons) {
//     let divElem = document.createElement('div');
//     divElem.classList.add('member');
//     divElem.innerText = `${simpson.name} ${simpson.surname} ${simpson.age} ${simpson.info}`;
//     document.body.appendChild(divElem);
// }

// варіант 1
// for (const simpson of simpsons) {
//     let divElem = document.createElement('div');
//     divElem.classList.add('member');
//
//     let divName = document.createElement('div');
//     divName.innerText = `${simpson.name}`;
//     divElem.appendChild(divName);
//
//     let divSurname = document.createElement('div');
//     divSurname.innerText = `${simpson.surname}`;
//     divElem.appendChild(divSurname);
//
//     let divAge = document.createElement('div');
//     divAge.innerText = `${simpson.age}`;
//     divElem.appendChild(divAge);
//
//     let pInfo = document.createElement('p');
//     pInfo.innerText = `${simpson.info}`;
//     divElem.appendChild(pInfo);
//
//     let img = document.createElement('img');
//     img.src = `${simpson.photo}`;
//     divElem.appendChild(img);
//
//     document.body.appendChild(divElem);
//
//     divElem.style.textAlign = 'center';
//     divElem.style.width = '500px';
// }

// варіант 2
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     for (const key in simpson) {
//         if (key !== 'photo') {
//             const divElement = document.createElement('div');
//             divElement.innerText = key + ':' + simpson[key];
//             div.appendChild(divElement);
//         }else {
//             const img = document.createElement('img');
//             img.src = simpson[key];
//             div.appendChild(img);
//         }
//     }
//     document.body.appendChild(div);
// }



// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// for (let item of coursesArray) {
//     let divItem = document.createElement('div');
//     let divH2 = document.createElement('h2');
//     divH2.innerText = item.title;
//     divH2.classList.add('title');
//     let divCourseTime = document.createElement('div');
//     divCourseTime.classList.add('time');
//     let monthDuration = document.createElement('div');
//     monthDuration.innerText = (`monthDuration ${item.monthDuration}`);
//     let hourDuration = document.createElement('div');
//     hourDuration.innerText = (`hourDuration ${item.hourDuration}`);
//
//     let ul = document.createElement('ul');
//     for (let element of item.modules) {
//         let li = document.createElement('li');
//         li.innerText = element;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(divItem);
//     divItem.append(divH2, divCourseTime, ul);
//     divCourseTime.append(monthDuration, hourDuration);
// }