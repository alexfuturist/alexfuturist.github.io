"use strict";
/////============== ПЕРЕТАСКИВАНИЕ ГЛАВНОЙ МЕТКИ ==============//////

(function () {
    //Главная метка
    var pinHandler = document.querySelector('.map__pin--main');

    //Блок карты
    var map = document.querySelector('.map');
    //Ширина блока карты
    var mapWidth = map.offsetWidth;

    //Обработка события мыши
    pinHandler.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        //Стартовое положение курсора
        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        //Функция смещения ГЛАВНОЙ МЕТКИ
        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            // console.log(window.pageYOffset);

            var mapLeft = map.getBoundingClientRect().left;

            //разница между стартовыми координатами и текущим положением курсора по X
            if (moveEvt.clientX > (mapLeft - 100) & moveEvt.clientX < (mapLeft + mapWidth + 100)) {
                var shiftX = startCoords.x - moveEvt.clientX;
            }

            //разница между стартовыми координатами и текущим положением курсора по Y
            //коммпенсируем скролл по оси Y
            if (moveEvt.clientY > (100 - window.pageYOffset) & moveEvt.clientY < (700 - window.pageYOffset)) {
                var shiftY =  startCoords.y - moveEvt.clientY;
            }

            //разница между стартовыми координатами и текущим положением курсора
            var shift = {
                x: shiftX,
                y: shiftY
            };

            //обновляем стартовые координаты
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            //если смещение ГЛАВНОЙ МЕТКИ в допустимом диапазоне ширины меняем ее координаты
            if ((pinHandler.offsetLeft - shift.x) > -1 & (pinHandler.offsetLeft - shift.x) < mapWidth + 1) {
                pinHandler.style.left = (pinHandler.offsetLeft - shift.x) + 'px';
            }

            //если смещение ГЛАВНОЙ МЕТКИ в допустимом диапазоне высоты меняем ее координаты
            if ((pinHandler.offsetTop - shift.y) > 200 & (pinHandler.offsetTop - shift.y) < 622) {
                pinHandler.style.top = (pinHandler.offsetTop - shift.y) + 'px';
            }
            
            
            inputAddressShow(); //запись адреса ГЛАВНОЙ МЕТКИ в инпут адреса
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            inputAddressShow(); //запись адреса Главной метки в инпут адреса
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
})();