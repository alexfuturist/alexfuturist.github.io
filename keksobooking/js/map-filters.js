"use strict";
/////================ ФИЛЬТРАЦИЯ ДАННЫХ ================//////
(function () {

    //Находим Select "Тип жилья"
    window.housingType = document.querySelector('#housing-type');

    //Находим Select "Цена жилья"
    window.housingPrice = document.querySelector('#housing-price');

    //Находим Select "Число комнат"
    window.housingRooms = document.querySelector('#housing-rooms');

    //Находим Select "Число гостей"
    window.housingGuests = document.querySelector('#housing-guests');



    //Вешаем обработчик на Select "Тип жилья"
    housingType.addEventListener('click', function () {
        //Вызываем функцию ФИЛЬТРАЦИИ МЕТОК (цепочка из фильтров)
        mapFilter();
    });

    //Вешаем обработчик на Select "Цена жилья"
    housingPrice.addEventListener('click', function () {
        //Вызываем функцию ФИЛЬТРАЦИИ МЕТОК (цепочка из фильтров)
        mapFilter();
    });

    //Вешаем обработчик на Select "Число комнат"
    housingRooms.addEventListener('click', function () {
        //Вызываем функцию ФИЛЬТРАЦИИ МЕТОК (цепочка из фильтров)
        mapFilter();
    });

    //Вешаем обработчик на Select "Число гостей"
    housingGuests.addEventListener('click', function () {
        //Вызываем функцию ФИЛЬТРАЦИИ МЕТОК (цепочка из фильтров)
        mapFilter();
    });



    //СПИСОК УДОБСТВ
    //Находим "Wi-Fi"
    window.filterWifi = document.querySelector('#filter-wifi');

    //Находим "Посудомоечная машина"
    window.filterDishwasher = document.querySelector('#filter-dishwasher');

    //Находим "Парковка"
    window.filterParking = document.querySelector('#filter-parking');

    //Находим "Стиральная машина"
    window.filterWasher = document.querySelector('#filter-washer');

    //Находим "Лифт"
    window.filterElevator = document.querySelector('#filter-elevator');

    //Находим "Кондиционер"
    window.filterConditioner = document.querySelector('#filter-conditioner');

    //Находим все чекбоксы удобств
    var filterCheckboxSet = document.querySelectorAll('.map__filter-set input');

    //Вешаем обработчик на элементы СПИСКА УДОБСТВ
    for (let filterCheckbox of filterCheckboxSet) {
        filterCheckbox.addEventListener('click', function () {
            //Вызываем функцию ФИЛЬТРАЦИИ МЕТОК (цепочка из фильтров)
            mapFilter();
        });
    }





    //Функция ФИЛЬТРАЦИИ МЕТОК (цепочка из фильтров)
    function mapFilter() {

        //Находим Карточки обявлений и скрываем их
        window.mapCard = document.querySelectorAll('.map__card');

        for (var i = 0; i < mapCard.length; i++) {
            mapCard[i].classList.add('hidden');
        }

        //Находим Метки обявлений и показываем их
        window.mapPin = document.querySelectorAll('.map__pin');

        for (var i = 0; i < mapPin.length; i++) {
            mapPin[i].classList.remove('hidden');
        }



        //Фильтр по ТИПУ ЖИЛЬЯ (скрываем не подходящие метки)
        //Создаем массив отфильтрованных объектов
        var pinIndexOfType = window.objects.map(function (object, index) {

            //Определяем индекс поля селекта
            var housingTypeSelectedIndex = housingType.options.selectedIndex;

            //Определяем значение поля селекта
            var housingTypeSelectedText = housingType.options[housingTypeSelectedIndex].text;

            //Если НЕ выбрано дефолтное состояние фильтра, заходим в условие
            if (housingTypeSelectedIndex !== 0) {
                //Если значение типа жилья в селекте не совпадает со значением в объявлении
                if (object.offer.type !== housingTypeSelectedText) {

                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }

                }
            }

        });

        //Фильтр по ЦЕНЕ ЖИЛЬЯ (скрываем не подходящие метки)
        //Создаем массив отфильтрованных объектов
        var pinIndexOfPrice = window.objects.map(function (object, index) {

            //Определяем индекс поля
            var housingPriceSelectedIndex = housingPrice.options.selectedIndex;

            //Определяем длину селекта (сколько всего есть вариантов цены жилья)
            var housingPriceLength = housingPrice.length - 1;

            //Определяем выбранное значение поля (нижняя граница)
            var housingPriceSelectedValue = housingPrice.options[housingPriceSelectedIndex].value;

            //Определяем значение поля следующего впереди (верхняя граница)
            //если выбрана последняя опция из списка
            if (housingPriceSelectedIndex === housingPriceLength) {
                var housingPriceSelectedValueNext = Number.MAX_SAFE_INTEGER;
            }
            //если выбрана не последняя опция из списка
            else {
                var housingPriceSelectedValueNext = housingPrice.options[housingPriceSelectedIndex + 1].value;
            }

            //Если НЕ выбрано дефолтное состояние фильтра, заходим в условия
            if (housingPriceSelectedIndex !== 0) {

                //для диапазона 1 - 499 (если выбран этот диапазон)
                //если у объекта цена выше, чем выбранная селектом (по верхней границе), то..
                if (object.offer.price >= housingPriceSelectedValueNext) {

                    //..скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }

                }

                //для диапазона 500 - 999 и 1000 - 4999 (если выбран этот диапазон)
                if (object.offer.price < housingPriceSelectedValue || object.offer.price >= housingPriceSelectedValueNext) {

                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }

                }

                //для диапазона выше 5000 (если выбран этот диапазон)
                if (object.offer.price < housingPriceSelectedValue) {

                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }

                }

            }

        });

        //Фильтр по ЧИСЛУ КОМНАТ (скрываем не подходящие метки)
        //Создаем массив отфильтрованных объектов
        var pinIndexOfRooms = window.objects.map(function (object, index) {

            //Определяем индекс поля
            var housingRoomsSelectedIndex = housingRooms.options.selectedIndex;

            //Определяем значение поля
            var housingRoomsSelectedValue = housingRooms.options[housingRoomsSelectedIndex].value;

            //Если не выбрано дефолтное состояние фильтра, заходим в условия
            if (housingRoomsSelectedIndex !== 0) {
                if (object.offer.rooms != housingRoomsSelectedValue) {

                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }

                }
            }

        });

        //Фильтр по ЧИСЛУ ГОСТЕЙ (скрываем не подходящие метки)
        //Создаем массив отфильтрованных объектов
        var pinIndexOfGuests = window.objects.map(function (object, index) {

            //Определяем индекс поля
            var housingGuestsSelectedIndex = housingGuests.options.selectedIndex;

            //Определяем значение поля
            var housingGuestsSelectedValue = housingGuests.options[housingGuestsSelectedIndex].value;

            //Если не выбрано дефолтное состояние фильтра, заходим в условия
            if (housingGuestsSelectedIndex !== 0) {
                if (object.offer.guests != housingGuestsSelectedValue) {

                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }

                }
            }

        });


        //Фильтр по УДОБСТВАМ (скрываем не подходящие метки)
        //Создаем массив отфильтрованных объектов
        var pinIndexOfFeatures = window.objects.map(function (object, index) {

            //Если чекбокс активирован, заходим в условие
            if (filterWifi.checked) {
                //Проверяем, содержит ли объект удобство
                if (object.offer.features.indexOf(filterWifi.value) == -1) {
                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }
                }
            }

            //Если чекбокс активирован, заходим в условие
            if (filterDishwasher.checked) {
                //Проверяем, содержит ли объект удобство
                if (object.offer.features.indexOf(filterDishwasher.value) == -1) {
                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }
                }
            }

            //Если чекбокс активирован, заходим в условие
            if (filterParking.checked) {
                //Проверяем, содержит ли объект удобство
                if (object.offer.features.indexOf(filterParking.value) == -1) {
                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }
                }
            }

            //Если чекбокс активирован, заходим в условие
            if (filterWasher.checked) {
                //Проверяем, содержит ли объект удобство
                if (object.offer.features.indexOf(filterWasher.value) == -1) {
                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }
                }
            }

            //Если чекбокс активирован, заходим в условие
            if (filterElevator.checked) {
                //Проверяем, содержит ли объект удобство
                if (object.offer.features.indexOf(filterElevator.value) == -1) {
                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }
                }
            }

            //Если чекбокс активирован, заходим в условие
            if (filterConditioner.checked) {
                //Проверяем, содержит ли объект удобство
                if (object.offer.features.indexOf(filterConditioner.value) == -1) {
                    //Скрываем метки, не подходящие условию
                    for (var i = 0; i < mapPin.length; i++) {
                        mapPin[(index + 1)].classList.add('hidden');
                    }
                }
            }

        });

    }

})();