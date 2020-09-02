"use strict";
/////================ МОДУЛЬ СОЗДАНИЯ МЕТОК ОБЪЯВЛЕНИЙ (Пинов на карте) ================//////
(function () {

    var map = document.querySelector('.map');

    //Функция показа карты
    window.mapShow = function () {
        map.classList.remove('map--faded');
    };
    //Функция скрытия карты
    window.mapHidden = function () {
        map.classList.add('map--faded');
    };



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
    }

    //Находим в разметке блок, для добавления меток
    var mapPins = document.querySelector('.map__pins');

    //Отрисовываем метки (добавляем в блок)
    // mapPins.appendChild(mapPinFragment);
    window.mapPinsShow = function () {
        mapPins.appendChild(mapPinFragment);

        window.mapPinsAdded = document.querySelectorAll('.map__pin');

        for (var i = 0; i < mapPinsAdded.length; i++) {
            mapPinsAdded[i].classList.remove('hidden');
        }
    };


    //Функция скрытия добавленных меток объявлений
    window.mapPinsHidden = function () {

        //Скрываем все метки
        for (var i = 0; i < mapPinsAdded.length; i++) {
            mapPinsAdded[i].classList.add('hidden');
        }

        //находим главную метку и показываем ее
        window.mapPinMain = document.querySelector('.map__pin--main');
        mapPinMain.classList.remove('hidden');
    };

})();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//