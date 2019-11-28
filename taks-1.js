// 1. Посмотрите на код:

// функции дается строка и два символа.
// она возвращает индекс одного из символов, поиск ведется с конца строки,
// следовательно функция возвращает наибольший возможный индекс одного из символов, содержащихся в строке

// Что можно улучшить?
// 1. Использовать строгие сравнения === и !==
// 2. заменить var на let
// 3. Заменить в цикле i = i - 1 на i--
// 4. Заменить ниндзя-код на понятный:
//  4.1 Говорящие названия для функций переменных
//  5.  в коде есть проверка на то, что были первый и второй символы, чьи позиции мы ищем одинаковы,
//      в таком случае нет нужды выполнять проверку на больший индекс
//      и вообще нет смысла создавать две переменные aIndex bIndex — достаточно одной

function returnMaxSymbolIndex(searchString, searchSymbolOne, searchSymbolTwo) {

    if (searchString.match(/^$/)) { // Если строка пустая ^ - начало строки $ - конец строки
        return "пустая строка!!!";
    }

    let result = "функция не смогла найти в строке ни один из указанных символов.";

    let i = searchString.length - 1;
    let maxIndex = -1;
    let elementWithMaxIndex;

    while ((maxIndex === -1) && (i > 0)) {

        if (searchString.substring(i, i +1) === searchSymbolOne) {
            maxIndex = i;
            elementWithMaxIndex = searchSymbolOne;
        }
        if (searchString.substring(i, i +1) === searchSymbolTwo) {
            maxIndex = i;
            elementWithMaxIndex = searchSymbolTwo;
        }
        i--;
    }

    if (maxIndex !== -1) {
        result = "максимальный индекс символа " + elementWithMaxIndex + " равен: " + maxIndex;
    }

    return result;
}


// Примечание: Если нужно изменить логику работы функции, чтобы она выдавала нам максимальный индекс
// для обоих символов, которые мы ищем в строке, то реализация будет такая:
function returnMaxSymbolsIndexes(searchString, searchSymbolOne, searchSymbolTwo) {

    if (searchString.match(/^$/)) { // Если строка пустая ^ - начало строки $ - конец строки
        return "пустая строка!!!";
    }

    let result = "функция не смогла найти в строке ни один из указанных символов.";

    let i = searchString.length - 1;
    let firstIndex = -1;
    let secondIndex = -1;

    while ( ((firstIndex === -1) || (secondIndex === -1)) && (i > 0)) {

        if (searchString.substring(i, i +1) === searchSymbolOne && firstIndex < i) {
            firstIndex = i;
        }
        if (searchString.substring(i, i +1) === searchSymbolTwo && secondIndex < i) {
            secondIndex = i;
        }

        i--;
    }

    if (firstIndex !== -1 && secondIndex !== -1) {
        result = "максимальный индекс символа " + searchSymbolOne + " равен: " + firstIndex +
                "\nмаксимальный индекс символа " + searchSymbolTwo + " равен: " + secondIndex;
    }

    else if (firstIndex !== -1 && secondIndex === -1) {
        result = "максимальный индекс символа " + searchSymbolOne + " равен: " + firstIndex +
            "\nсимвола " + searchSymbolTwo + " не существует в строке =(";
    }

    else if (firstIndex === -1 && secondIndex !== -1) {
        result = "максимальный индекс символа " + searchSymbolTwo + " равен: " + secondIndex +
            "\nсимвола " + searchSymbolOne + " не существует в строке =(";
    }

    return result;
}

let myString = "a4sd012634567489";
console.log("строка по которой ведем поиск: " + myString);
let first = "8";
let second = "j";

console.log(returnMaxSymbolIndex(myString, first, second));
console.log(returnMaxSymbolsIndexes(myString, first, second));