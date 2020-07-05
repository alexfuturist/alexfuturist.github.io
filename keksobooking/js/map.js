//Создаем массив из объектов
var objects = [];


//Объект типов, загаловков, фотографий жилья
var TYPE_AND_TITLES = {
    'PALACE_BIG': {
        TYPE: 'Дворец',
        TITLES: 'Огромный прекрасный дворец',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/palace-big-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/palace-big-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/palace-big-3.jpg"
        ]
    },
    'PALACE_SMALL': {
        TYPE: 'Дворец',
        TITLES: 'Старый заброшенный дворец',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/palace-small-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/palace-small-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/palace-small-3.jpg"
        ]
    },
    'FLAT_BIG': {
        TYPE: 'Квартира',
        TITLES: 'Большая уютная квартира',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/flat-big-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/flat-big-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/flat-big-3.jpg"
        ]
    },
    'FLAT_SMALL': {
        TYPE: 'Квартира',
        TITLES: 'Маленькая квартирка',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/flat_small-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/flat_small-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/flat_small-3.jpg"
        ]
    },
    'HOUSE_BIG': {
        TYPE: 'Дом',
        TITLES: 'Красивый гостевой домик',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/house-big-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/house-big-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/house-big-3.jpg"
        ]
    },
    'HOUSE_SMALL': {
        TYPE: 'Дом',
        TITLES: 'Отличный маленький домик',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/house-small-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/house-small-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/house-small-3.jpg"
        ]
    },
    'BUNGALO_BIG': {
        TYPE: 'Бунгало',
        TITLES: 'Уютное бунгало далеко от моря',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/bungalo-big-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/bungalo-big-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/bungalo-big-3.jpg"
        ]
    },
    'BUNGALO_SMALL': {
        TYPE: 'Бунгало',
        TITLES: 'Маленькое бунгало прямо на воде',
        PHOTOS: [
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/bungalo-small-1.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/bungalo-small-2.jpg",
            "https://raw.githubusercontent.com/alexfuturist/alexfuturist.github.io/master/keksobooking/img/photo/bungalo-small-3.jpg"
        ]
    }
};



//Массив вариантов времени заселения
var CHECKIN = [
    '12:00',
    '13:00',
    '14:00'
];

//Массив вариантов времени выселения
var CHECKOUT = [
    '12:00',
    '13:00',
    '14:00'
];

//Массив дополнений
var FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
];




/////================ СОЗДАЕМ 8 ОБЪЕКТОВ ================//////

