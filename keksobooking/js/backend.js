"use strict";

/////============== РАБОТА С СЕРВЕРОМ ==============//////
(function () {

    // ЗАГРУЗКА С СЕРВЕРА ДАННЫХ ЖИЛЫХ ОБЪЕКТОВ
    (function () {

        //откуда принимаем (адрес сервера)
        var URL = 'https://javascript.pages.academy/keksobooking/data';

        //функция загрузки данных с сервера
        window.backend_download = function (onLoad, onError) {

            //создаем объект для HTTP-запроса
            var xhr = new XMLHttpRequest();

            //указываем тип данных
            xhr.responseType = 'json';

            //создаем обработчик успеха
            xhr.addEventListener('load', function () {
                if (xhr.status === 200)
                    onLoad(xhr.response);
                else {
                    onError('Статус ответа ' + xhr.status + xhr.statusText);
                }
            });

            //создаем обработчик ошибки
            xhr.addEventListener('error', function () {
                onError('Произошла ошибка соединения');
            });

            //формируем запрос
            xhr.open('GET', URL);

            //отправляем запрос
            xhr.send();
        };

    })();

})();