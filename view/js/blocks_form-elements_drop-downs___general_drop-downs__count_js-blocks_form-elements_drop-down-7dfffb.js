(self["webpackChunk"] = self["webpackChunk"] || []).push([["blocks_form-elements_drop-downs___general_drop-downs__count_js-blocks_form-elements_drop-down-7dfffb"],{

/***/ "./blocks/form-elements/drop-downs/__general/drop-downs__count.js":
/*!************************************************************************!*\
  !*** ./blocks/form-elements/drop-downs/__general/drop-downs__count.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* provided dependency */ var console = __webpack_require__(/*! ../node_modules/console-browserify/index.js */ "../node_modules/console-browserify/index.js");
function init() {
  // Один функционал, который считает counts в dropDowns. DropDowns по факту отличаются лишь способом вывода
  var getAllDropDowns = document.querySelectorAll('.drop-downs__count');
  var length = getAllDropDowns.length;

  for (i = 0; i < length; i++) {
    // Цикл нужен для того, чтобы функционал накинуть на все дропы где идет подсчет
    getAllDropDowns = document.querySelectorAll('.drop-downs__count')[i]; // Присутсвует и в гостях и в комнатах

    var getBtnMinus = getAllDropDowns.querySelectorAll('#drop-downs__minus');
    var getBtnPlus = getAllDropDowns.querySelectorAll('#drop-downs__plus');
    var getValue = getAllDropDowns.querySelectorAll('#drop-downs__value');
    var getHeading = getAllDropDowns.querySelector('.drop-downs__global-text');
    var getShowBlock = getAllDropDowns.querySelector('.drop-downs__block-general');
    var getBtnDrop = getAllDropDowns.querySelector('#drop-downs__input'); // Только в гостях присутсвуют эти кнопки

    var getBtnSend = getAllDropDowns.querySelector('#drop-downs__send');
    var getBtnDelete = getAllDropDowns.querySelectorAll('#drop-downs__delete');
    addEvent(getBtnPlus, getValue, getHeading);
    addEvent(getBtnMinus, getValue, getHeading);
    addEventBtn(getBtnSend, getShowBlock, getValue, getHeading);
    addEventBtn(getBtnDrop, getShowBlock, getValue, getHeading);
    addEventBtn(getBtnDelete, getShowBlock, getValue, getHeading);
  }
}

function addEvent(items, values, heading) {
  var _this = this;

  items.forEach(function (el, index) {
    $(el).click(controllerCount.takeAddEvents.bind(_this, el, index, values, heading));
  });
}

function addEventBtn(button, showBlock, values, blockHeading) {
  $(button).click(controllerCount.takeButtonEvent.bind(this, button, showBlock, values, blockHeading));
}

var controllerCount = {
  takeAddEvents: function takeAddEvents(el, index, values, heading) {
    var isMinus = false;

    if (el.id === "drop-downs__minus") {
      isMinus = true;
    } else {
      viewCount.activeMinus(values[index]);
    }

    var takeOneValue = modelCount.logicCount(values[index], isMinus);
    viewCount.onValue(values[index], takeOneValue);
    var takeAllValue = modelCount.logicAllCount(values);
    viewCount.onHeading(heading, takeAllValue, values); // здесь
  },
  takeButtonEvent: function takeButtonEvent(el, showBlock, values, blockHeading) {
    console.log(el);
    var openClass = "drop-downs__open";

    if (el.id === "drop-downs__send") {
      // Если это кнопка отправить
      viewCount.hide(showBlock, openClass);
    } else if (el.id === "drop-downs__input") {
      // Если это кнопка дропа
      if (showBlock.classList.contains(openClass)) {
        viewCount.hide(showBlock, openClass);
      } else {
        viewCount.show(showBlock, openClass);
      }
    } else {
      // Если это кнопка удалить
      console.log("Удалить");
      modelCount.deleteAllCount(values, blockHeading);
    }
  }
};
var modelCount = {
  logicCount: function logicCount(valueItem, isMinus) {
    if (isMinus == true) {
      if (valueItem.dataset.value > 0) {
        if (valueItem.dataset.value == 1) {
          viewCount.noActieMinus(valueItem);
        }

        return valueItem.dataset.value = Number(valueItem.dataset.value) - 1;
      } else {
        return 0;
      }
    } else {
      return valueItem.dataset.value < 10 ? valueItem.dataset.value = Number(valueItem.dataset.value) + 1 : 10;
    }
  },
  logicAllCount: function logicAllCount(valueAll) {
    var countAll = 0;
    valueAll.forEach(function (el) {
      countAll += Number(el.dataset.value);
    });
    return countAll;
  },
  deleteAllCount: function deleteAllCount(values, blockHeading) {
    for (i = 0; i < values.length; i++) {
      values[i].dataset.value = "0";
      viewCount.onValue(values[i], 0);
      viewCount.noActieMinus(values[i]);
    }

    var DeleteAll = this.logicAllCount(values);
    console.log(DeleteAll);
    viewCount.onHeading(blockHeading, DeleteAll, values); // Здесь 
  }
};
var viewCount = {
  onValue: function onValue(writeBlockValue, value) {
    writeBlockValue.innerHTML = value;
  },
  onHeading: function onHeading(headignBlock, value, values) {
    if (headignBlock.classList.contains("drop-downs__guest-text")) {
      headignBlock.innerHTML = this.rightBetweenGuest(value);
      localStorage.setItem("DataGuest", this.rightBetweenGuest(value));
    } else {
      // Иначе если это другой вывод в heading
      headignBlock.innerHTML = this.rightBetweenGuestRooms(values);
      localStorage.setItem("DataRooms", this.rightBetweenGuestRooms(values));
    }
  },
  rightBetweenGuest: function rightBetweenGuest(value) {
    if (value == 1 || value == 21) {
      return value + " Гость";
    } else if (value >= 2 && value < 5 || value > 21 && value < 25) {
      return value + " Гостя";
    } else if (value >= 5 && value < 21 || value >= 25 && value < 31) {
      return value + " Гостей";
    } else if (value == 0) {
      return "Сколько гостей";
    }
  },
  rightBetweenGuestRooms: function rightBetweenGuestRooms(values) {
    var concatValue = "";
    var name = {
      0: " Спальни",
      1: " Кровати",
      2: "....."
    };
    values.forEach(function (el, index) {
      concatValue += el.dataset.value + name[index] + " ";
    });
    return concatValue;
  },
  show: function show(block, classEl) {
    $(block).addClass(classEl);
  },
  hide: function hide(block, classEl) {
    $(block).removeClass(classEl);
  },
  activeMinus: function activeMinus(itemPlus) {
    var getMinus = itemPlus.parentNode.children[0];
    var classAdd = "drop-downs__minus_active";
    this.show(getMinus, classAdd);
  },
  noActieMinus: function noActieMinus(itemPlus) {
    var getMinus = itemPlus.parentNode.children[0];
    var classAdd = "drop-downs__minus_active";
    this.hide(getMinus, classAdd);
  }
};
init();

/***/ }),

/***/ "./blocks/form-elements/drop-downs/calendar/calendar.js":
/*!**************************************************************!*\
  !*** ./blocks/form-elements/drop-downs/calendar/calendar.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* provided dependency */ var console = __webpack_require__(/*! ../node_modules/console-browserify/index.js */ "../node_modules/console-browserify/index.js");
var date = new Date();
var massiveMonth = ["Январь", "Ферваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function init() {
  // Если на странице будет несколько календарей, то изменять данные придется только в функции init()
  // ----------------------------- Первый тип календаря -------------------------- //
  var getCalendarClick = document.querySelector('.calendar-date-one'); // Блок на который пользователь нажимет для открытия календаря

  var getCalendarShowBlock = document.querySelector('.calendar-one'); // Блок который показывается

  var getDaysBlockOne = document.querySelector('.calednar__days-one'); // Блок в который записываются дни

  var getRightArrowOne = document.querySelector('.calendar__arrow-right-one'); // Стрелка для переключения следующего месяца

  var getLeftArrowOne = document.querySelector('.calendar__arrow-left-one'); // Стрелка для переключения предыдущего месяца

  var getCalendarTitleOne = document.querySelector('.calendar__heading-one'); // Заголовок месяца в календаре

  var getCalendarDeleteOne = document.querySelector('#calendar-delete-one'); // Кнопка очистки календаря

  var getCalendarButtonSendOne = document.querySelector('.calendar__buttons-item-send-one'); // Кнопка подтверждения

  var getCalendarOneTextSecond = document.querySelector('#calendar__text-one-second'); // Текстовое поле заезда

  var getCalendarOneText = document.querySelector('#calendar__text-one'); // Текстовое поле выезда
  // цифра 1 означает тип календаря, отличается только способом вывода

  $(getCalendarClick).click(controllerCalendar.DropCalendar.bind(this, getCalendarShowBlock, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка дропа календаря

  $(getRightArrowOne).click(controllerCalendar.NexMonth.bind(this, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка следующешо месяца

  $(getLeftArrowOne).click(controllerCalendar.PrevMonth.bind(this, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка предыдущего месяца

  $(getCalendarDeleteOne).click(controllerCalendar.Clean.bind(this, getDaysBlockOne, getCalendarTitleOne, getCalendarOneText, getCalendarOneTextSecond, 1)); // Кнопка удаленя 

  $(getCalendarButtonSendOne).click(controllerCalendar.SendArrivalExit.bind(this, getCalendarShowBlock)); // ----------------------------- Второй тип календаря ------------------------- //

  var getCalendarShowBlockFilter = document.querySelector('.calendar-filter');
  var getCalendarButtonSendFilter = document.querySelector('.calendar__buttons-item-send-filter');
  var getCalendarFilterDelete = document.querySelector('#calendar-delete-filter');
  var getDaysBlockFilter = document.querySelector('.calednar__days-filter');
  var getRightArrowFilter = document.querySelector('.calendar__arrow-right-filter');
  var getLeftArrowFilter = document.querySelector('.calendar__arrow-left-filter');
  var getCalendarTitleFilter = document.querySelector('.calendar__heading-filter');
  var getCalendarBlockFooter = document.querySelector('.calendar__footer-filter');
  var getCalendarClickFilter = document.querySelector('#calendar-filter-date');
  var getCalendarFilterText = document.querySelector('#calendar-filter-text');
  $(getCalendarClickFilter).click(controllerCalendar.DropCalendar.bind(this, getCalendarShowBlockFilter, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2)); // null передается потому у второго календаря только одно текстовое поле

  $(getRightArrowFilter).click(controllerCalendar.NexMonth.bind(this, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2));
  $(getLeftArrowFilter).click(controllerCalendar.PrevMonth.bind(this, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2));
  $(getCalendarFilterDelete).click(controllerCalendar.Clean.bind(this, getDaysBlockFilter, getCalendarTitleFilter, getCalendarFilterText, null, 2));
  $(getCalendarButtonSendFilter).click(controllerCalendar.SendArrivalExit.bind(this, getCalendarShowBlockFilter));
}

var viewCalendar = {
  // ---------------------- VIEW ---------------------------------------
  getAllItems: " ",
  displayMain: function displayMain(item, getDaysBlockOne) {
    this.getAllItems += item;
    getDaysBlockOne.innerHTML = this.getAllItems;
  },
  displayTitle: function displayTitle(headingMonthCalendar, item) {
    headingMonthCalendar.innerHTML = item + " " + date.getFullYear();
    localStorage.setItem("dataTitleCalendar", item + " " + date.getFullYear());
  },
  showCalendar: function showCalendar(block) {
    $(block).show();
  },
  hideCalendar: function hideCalendar(block) {
    $(block).hide();
  },
  displayArrivalExit: function displayArrivalExit(arrivalNumber, exitNumber, allDaysItem, firstDays, firstTextInput, secondTextInput, typeCalendar) {
    if (exitNumber - arrivalNumber < 0) {
      var changeNumber = exitNumber;
      exitNumber = arrivalNumber;
      arrivalNumber = changeNumber;
    }

    allDaysItem[arrivalNumber + firstDays - 2].setAttribute('class', 'calednar__days-item calednar__days-item_focus-left');
    allDaysItem[exitNumber + firstDays - 2].setAttribute('class', 'calednar__days-item calednar__days-item_focus-right');

    for (i = arrivalNumber + firstDays - 1; i < exitNumber + firstDays - 2; i++) {
      allDaysItem[i].setAttribute('class', 'calednar__days-item calednar__days-item_light');
    }

    this.displayTextArrivalExit(firstTextInput, secondTextInput, arrivalNumber, exitNumber, typeCalendar);
  },
  displayTextArrivalExit: function displayTextArrivalExit(FirstBlockText, SecondBlockText, arrivalNumber, exitNumber, typeCalendar) {
    if (typeCalendar === 1) {
      var nullingMonth = date.getMonth() < 9 ? "0" : "";
      var nullingDayArrival = arrivalNumber < 9 ? "0" : "";
      var nullingDayExit = exitNumber < 9 ? "0" : "";
      var setArrival = nullingDayArrival + arrivalNumber + "." + nullingMonth + (date.getMonth() + 1) + "." + date.getFullYear();
      var setExit = nullingDayExit + exitNumber + "." + nullingMonth + (date.getMonth() + 1) + "." + date.getFullYear();
      FirstBlockText.innerHTML = setArrival;
      SecondBlockText.innerHTML = setExit;
      localStorage.setItem("DataArrival", setArrival);
      localStorage.setItem("DataExit", setExit);
    } else if (typeCalendar === 2) {
      var setArrivalExit = arrivalNumber + " " + massiveMonth[date.getMonth()].substr(0, 3) + " - " + exitNumber + " " + massiveMonth[date.getMonth()].substr(0, 3);
      FirstBlockText.innerHTML = setArrivalExit;

      var _nullingMonth = date.getMonth() < 9 ? "0" : "";

      var _nullingDayArrival = arrivalNumber < 9 ? "0" : "";

      var _nullingDayExit = exitNumber < 9 ? "0" : "";

      var _setArrival = _nullingDayArrival + arrivalNumber + "." + _nullingMonth + (date.getMonth() + 1) + "." + date.getFullYear();

      var _setExit = _nullingDayExit + exitNumber + "." + _nullingMonth + (date.getMonth() + 1) + "." + date.getFullYear();

      localStorage.setItem("DataArrival", _setArrival);
      localStorage.setItem("DataExit", _setExit);
    }
  }
}; // ---------------------- END VIEW ---------------------------------------

var modelCalendar = {
  // ---------------------- MODEL ---------------------------------------
  renderCalendar: function renderCalendar(writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar) {
    date.setDate(1);
    var DaysNowMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // Возрващаем количество дней текущего месяца

    var WeekDayNextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Возвращает день недели, с которого начинается следующий месяц

    var nextDays = 7 - WeekDayNextMonth; // Количество дней до конца недели

    var firstDayIndex = date.getDay() == 0 ? 7 : date.getDay(); //Вс начинается с нуля // День недели с которого начинается текущий месяц 

    viewCalendar.displayTitle(headingMonthCalendar, massiveMonth[date.getMonth()]); // Отрисовываем заголовок календаря

    this.renderMainCaledar(firstDayIndex - 1, writeBlock, this.startDaysMonth); // Рендерим последние дни прошлого месяца и отрисовывваем их

    this.renderMainCaledar(DaysNowMonth, writeBlock, this.nowDaysMonth); // рендерим дни текущего месяца и отрисовываем их

    this.renderMainCaledar(nextDays, writeBlock, this.nextDaysMonth); // рендерим дни следующего месяца и отрисовываем их

    viewCalendar.getAllItems = " "; // В представлении обнуляем глобальную переменную

    this.renderEventDays(firstDayIndex, nextDays, '.calednar__days-item', writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar); // Рендерим два числа при 
  },
  renderMainCaledar: function renderMainCaledar(index, blockWrite, callback) {
    var days = " ";

    for (i = 1; i <= index; i++) {
      ;
      days += callback(i, index);
    }

    viewCalendar.displayMain(days, blockWrite);
  },
  startDaysMonth: function startDaysMonth(i, index) {
    var DayLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // Возрвашает последнее число предыдущего месяца

    return '<div class = "calednar__days-item calendar__prev-item">' + (DayLastMonth - index + i) + '</div>';
  },
  nowDaysMonth: function nowDaysMonth(i) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      // Сегодняшний день // Если i = текущему дню и установленный месяц = текущему месяцу
      return '<div class = "calednar__days-item calendar__days-today">' + i + '</div>';
    } else {
      return '<div class = "calednar__days-item">' + i + '</div>'; // Заполняем дни текущего месяца
    }
  },
  nextDaysMonth: function nextDaysMonth(i) {
    return '<div class = "calednar__days-item calendar__prev-item">' + i + '</div>'; // Заполняем дни следующего месяца
  },
  renderEventDays: function renderEventDays(firstDays, nextDays, NameItem, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar) {
    // Устанавливаем события на дни текущего месяца
    var calendarDaysItem = writeBlock.querySelectorAll(NameItem);

    for (i = firstDays - 1; i < calendarDaysItem.length - nextDays; i++) {
      $(calendarDaysItem[i]).click(this.takeTwoNumber.bind(this, i + 1, calendarDaysItem, firstDays, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar));
    }
  },
  takeFirstDate: true,
  firstNumber: 0,
  secondNumber: 0,
  takeTwoNumber: function takeTwoNumber(item, allDaysItem, firstDays, writeBlock, headingMonthCalendar, firstTextInput, secondTextInput, typeCalendar) {
    // Определяем два числа на которые нажал пользователь
    if (this.takeFirstDate == true) {
      console.log("Первая функция");
      this.firstNumber = item - firstDays + 1;
      this.takeFirstDate = false;
      console.log(this.firstNumber + firstDays);
      allDaysItem[this.firstNumber + firstDays - 2].setAttribute('class', 'calednar__days-item calednar__days-item_focus');
    } else {
      console.log("Вторая функция"); // Нужно для того, чтобы при повторном нажатии рендерился календарь снова

      this.secondNumber = item - firstDays + 1;
      viewCalendar.displayArrivalExit(this.firstNumber, this.secondNumber, allDaysItem, firstDays, firstTextInput, secondTextInput, typeCalendar); // Отображаем для пользователя промежуток этих чисел

      this.takeFirstDate = true;
      this.firstNumber = 0;
      this.secondNumber = 0;
    }
  }
}; // ---------------------- END MODEL ---------------------------------------

var controllerCalendar = {
  // ---------------------- CONTROLER ---------------------------------------
  firstClick: true,
  DropCalendar: function DropCalendar(blockShow, blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
    if (this.firstClick == false) {
      viewCalendar.hideCalendar(blockShow);
      this.firstClick = true;
    } else {
      modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
      viewCalendar.showCalendar(blockShow);
      this.firstClick = false;
    }
  },
  NexMonth: function NexMonth(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
    date.setMonth(date.getMonth() + 1);
    modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
  },
  PrevMonth: function PrevMonth(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
    date.setMonth(date.getMonth() - 1);
    modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
  },
  Clean: function Clean(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar) {
    modelCalendar.renderCalendar(blockWrite, headingMonthCalendar, firstInputText, SecondInputText, typeCalendar);
  },
  SendArrivalExit: function SendArrivalExit(blockShow) {
    viewCalendar.hideCalendar(blockShow);
    this.firstClick = true;
  }
}; // ---------------------- END CONTROLER ---------------------------------------

window.onload = init();

/***/ }),

/***/ "./blocks/header/header.js":
/*!*********************************!*\
  !*** ./blocks/header/header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");

var getBurgerMenu = document.querySelector('.burger__menu');
var getMenu = document.querySelector('.header__menu');
var firstClick = false;

function hideMenu() {
  if (firstClick == true) {
    getBurgerMenu.classList.remove("animation__burger");
    $(getMenu).hide();
    firstClick = false;
  } else {
    getBurgerMenu.classList.add("animation__burger");
    $(getMenu).show();
    getMenu.style.display = "flex";
    firstClick = true;
  }
}

$(getBurgerMenu).click(hideMenu.bind(undefined));

/***/ }),

/***/ "?16ca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=blocks_form-elements_drop-downs___general_drop-downs__count_js-blocks_form-elements_drop-down-7dfffb.js.map