//Цикл создания 8 объектов:
for (var i = 0; i < 8; i++) {

    //Возрат случайной цены от 1 000 до 1 000 000
    var price = Math.floor(Math.random() * 1000) * 1000;




    //Превращаем набор объектов параметров жилья в массив
    var typeAndTitlesArr = Object.keys(TYPE_AND_TITLES);

    //Длина массива (колличество ключей объекта);
    var typeAndTitlesLength = typeAndTitlesArr.length;

    //Возрат случайного значения ключа из массива параметров жилья
    var typeAndTitlesNumber = Math.floor(Math.random() * typeAndTitlesLength);

    //Значение массива
    var typeAndTitlesKey = typeAndTitlesArr[typeAndTitlesNumber];

    //Возрат случайного значения ТИПА жилья из массива параметров жилья
    var type = TYPE_AND_TITLES[typeAndTitlesKey].TYPE;

    //Возрат случайного значения ЗАГОЛОВКА жилья из массива параметров жилья
    var title = TYPE_AND_TITLES[typeAndTitlesKey].TITLES;



    //Возрат случайного колличества комнат от 1 до 5
    var rooms = Math.ceil(Math.random() * 5);

    //Возрат случайного числа гостей
    var guests = Math.ceil(Math.random() * 20);

    //Возрат случайного времени заселения
    var checkin = CHECKIN[Math.floor(Math.random() * 3)];

    //Возрат случайного времени выселения
    var checkout = CHECKOUT[Math.floor(Math.random() * 3)];



    //Получание нового массива дополнений - сортировка случайным образом
    var featuresSort = FEATURES.sort(function (a, b) {
        return 0.5 - Math.random()
    });

    //Генерация случайной длины для нового массива дополнений
    var featuresLength = Math.ceil(Math.random() * featuresSort.length);

    //Объявление нового массива
    var features = [];

    //Цикл создания массива случайной длины
    for (var k = 0; k < featuresLength; k++) {
        var feature = featuresSort[k]

        features[k] = feature;
    };



    //Получание нового массива фотографий - сортировка случайным образом
    var photos = TYPE_AND_TITLES[typeAndTitlesKey].PHOTOS.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    // var photos = TYPE_AND_TITLES[typeAndTitlesKey].PHOTOS;



    //Измеряем ширину блока, в котором перетаскивается метка
    var blockWidth = (document.querySelector('.map__pins').offsetWidth) - 40;

    //Получание координаты «x»
    var positionX = 20 + (Math.round(blockWidth * Math.random()));

    //Получание координаты «y» (плюс высота полоаинки метки и ее острой ножки)
    var positionY = 130 + Math.round(Math.random() * (630 - 130)) + 20 + 22;



    /////================ ЗАДАЕМ ОБЪЕКТАМ ПАРАМЕТРЫ ================//////

    //Записываем данные в объект
    object = {
        'author': {
            'avatar': `img/avatars/user0${1+i}.png`
        },

        'offer': {
            'title': title,

            'address': `${positionX}, ${positionY}`,

            'price': price,

            'type': type,

            'rooms': rooms,

            'guests': guests,

            'checkin': checkin,

            'checkout': checkout,

            'features': features,

            'description': '',

            'photos': photos
        },

        'location': {
            x: positionX,
            y: positionY
        }

    };

    //Записываем объекты в массив 
    objects[i] = object;

};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//






/////================ СОЗДАЕМ НОВЫЕ МЕТКИ (Пины на карте) ================//////

// Показываем карту
var map = document.querySelector('.map');
map.classList.remove('map--faded');


//Находим наш шаблон Метки на карте
var mapPinTemplate = document.querySelector('#pin').content.querySelector('button.map__pin');


//Создаем DOM-ноду
var mapPinFragment = document.createDocumentFragment();

//Записываем данные из массива в шаблон
for (var i = 0; i < objects.length; i++) {

    //Глубокое копирование шаблона Метки на карте
    var mapPinElement = mapPinTemplate.cloneNode(true);

    //Перезаписываем координаты метки на карте, меняя их на координаты из массива объектов
    mapPinElement.style.left = objects[i].location.x + 'px';
    mapPinElement.style.top = objects[i].location.y + 'px';

    //Перезаписываем имя, меняя его на имя из массива
    mapPinElement.querySelector('img').src = objects[i].author.avatar;

    //Перезаписываем заголовок объявления, меняя его на заголовок из массива объектов
    mapPinElement.querySelector('img').alt = objects[i].offer.title;

    //Записываем в пустой объект наш шаблон, с уже внесенными в него изменениями
    mapPinFragment.appendChild(mapPinElement);
    // console.log(mapPinFragment);
}

//Находим в разметке блок, для добавления меток
var mapPins = document.querySelector('.map__pins');

//Отрисовываем метки (добавляем в блок)
mapPins.appendChild(mapPinFragment);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//






/////================ СОЗДАЕМ НОВЫЕ КАРТОЧКИ (Попапы пинов на карте) ================//////

//Находим наш шаблон Карточки
var mapCardTemplate = document.querySelector('#card').content.querySelector('.map__card');
// console.log(mapCardTemplate);

//Создаем DOM-ноду
var mapCardFragment = document.createDocumentFragment();

