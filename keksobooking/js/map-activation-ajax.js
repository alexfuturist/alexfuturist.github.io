"use strict";
/////================ Разблокирование полей формы ================//////


(function () {

    var fieldsets = document.querySelectorAll('fieldset');

    //Блокирование полей формы (сразу после загрузки страницы)
    for (var i = 0; i < fieldsets.length; i++) {
        fieldsets[i].setAttribute('disabled', 'disabled');
    };

    //Функция отмены блокирования полей форм
    var fieldsetsShow = function () {
        for (var i = 0; i < fieldsets.length; i++) {
            fieldsets[i].removeAttribute('disabled', 'disabled');
        };
    };

    //Функция блокирования полей форм
    var fieldsetsDisabled = function () {
        for (var i = 0; i < fieldsets.length; i++) {
            fieldsets[i].setAttribute('disabled', 'disabled');
        };
    };

    //Функция отмены скрытия полей форм
    var noticeFormEnabled = function () {
        document.querySelector('.notice__form').classList.remove('notice__form--disabled');
    };

    //Функция скрытия полей форм
    var noticeFormDisabled = function () {
        document.querySelector('.notice__form').classList.add('notice__form--disabled');
    };



    /////================ АКТИВИРУЕМ СТРАНИЦУ ================//////

    //Находим главную метку
    var mapPinMain = document.querySelector('.map__pin--main');

    //Находим инпут адреса
    var inputAddress = document.querySelector('#address');

    //Функция записи адреса Главной метки в инпут адреса
    window.inputAddressShow = function () {
        //Определение координат Главной метки, приведение к числу
        var mapPinMainX = parseInt(window.getComputedStyle(mapPinMain).left);
        var mapPinMainY = parseInt(window.getComputedStyle(mapPinMain).top) + 49;

        //Добавление координат в инпут адреса
        inputAddress.setAttribute('value', `${mapPinMainX}, ${mapPinMainY}`);
    };

    //Выполняем функцию записи адреса Главной метки в инпут адреса
    inputAddressShow();
    // console.log(inputAddress);




    //Функция показа Карточек при нажатии на Метки
    var mapCardsShow = function () {
        //Клик по метке объявления
        var mapPin = document.querySelectorAll('button.map__pin');

        for (let k = 1; k < mapPin.length; k++) {
            //Получаем номер кнопки
            mapPin[k].addEventListener('click', function () {
                // Скрываем все Карточки
                for (let i = 0; i < mapCard.length; i++) {
                    mapCard[i].classList.add('hidden');
                };

                //Показываем конкретную Карточку
                mapCard[k - 1].classList.remove('hidden');
            });
        };

    };



    //Функция скрытия Карточек при нажатии на Крестик
    var mapCardHidden = function () {
        //Крестики закрытия объявления
        var mapCardClose = document.querySelectorAll('button.popup__close');

        for (let k = 0; k < mapCardClose.length; k++) {
            //Получаем номер кнопки
            mapCardClose[k].addEventListener('click', function () {
                //Скрываем конкретную Карточку
                mapCard[k].classList.add('hidden');
            });
        };

    };



    //Функция АКТИВАЦИИ страницы
    var mapActivation = function () {
        mapShow(); //метод показа карты
        noticeFormEnabled(); //метод отмены скрытия полей форм
        fieldsetsShow(); //метод отмены блокирования полей форм
        mapPinsShow(); //вызов метода отрисовки пинов 
        mapCardsShow(); //вызов метода показа Карточек при нажатии на Метки
        mapCardHidden(); //вызов метода скрытия Карточек при нажатии на Крестик
        setPriceParametrs(); // вызов метода изменения параметров инпута цены
        setTimeOut(); // вызов метода взаимоизменения времени заезда/выезда
        setTimeIn(); // вызов метода взаимоизменения времени заезда/выезда
        setCapacity(); //вызов метода взаимоизменения комнат/гостей
    };

    //Клик по главной метке - активация страницы
    mapPinMain.addEventListener('mouseup', mapActivation);



    /////================ ДеАКТИВИРУЕМ СТРАНИЦУ ================//////
    //Кнопка сброса
    var formResetButton = document.querySelector('.form__reset');
    //Форма
    var form = document.querySelector('.notice__form');

    //Функция установки главной метки в начальное положение
    var mapPinMainSet = function () {
        mapPinMain.style.left = 50 + '%';
        mapPinMain.style.top = 375 + 'px';
    };

    //Функция деактивации страницы
    var formReset = function () {
        mapHidden (); //Функция скрытия карты
        form.reset(); //Сброс формы
        noticeFormDisabled(); //метод скрытия полей форм
        fieldsetsDisabled(); //метод блокирования полей форм
        mapPinsHidden(); //Скрытие меток объявлений 
        mapCardsHidden(); //Cкрытие Карточек объявлений
        mapPinMainSet();//Установка главной метки в начальное положение
    };

    formResetButton.addEventListener('click', formReset);

})();



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//