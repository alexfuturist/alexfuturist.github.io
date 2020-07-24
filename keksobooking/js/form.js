"use strict";
/////================ ВАЛИДАЦИЯ ФОРМЫ ================//////


(function () {

    //Тип и цена
    var formType = document.querySelector('#type');
    var formPrice = document.querySelector('#price');

    var setPriceBungalo = function () {
        formPrice.setAttribute('min', '100');
        formPrice.setAttribute('max', '499');
        formPrice.setAttribute('placeholder', '100 — 499');
    };

    var setPriceFlat = function () {
        formPrice.setAttribute('min', '500');
        formPrice.setAttribute('max', '999');
        formPrice.setAttribute('placeholder', '500 — 999');
    };

    var setPriceHouse = function () {
        formPrice.setAttribute('min', '1000');
        formPrice.setAttribute('max', '5000');
        formPrice.setAttribute('placeholder', '1000 — 5000');
    };

    var setPricePalace = function () {
        formPrice.setAttribute('min', '5001');
        formPrice.setAttribute('max', '10000');
        formPrice.setAttribute('placeholder', '5001 — 10000');
    };

    //Функция изменения параметров инпута цены
    //(сработает после активации старницы меткой)
    window.setPriceParametrs = function () {
        formType.addEventListener('change', () => {
            if (formType.value == 'flat') setPriceFlat();
            if (formType.value == 'bungalo') setPriceBungalo();
            if (formType.value == 'house') setPriceHouse();
            if (formType.value == 'palace') setPricePalace();
        });
    };




    //Время заезда и выезда
    var formTimeIn = document.querySelector('#timein');
    var formTimeOut = document.querySelector('#timeout');

    var setTimeOut12 = function () {
        formTimeOut.value = '12:00';
    };

    var setTimeOut13 = function () {
        formTimeOut.value = '13:00';
    };

    var setTimeOut14 = function () {
        formTimeOut.value = '14:00';
    };

    //Функция изменения параметров инпута времени выезда
    //(сработает после активации старницы меткой)
    window.setTimeOut = function () {
        formTimeIn.addEventListener('change', () => {
            if (formTimeIn.value == '12:00') setTimeOut12();
            if (formTimeIn.value == '13:00') setTimeOut13();
            if (formTimeIn.value == '14:00') setTimeOut14();
        });
    };

    var setTimeIn12 = function () {
        formTimeIn.value = '12:00';
    };

    var setTimeIn13 = function () {
        formTimeIn.value = '13:00';
    };

    var setTimeIn14 = function () {
        formTimeIn.value = '14:00';
    };

    //Функция изменения параметров инпута времени выезда
    //(сработает после активации старницы меткой)
    window.setTimeIn = function () {
        formTimeOut.addEventListener('change', () => {
            if (formTimeOut.value == '12:00') setTimeIn12();
            if (formTimeOut.value == '13:00') setTimeIn13();
            if (formTimeOut.value == '14:00') setTimeIn14();
        });
    };



    //Кол-во комнат
    var formRoom = document.querySelector('#room_number');
    var formCapacity = document.querySelector('#capacity');

    var setTRoom1 = function () {
        formCapacity.options[0].setAttribute('disabled', 'disabled');
        formCapacity.options[1].setAttribute('disabled', 'disabled');
        formCapacity.options[3].setAttribute('disabled', 'disabled');
    };

    var setTRoom2 = function () {
        formCapacity.options[1].removeAttribute('disabled', 'disabled');
        formCapacity.options[0].setAttribute('disabled', 'disabled');
        formCapacity.options[3].setAttribute('disabled', 'disabled');
    };

    var setTRoom3 = function () {
        formCapacity.options[0].removeAttribute('disabled', 'disabled');
        formCapacity.options[1].removeAttribute('disabled', 'disabled');
        formCapacity.options[3].setAttribute('disabled', 'disabled');
    };

    var setTRoom100 = function () {
        formCapacity.options[0].removeAttribute('disabled', 'disabled');
        formCapacity.options[1].removeAttribute('disabled', 'disabled');
        formCapacity.options[2].removeAttribute('disabled', 'disabled');
        formCapacity.options[3].removeAttribute('disabled', 'disabled');
    };

    //Функция изменения параметров инпута Количествa мест 
    //(сработает после активации старницы меткой)
    window.setCapacity = function () {
        setTRoom1();
        formRoom.addEventListener('change', () => {
            if (formRoom.value == '1') setTRoom1();
            if (formRoom.value == '2') setTRoom2();
            if (formRoom.value == '3') setTRoom3();
            if (formRoom.value == '100') setTRoom100();
        });
    };

})();


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//