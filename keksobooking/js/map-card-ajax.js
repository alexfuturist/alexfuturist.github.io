"use strict";
/////================ СОЗДАЕМ НОВЫЕ КАРТОЧКИ (Попапы пинов на карте) ================//////

(function () {

    window.backend_download(function (objects) {

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


            //Получение нового массива фотографий - сортировка случайным образом
            window.photos = objects[i].offer.photos.sort(function (a, b) {
                return 0.5 - Math.random()
            });

            //Проверка
            if (photos.length > 6) {
                var photosLength = 6
            } else {
                photosLength = photos.length
            }

            //Вернем все фотографии из списка
            for (var j = 0; j < photosLength; j++) {

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
            // console.log(mapCardElement);


            //Создаем КАРТОЧКИ (добавляем в разметку страницы)
            document.querySelector('.map').insertBefore(mapCardElement, document.querySelector('.map__filters-container'));
            // var mapCardsShow = function () {
            //     document.querySelector('.map').insertBefore(mapCardElement, document.querySelector('.map__filters-container'));
            // };

        }

        //Cкрытие Всех Карточек объявлений (сразу после загрузки страницы)
        window.mapCardsHidden = function () {
            window.mapCard = document.querySelectorAll('.map__card');
            // console.log(mapCard);

            for (var i = 0; i < mapCard.length; i++) {
                mapCard[i].classList.add('hidden');
            };
        }

        mapCardsHidden();

    })

})();


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//