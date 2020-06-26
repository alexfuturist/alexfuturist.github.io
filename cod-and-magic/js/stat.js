var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // х-координата облака
var CLOUD_Y = 10; // У-координата облака

var GAP = 10; // смещение тени вправо // текста над колонками

var CONTENT_X = CLOUD_X + 30; //Начало контента

var TEXT_HEIGHT = 15; // высота текста имени
var TEXT_WIDTH = 50; // ширина текста имени

var BAR_GAP = 50; // расстояние между колонками
var BAR_WIDTH = 40; // ширина колонки
var BAR_HEIGHT = 150; // высота наибольшей колонки

var BAR_X = CONTENT_X + 20; //координата первого столбца по Х
var BAR_Y = 270 - GAP - TEXT_HEIGHT - BAR_HEIGHT; //координата наивысшего столбца по У

var NAME_Y = 270 - GAP; //координата имен по У


// Функция отрисовки облака
var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Функция поиска наибольшего элемента массива
var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (maxElement < arr[i]) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

// Отрисовка облака
window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // ТЕНЬ ОБЛАКА
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgb(255, 255, 255)'); // ОБЛАКО

    //Текст сверху
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgb(0, 0, 0)'; // черный цвет текста
    ctx.fillText('Ура вы победили!', CONTENT_X, 40);
    ctx.fillText('Список результатов:', CONTENT_X, 55);

    //ГИСТОГРАММА
    var maxTime = getMaxElement(times);
    for (var i = 0; i < players.length; i++) {
        var opacitys = [0.5, 0.7, 0.9, 1]; //набор значений непрозрачности синего цвета
        var rand = Math.floor(Math.random() * opacitys.length); //случайный ключ массива
        var opacity = opacitys[rand]; //значение непрозрачности синего цвета конкретного столбика
        console.log(opacity);
        var color_Bar = 'rgba(55, 0, 255, ' + opacity + ')'; // синий рандомный оттенок
        console.log(color_Bar);

        //Значения времени
        ctx.fillStyle = 'black'; // черный цвет текста
        ctx.fillText(Math.floor(times[i]), BAR_X + (BAR_GAP + BAR_WIDTH) * i, (BAR_Y + BAR_HEIGHT - ((times[i] * BAR_HEIGHT) / maxTime)) - GAP);

        //Колонки
        if (players[i] === 'Вы') {
            ctx.fillStyle = 'red'; // синий рандомный оттенок
        } else {
            ctx.fillStyle = color_Bar; // синий рандомный оттенок
        }
        
        //Цвет колонки "Вы":
        ctx.fillRect(BAR_X + (BAR_GAP + BAR_WIDTH) * i, (BAR_Y + BAR_HEIGHT - ((times[i] * BAR_HEIGHT) / maxTime)), BAR_WIDTH, (times[i] * BAR_HEIGHT) / maxTime);

        //Имена
        ctx.fillStyle = 'black'; // черный цвет текста
        ctx.fillText(players[i], BAR_X + (BAR_GAP + BAR_WIDTH) * i, NAME_Y);
    }
};