/////================== part-14.1 ===================//////

//Окно выбора персонажа
var setup = document.querySelector('.setup');

//Аватарка - октрывает окно выбора персонажа
var setupOpen = document.querySelector('.setup-open');

//Крестик - зактрывает окно выбора персонажа
var setupClose = document.querySelector('.setup-close');

//Инпут - ввод имени персонажа
var setupUserName = document.querySelector('.setup-user-name');

//Функция открытия модального окна выбора персонажа
var openPopup = function () {
    setup.classList.remove('hidden');
};

//Функция закрытия модального окна выбора персонажа
var closePopup = function () {
    setup.classList.add('hidden');
};

//==============

//Функция открытия модального окна мышкой
var OnPopupOpenClick = function (popupOpenLink) {
    popupOpenLink.addEventListener('click', openPopup);
};

//Запускаем функцию открытия модального окна мышкой
OnPopupOpenClick(setupOpen);

//==============

//Функция закрытия модального окна мышкой
var OnPopupCloseClick = function (popupCloseLink) {
    popupCloseLink.addEventListener('click', closePopup);
};

//Запускаем функцию закрытия модального окна мышкой
OnPopupCloseClick(setupClose);

//==============

//Функция открытия модального окна клавиатурой (клавиша Enter)
var OnPopupEnterPress = function (popupOpenLink) {
    popupOpenLink.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {
            openPopup()
        }
    });
};

//Запускаем функцию открытия модального окна клавиатурой (клавиша Enter)
OnPopupEnterPress(setupOpen);

//==============

//Функция закрытия модального окна клавиатурой - нажатием клавиши Esc (если поле не в фокусе)
var OnPopupEscPress = function (inputName) {
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (inputName !== document.activeElement) {
                closePopup()
            }
        }
    });
};

//Запускаем функцию закрытия модального окна клавиатурой (клавиша Esc)
OnPopupEscPress(setupUserName);

//===============

//Закрытие модального окна клавиатурой - нажатием по крестику (клавиша Enter)
setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        closePopup()
    }
});



/////================== part-14.3 ===================//////

//Мантия персонажа
var wizardCoat = document.querySelector('.wizard .wizard-coat');

//Скрытый инпут мантии персонажа
var wizardCoatHidden = document.querySelector('.setup-wizard-appearance input[name=coat-color]');

//Изменение цвета мантии персонажа по нажатию
wizardCoat.addEventListener('click', function () {
    var wizardCoatRandom = arrRandItem(COAT_COLOR);
    wizardCoat.style.fill = wizardCoatRandom;
    wizardCoatHidden.style.fill = wizardCoatRandom;
});



//Цвет глаз персонажа
var wizardEyes = document.querySelector('.wizard .wizard-eyes');

//Скрытый инпут глаз персонажа
var wizardCoatHidden = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');

//Изменение цвета глаз персонажа по нажатию
wizardEyes.addEventListener('click', function () {
    var wizardEyesRandom = arrRandItem(EYES_COLOR);
    wizardEyes.style.fill = wizardEyesRandom;
    wizardCoatHidden.style.fill = wizardEyesRandom;
});



//Цвет фаербола
var fireball = document.querySelector('.setup-fireball-wrap');

//Скрытый инпут фаербола
var fireballHidden = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');

//Изменение цвета фаербола по нажатию
fireball.addEventListener('click', function () {
    var fireballRandom = arrRandItem(FIREBALL_COLOR);
    fireball.style.background = fireballRandom;
    fireballHidden.style.background = fireballRandom;
});

console.log(fireball);

