// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let allClass = [];
let recurs = (elem) => {
    if (elem.children.length){
        for (const item of elem.children) {
            if (item.classList.length){
                for (const itemElement of item.classList) {
                    allClass.push(itemElement);
                }
            }
            recurs(item);
        }
    }
}
recurs(document.body);
console.log(allClass);
