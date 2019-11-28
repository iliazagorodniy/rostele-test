// 2. Реализовать функцию, создающую глубокую копию (deep copy)
// объекта без использования JSON.stringify

// мы используем node.js и подключаем через npm библиотеку lodash,
// в которой правильно реализована функция глубокого копирования,
// чтобы не изобретать велосипед

const _ = require("lodash");

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


function createDeepCopy(obj) {
    return _.cloneDeep(obj);
}

// устанавливаем через npm функцию _.cloneDeep из библиотеки lodash.
let userCopy = createDeepCopy(user);
user.name = "Joseph";

console.log(user);
console.log(userCopy);