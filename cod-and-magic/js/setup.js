/////================== part-1-2 ===================//////

//Массив Имен
var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
];

//Массив Фамилий
var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
];

//Массив цвета мантий
var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

//Массив цвета глаз
var EYES_COLOR= [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

//Массив цвета фаерболов
var FIREBALL_COLOR= [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];

//Функция возрата случайного ключа массива
var arrRandKey = function (arrName) {
    var randKey = Math.floor(Math.random() * arrName.length);
    return randKey;
};

//Функция возрата случайного элемента массива
var arrRandItem = function (arrName) {
    var randItem = arrName[arrRandKey(arrName)];
    return randItem;
};

//Создаем массив из объектов
var wizards = [];

//Цикл создания 4 объектов:
for (var i = 0; i < 4; i++) {

    //Возрат случайного элемента массива 'names'
    var namesRand = arrRandItem(NAMES);

    //Возрат случайного элемента массива 'surnames'
    var surnamesRand = arrRandItem(SURNAMES);

    //Возрат случайного сочетания Имени и Фамилии персонажа
    var nameRand = namesRand + ' ' + surnamesRand;

    //Возрат случайного элемента массива 'coatColor'
    var coatColorRand = arrRandItem(COAT_COLOR);

    //Возрат случайного элемента массива 'eyesColor'
    var eyesColorRand = arrRandItem(EYES_COLOR);

    //Записываем данные в объект
    var wizard = {
        name: nameRand,
        coatColor: coatColorRand,
        eyesColor: eyesColorRand
    };

    //Записываем объекты в массив персонажей
    wizards[i] = wizard;
};

//Выводим массив персонажей в консоль
console.log(wizards);



/////================== part-3-4 ===================//////

//Находим наш шаблон персонажа
var wizardTemplate = document.querySelector('#similar-wizard-template').content;

//Создаем DOM-ноду
var fragment = document.createDocumentFragment();

//Записываем данные из массива в шаблон
for (var i = 0; i < wizards.length; i++ ) {
    
    //Глубокое копирование шаблона персонажа
    var wizardElement = wizardTemplate.cloneNode(true);

    //Перезаписываем Имя в шаблоне, меняя его на имя из массива персонажей
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

    //Перезаписываем Цвет мантии в шаблоне, меняя его на цвет мантии из массива персонажей
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;

    //Перезаписываем Цвет глаз в шаблоне, меняя его на цвет глаз из массива персонажей
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    //Записываем в пустой объект наш шаблон, с уже внесенными в него изменениями (имя, цвет мантии, цвет глаз)
    fragment.appendChild(wizardElement);
}

//Находим в разметке список, для добавления персонажей
var setupSimilarList = document.querySelector('.setup-similar-list');

//Отрисовываем персонажей (добавляем в список)
setupSimilarList.appendChild(fragment);

//Выводим массив персонажей в консоль
console.log(setupSimilarList);



/////================== part-5 ===================//////

//Показываем персонажей на странице
document.querySelector('.setup-similar').classList.remove('hidden');









