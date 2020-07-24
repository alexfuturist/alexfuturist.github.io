"use strict";
/////================ ОТПРАВКА ДАННЫХ ФОРМЫ ================//////


(function () {

    // ОТПРАВКА НА СЕРВЕР ДАННЫХ О СОЗДАННОМ ОБЪЯВЛЕНИИ

    //куда отправляем (адрес сервера)
    var URL = 'https://js.dump.academy/keksobooking';

    //функция отправки данных на сервер
    window.backend_upload = function (data, onLoad, onError) {

        //создаем объект для HTTP-запроса
        var xhr = new XMLHttpRequest();

        //указываем тип данных
        xhr.responseType = 'json';

        //создаем обработчик
        xhr.addEventListener('load', function () {
            onLoad(xhr.response);
        });

        //формируем запрос
        xhr.open('POST', URL);

        //отправляем запрос
        xhr.send(data);
    };



    // ОТПРАВКА ФОРМЫ НА СЕРВАК
    //находим форму
    var form = document.querySelector('.notice__form');

    //Получаем все данные из формы
    var formData = new FormData(form);

    // Слушатель события отправки формы
    form.addEventListener('submit', function (evt) {
        //отмена стандартной отправки формы
        evt.preventDefault();
        //применяем функцию отправки данных на сервер
        window.backend_upload(formData, function (responce) {
            formReset();
        })
    });

})();


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//