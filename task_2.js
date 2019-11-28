// 2. Реализовать функцию, создающую глубокую копию (deep copy)
// объекта без использования JSON.stringify

// мы используем node.js и подключаем через npm библиотеку lodash,
// в которой правильно реализована функция глубокого копирования,
// чтобы не изобретать велосипед

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    },
    generateSizes() {
        alert(
            "Hi my name is " + this.name +
            " im " + this.sizes.height + " sm tall and " +
            this.sizes.width + " sm in width!"
        );
    },
};

function makeDeepClone(obj) {
    let clone = {};
    for (let prop in obj) { // Перебираем свойства копируемого объекта
        if (obj.hasOwnProperty(prop)) { // Только собственные свойства без наследуемых
            if ("object" === typeof obj[prop]) // Если свойство является объектом — ...
                clone[prop] = makeDeepClone(obj[prop]); // РЕКУРСИЯ. Снова вызываем функцию клонирования, пока свойство не будет примитивом
            else
                clone[prop] = obj[prop]; // Свойство является примитивом — просто копируем его
        }
    }
    return clone;
}


// устанавливаем через npm функцию _.cloneDeep из библиотеки lodash.
let userCopy = makeDeepClone(user);
user.name = "Joseph";

console.log(user);
console.log(userCopy);