"use strict";
/////================ МОДУЛЬ Добавления аватарки пользователя ================//////

(function () {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var avatarChooser = document.querySelector('.upload input[type=file]');
    var avatarPreview = document.querySelector('.notice__preview img');

    //Событие изменения состояния
    avatarChooser.addEventListener('change', function () {
        //Коллекция всех файлов загруженных в поле
        var file = avatarChooser.files[0];

        //Преобразуем имя в нижний регистр
        var fileName = file.name.toLowerCase();

        //Проверка совпадения разширения
        var matches = FILE_TYPES.some(function (it) {
            return fileName.endsWith(it);
        });

        //Если разширение совпадает
        if (matches) {
            //Создаем объект который читает наш файл
            var reader = new FileReader();

            //При загрузке
            reader.addEventListener('load', function () {
                //Подставляем исходный код картинки в атрибут "src"
                avatarPreview.src = reader.result;
            });

            //Читаем содержимое файла с помощью асинхронного метода .readAsDataURL
            reader.readAsDataURL(file);
        }
    });

})();


/////================ МОДУЛЬ Добавления фотографий жилья ================//////

(function () {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var photoContainer = document.querySelector('.form__photo-container');
    var photoChooser = document.querySelector('#images');
    var photoPreviewBlock = document.querySelector('.form__photo');

    //Событие изменения состояния
    photoChooser.addEventListener('change', function () {
        //Коллекция всех файлов загруженных в поле
        var file = photoChooser.files[0];

        //Преобразуем имя в нижний регистр
        var fileName = file.name.toLowerCase();

        //Проверка совпадения разширения
        var matches = FILE_TYPES.some(function (it) {
            return fileName.endsWith(it);
        });

        //Если разширение совпадает
        if (matches) {
            //Создаем объект который читает наш файл
            var reader = new FileReader();

            //При загрузке
            reader.addEventListener('load', function () {
                //Создаем пустое изображение
                var img = document.createElement('img');
                //Подставляем исходный код картинки в атрибут "src"
                img.src = reader.result;

                img.className = 'form__photo';
                photoContainer.insertBefore(img, photoPreviewBlock);
            });

            //Читаем содержимое файла с помощью асинхронного метода .readAsDataURL
            reader.readAsDataURL(file);
        }
    });

    // window.upload = {
    //     preview: preview,
    //     photoContainer: photoContainer
    // };

})();