//Записываем данные из массива в шаблон
for (var i = 0; i < objects.length; i++) {

    //Глубокое копирование шаблона Карточки на карте
    var mapCardElement = mapCardTemplate.cloneNode(true);


    //Перезаписываем заголовок Карточки, меняя его на заголовок из массива объектов
    mapCardElement.querySelector('.popup__title').textContent = objects[i].offer.title;

    //Перезаписываем адрес, меняя его на адрес из массива объектов
    mapCardElement.querySelector('.popup__text--address').textContent = objects[i].offer.address;

    //Перезаписываем цену, меняя ее на цену из массива объектов
    mapCardElement.querySelector('.popup__text--price').textContent = `${objects[i].offer.price}` + `₴/ночь`;


    //Перезаписываем тип жилья, меняя его на тип жилья из массива объектов
    // var typeObjKey = objects[i].offer.type.toUpperCase();
    mapCardElement.querySelector('.popup__type').textContent = objects[i].offer.type;


    //Выводим количество гостей и комнат
    mapCardElement.querySelector('.popup__text--capacity').textContent =
        objects[i].offer.rooms +
        ' комнаты для ' +
        objects[i].offer.guests +
        ' гостей';

    //Время заезда и выезда
    mapCardElement.querySelector('.popup__text--time').textContent =
        'Заезд после ' +
        objects[i].offer.checkin +
        ' выезд до ' +
        objects[i].offer.checkout +
        '.';


    /////<<<<<<<< СОЗДАЕМ СПИСОК ИЗ УДОБСТВ (параметров) КВАРТИРЫ =====//////

    //Глубокое копирование шаблона - элемента списка параметров
    var mapFeatureTemplate = mapCardTemplate.querySelector('.popup__features > li');

    //Создаем DOM-ноду для списка параметров
    var mapFeatureFragment = document.createDocumentFragment();

    //Вернем все удобства из списка
    for (var f = 0; f < objects[i].offer.features.length; f++) {

        //Глубокое копирование шаблона - элемента списка параметров
        var mapFeatureElement = mapFeatureTemplate.cloneNode(true);

        //Меняем имя класса у элемента списка параметров квартиры
        mapFeatureElement.className = `feature feature--${objects[i].offer.features[f]}`;

        mapFeatureFragment.appendChild(mapFeatureElement);
    }

    //Добавляем наш сгенерированный список удобств в Карточку
    mapCardElement.querySelector('.popup__features').appendChild(mapFeatureFragment);

    //Удаляем дефолтный список удобств
    var featureHidden = mapCardElement.querySelectorAll('.feature--hidden');

    for (var t = 0; t < featureHidden.length; t++) {
        mapCardElement.querySelector('.popup__features').removeChild(featureHidden[t]);
    }


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//




    //Описание объекта недвижимости
    mapCardElement.querySelector('.popup__description').textContent = objects[i].offer.description;




    /////<<<<<<<< СОЗДАЕМ СПИСОК ИЗ ФОТОГРАФИЙ =====//////

    //Глубокое копирование шаблона - элемента списка c изображением
    var mapPictureTemplate = mapCardTemplate.querySelector('.popup__pictures > li');

    //Создаем DOM-ноду для списка фотографий
    var mapPictureFragment = document.createDocumentFragment();

    //Вернем все фотографии из списка
    for (var j = 0; j < photos.length; j++) {

        //Глубокое копирование шаблона элемента списка изображений
        var mapPictureElement = mapPictureTemplate.cloneNode(true);

        mapPictureElement.querySelector('img').src = objects[i].offer.photos[j];

        mapPictureFragment.appendChild(mapPictureElement);
    }

    //Добавляем наш сгенерированный список удобств в Карточку
    mapCardElement.querySelector('.popup__pictures').appendChild(mapPictureFragment);
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//



    //Замениa аватарки пользователя
    mapCardElement.querySelector('.popup__avatar').src = objects[i].author.avatar;

    console.log(mapCardElement);

    document.querySelector('.map').insertBefore(mapCardElement, document.querySelector('.map__filters-container'));
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//