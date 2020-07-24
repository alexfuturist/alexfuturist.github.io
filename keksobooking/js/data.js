"use strict";
//Создаем массив из объектов
var objects = [];

//Функция создания 8 объектов со всеми данными о помещениях
(function () {

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

    //Превращаем в массив набор объектов параметров жилья
    var typeAndTitlesArr = Object.keys(TYPE_AND_TITLES);

    //Получание нового массива параметров жилья - сортировка случайным образом
    var typeAndTitlesArrSort = typeAndTitlesArr.sort(function (a, b) {
        return 0.5 - Math.random()
    });


    //Цикл создания 8 объектов:
    for (var i = 0; i < 8; i++) {

        //Возрат случайной цены от 100 до 10 000
        var price = 100 + ((Math.floor(Math.random() * 100) * 99));
        // console.log(price);


        //Возрат случайного значения ТИПА жилья из объекта параметров жилья
        var type = TYPE_AND_TITLES[typeAndTitlesArrSort[i]].TYPE;

        //Возрат случайного значения ЗАГОЛОВКА жилья из объекта параметров жилья
        var title = TYPE_AND_TITLES[typeAndTitlesArrSort[i]].TITLES;


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



        //Получение нового массива фотографий - сортировка случайным образом
        window.photos = TYPE_AND_TITLES[typeAndTitlesArrSort[i]].PHOTOS.sort(function (a, b) {
            return 0.5 - Math.random()
        });

        // console.log(photos);
        // var photos = TYPE_AND_TITLES[typeAndTitlesKey].PHOTOS;



        //Измеряем ширину блока, в котором перетаскивается метка
        window.blockWidth = (document.querySelector('.map__pins').offsetWidth) - 40;

        //Получание координаты «x»
        var positionX = 20 + (Math.round(blockWidth * Math.random()));

        //Получание координаты «y» (плюс высота половинки метки и ее острой ножки)
        var positionY = 160 + Math.round(Math.random() * (630 - 160)) + (23 + 9);



        /////================ ЗАДАЕМ ОБЪЕКТАМ ПАРАМЕТРЫ ================//////

        //Записываем данные в объект
        var object = {
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

}) ();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//