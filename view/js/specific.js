/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/form-elements/buttons/like/like.js":
/*!***************************************************!*\
  !*** ./blocks/form-elements/buttons/like/like.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
var getLikeAll = document.querySelectorAll('.like__input');
var getLikeTextAll = document.querySelectorAll('.like__text');

function createLike(likeDoomText) {
  // Оптимизация кода для подсчетов лайков
  var firstClick = true;
  var count = likeDoomText.innerHTML;
  return function countLike() {
    if (firstClick == true) {
      count++;
      likeDoomText.innerHTML = count;
      firstClick = false;
    } else {
      count--;
      likeDoomText.innerHTML = count;
      firstClick = true;
    }
  };
}

for (i = 0; i < getLikeAll.length; i++) {
  var like = createLike(getLikeTextAll[i]);
  $(getLikeAll[i]).click(like.bind(this));
}

/***/ }),

/***/ "./pages/specific/specific.js":
/*!************************************!*\
  !*** ./pages/specific/specific.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _specific_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specific.scss */ "./pages/specific/specific.scss");
/* harmony import */ var _specific_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specific.pug */ "./pages/specific/specific.pug");
/* harmony import */ var _specific_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_specific_pug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _specificLogic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specificLogic.js */ "./pages/specific/specificLogic.js");
/* harmony import */ var _specificLogic_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_specificLogic_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/header/header.js */ "./blocks/header/header.js");
/* harmony import */ var _blocks_form_elements_drop_downs_general_drop_downs_count_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/form-elements/drop-downs/__general/drop-downs__count.js */ "./blocks/form-elements/drop-downs/__general/drop-downs__count.js");
/* harmony import */ var _blocks_form_elements_drop_downs_general_drop_downs_count_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_form_elements_drop_downs_general_drop_downs_count_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_form_elements_drop_downs_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/form-elements/drop-downs/calendar/calendar.js */ "./blocks/form-elements/drop-downs/calendar/calendar.js");
/* harmony import */ var _blocks_form_elements_drop_downs_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_form_elements_drop_downs_calendar_calendar_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_form_elements_buttons_like_like_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/form-elements/buttons/like/like.js */ "./blocks/form-elements/buttons/like/like.js");
/* harmony import */ var _blocks_form_elements_buttons_like_like_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_form_elements_buttons_like_like_js__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./pages/specific/specificLogic.js":
/*!*****************************************!*\
  !*** ./pages/specific/specificLogic.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var console = __webpack_require__(/*! ../node_modules/console-browserify/index.js */ "../node_modules/console-browserify/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
var date = new Date();

function init() {
  var sliceStrokeUrl = window.location.href.split("?");
  console.log(decodeURIComponent(sliceStrokeUrl));
  var numberRoom = document.querySelectorAll('.appart__header-left-item')[1];
  var pricePerRoom = document.querySelectorAll('.appart__header-right-item')[0];
  var getCalendarTextOne = document.querySelector('#calendar__text-one');
  var getCalendarTextSecond = document.querySelector('#calendar__text-one-second');
  var getCountDaysText = document.querySelectorAll('.appart__main-text')[0];
  var getResultDaysText = document.querySelectorAll('.appart__main-text')[1];
  var getTootalText = document.querySelectorAll('.appart__footer-total')[1];
  controllerForm.Room(sliceStrokeUrl, numberRoom, pricePerRoom);
  controllerForm.Date(sliceStrokeUrl, getCalendarTextOne, getCalendarTextSecond, pricePerRoom, getCountDaysText, getResultDaysText, getTootalText);
  var getGuestText = document.querySelector('.drop-downs__guest-text');
  controllerForm.Guest(sliceStrokeUrl, getGuestText);
  var getBtnSend = document.querySelector('.calendar__buttons-item-send-one');
  $(getBtnSend).click(controllerForm.UpdateDate.bind(this, getCalendarTextOne, getCalendarTextSecond, pricePerRoom, getCountDaysText, getResultDaysText, getTootalText));
  var getClickBlockCalendarOne = document.querySelector('.calendar-date-one');
  $(getClickBlockCalendarOne).click(controllerForm.UpdateDate.bind(this, getCalendarTextOne, getCalendarTextSecond, pricePerRoom, getCountDaysText, getResultDaysText, getTootalText));
}

var controllerForm = {
  Room: function Room(url, numberRoomDom, priceRoomDom) {
    var rightNumber = localStorage.getItem("DataNumberRoom");
    var isLux = localStorage.getItem("isLux") == 0 ? null : "<div class = \"room__info-item-left\"> \u041B\u044E\u043A\u0441 </div>";
    var priceRoom = localStorage.getItem("DataPriceRoom");
    viewForm.displayRoom(rightNumber, priceRoom, numberRoomDom, priceRoomDom);
  },
  Date: function Date(url, firstDateText, secondDateText, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {
    var getDataDate = localStorage.getItem("DataArrival") + localStorage.getItem("DataExit");
    console.log(getDataDate);
    var dateFirts = localStorage.getItem("DataArrival");
    var dateDaysFirst = dateFirts.substr(0, 2);
    var dateMonthFirst = dateFirts.substr(3, 2);
    var dateSecond = localStorage.getItem("DataExit");
    var dateDaysSecond = dateSecond.substr(0, 2);
    var dateMonthSecond = dateSecond.substr(3, 2);
    console.log(dateMonthFirst);
    viewForm.displayDate(firstDateText, dateDaysFirst, dateMonthFirst, secondDateText, dateDaysSecond, dateMonthSecond);
    modelForm.count(dateDaysFirst, dateDaysSecond, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom);
  },
  Guest: function Guest(url, textblock) {
    var countGuset = localStorage.getItem("DataGuest") == null ? "Сколько гостей" : localStorage.getItem("DataGuest");
    viewForm.displayGuest(countGuset, textblock);
  },
  UpdateDate: function UpdateDate(firstDateDom, SecondDateDoom, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {
    firstDate = firstDateDom.innerHTML.substring(0, 2);
    secondDate = SecondDateDoom.innerHTML.substring(0, 2);
    modelForm.count(firstDate, secondDate, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom);
  }
};
var modelForm = {
  count: function count(firstDate, SecondDate, priceRoomDoom, CountDaysTextDom, ResultDaysTextDom, TootalTextDom) {
    var resultDays = Number(priceRoomDoom.innerHTML.split("₽")[0].replace(/\s+/g, '')) * Number(SecondDate - firstDate);
    var countDays = String(priceRoomDoom.innerHTML) + " x " + String(SecondDate - firstDate);
    console.log();
    viewForm.displayCount(CountDaysTextDom, countDays, resultDays, ResultDaysTextDom, TootalTextDom);
  }
};
var viewForm = {
  displayRoom: function displayRoom(number, price, numberRoomDom, priceRoomDom) {
    numberRoomDom.innerHTML = number;
    priceRoomDom.innerHTML = price[0] + price.substring(1, price.length);
  },
  displayDate: function displayDate(firstDateText, dateDaysFirst, dateMonthFirst, secondDateText, dateDaysSecond, dateMonthSecond) {
    var masiveMonth = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
    firstDateText.innerHTML = dateDaysFirst + "." + dateMonthFirst + "." + date.getFullYear();
    secondDateText.innerHTML = dateDaysSecond + "." + dateMonthSecond + "." + date.getFullYear();
  },
  displayGuest: function displayGuest(item, textBlock) {
    textBlock.innerHTML = item;
  },
  displayCount: function displayCount(textBlockCount, countDays, resultDays, textBlockResult, totalBlock) {
    textBlockCount.innerHTML = countDays + " " + "cуток";
    textBlockResult.innerHTML = resultDays + "₽";
    totalBlock.innerHTML = resultDays + "₽";
  }
};
window.onload = init();

/***/ }),

/***/ "./pages/specific/specific.scss":
/*!**************************************!*\
  !*** ./pages/specific/specific.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/form-elements/bullet-list/bullet-list.pug":
/*!**********************************************************!*\
  !*** ./blocks/form-elements/bullet-list/bullet-list.pug ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"bullet-list\"\u003E\n  \u003Ch3 class=\"bullet-list__title\"\u003E\u003C\u002Fh3\u003E\n  \u003Cul class=\"bullet-list__list\"\u003E\n    \u003Cli class=\"bullet-list__item\"\u003EНельзя с питомцами\u003C\u002Fli\u003E\n    \u003Cli class=\"bullet-list__item\"\u003EБез вечеринок и мероприятий\u003C\u002Fli\u003E\n    \u003Cli class=\"bullet-list__item\"\u003EВремя прибытия — после 13:00, а выезд до 12:00\u003C\u002Fli\u003E\n  \u003C\u002Ful\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./blocks/form-elements/comfort/comfort.pug":
/*!**************************************************!*\
  !*** ./blocks/form-elements/comfort/comfort.pug ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\n\u003Cdiv class=\"comfort\"\u003E\n  \u003Cfigure class=\"comfort__row\"\u003E\n    \u003Cdiv class=\"comfort__image\"\u003E\u003Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M26.1875 29.0938C24.375 30.3438 22.3125 30.9688 20 30.9688C17.6875 30.9688 15.5938 30.3438 13.7188 29.0938C11.9062 27.7812 10.5938 26.0938 9.78125 24.0312H30.2188C29.4062 26.0938 28.0625 27.7812 26.1875 29.0938ZM15.0312 17.1875C14.4688 17.75 13.7812 18.0312 12.9688 18.0312C12.1562 18.0312 11.4375 17.75 10.8125 17.1875C10.25 16.5625 9.96875 15.8438 9.96875 15.0312C9.96875 14.2188 10.25 13.5312 10.8125 12.9688C11.4375 12.3438 12.1562 12.0312 12.9688 12.0312C13.7812 12.0312 14.4688 12.3438 15.0312 12.9688C15.6562 13.5312 15.9688 14.2188 15.9688 15.0312C15.9688 15.8438 15.6562 16.5625 15.0312 17.1875ZM29.0938 17.1875C28.5312 17.75 27.8438 18.0312 27.0312 18.0312C26.2188 18.0312 25.5 17.75 24.875 17.1875C24.3125 16.5625 24.0312 15.8438 24.0312 15.0312C24.0312 14.2188 24.3125 13.5312 24.875 12.9688C25.5 12.3438 26.2188 12.0312 27.0312 12.0312C27.8438 12.0312 28.5312 12.3438 29.0938 12.9688C29.7188 13.5312 30.0312 14.2188 30.0312 15.0312C30.0312 15.8438 29.7188 16.5625 29.0938 17.1875ZM8.65625 31.3438C11.8438 34.4688 15.625 36.0312 20 36.0312C24.375 36.0312 28.125 34.4688 31.25 31.3438C34.4375 28.1562 36.0312 24.375 36.0312 20C36.0312 15.625 34.4375 11.875 31.25 8.75C28.125 5.5625 24.375 3.96875 20 3.96875C15.625 3.96875 11.8438 5.5625 8.65625 8.75C5.53125 11.875 3.96875 15.625 3.96875 20C3.96875 24.375 5.53125 28.1562 8.65625 31.3438ZM5.84375 5.9375C9.78125 2 14.5 0.03125 20 0.03125C25.5 0.03125 30.1875 2 34.0625 5.9375C38 9.8125 39.9688 14.5 39.9688 20C39.9688 25.5 38 30.2188 34.0625 34.1562C30.1875 38.0312 25.5 39.9688 20 39.9688C14.5 39.9688 9.78125 38.0312 5.84375 34.1562C1.96875 30.2188 0.03125 25.5 0.03125 20C0.03125 14.5 1.96875 9.8125 5.84375 5.9375Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"20\" y1=\"-4\" x2=\"20\" y2=\"44\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003C\u002Fdiv\u003E\n    \u003Cfigcaption class=\"comfrot__block-text\"\u003E\n      \u003Ch3 class=\"comfort__heading\"\u003EКомфорт\u003C\u002Fh3\u003E\n      \u003Cp class=\"comfort__text\"\u003EШумопоглощающие стены\u003C\u002Fp\u003E\n    \u003C\u002Ffigcaption\u003E\n  \u003C\u002Ffigure\u003E\n  \u003Cfigure class=\"comfort__row\"\u003E\n    \u003Cdiv class=\"comfort__image\"\u003E\u003Csvg width=\"36\" height=\"38\" viewBox=\"0 0 36 38\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M31.9688 26V21.9688H28.0312V26H31.9688ZM31.9688 33.9688V30.0312H28.0312V33.9688H31.9688ZM19.9688 9.96875V6.03125H16.0312V9.96875H19.9688ZM19.9688 18.0312V14H16.0312V18.0312H19.9688ZM19.9688 26V21.9688H16.0312V26H19.9688ZM19.9688 33.9688V30.0312H16.0312V33.9688H19.9688ZM7.96875 18.0312V14H4.03125V18.0312H7.96875ZM7.96875 26V21.9688H4.03125V26H7.96875ZM7.96875 33.9688V30.0312H4.03125V33.9688H7.96875ZM24 18.0312H36V38H0V9.96875H12V6.03125L18 0.03125L24 6.03125V18.0312Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"18\" y1=\"-4\" x2=\"18\" y2=\"44\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003C\u002Fdiv\u003E\n    \u003Cfigcaption class=\"comfrot__block-text\"\u003E\n      \u003Ch3 class=\"comfort__heading\"\u003EУдобство\u003C\u002Fh3\u003E\n      \u003Cp class=\"comfort__text\"\u003EОкно в каждой из спален\u003C\u002Fp\u003E\n    \u003C\u002Ffigcaption\u003E\n  \u003C\u002Ffigure\u003E\n  \u003Cfigure class=\"comfort__row\"\u003E\n    \u003Cdiv class=\"comfort__image\"\u003E\u003Csvg width=\"34\" height=\"43\" viewBox=\"0 0 34 43\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M16.4375 36.9688C19.125 36.9688 21.375 36.0625 23.1875 34.25C25.0625 32.375 26 30.0938 26 27.4062C26 24.6562 25.625 21.9688 24.875 19.3438C22.9375 21.9062 19.8438 23.625 15.5938 24.5C11.8438 25.3125 9.96875 27.375 9.96875 30.6875C9.96875 32.4375 10.5938 33.9375 11.8438 35.1875C13.0938 36.375 14.625 36.9688 16.4375 36.9688ZM20 0.3125C24 3.5625 27.1562 7.53125 29.4688 12.2188C31.8438 16.8438 33.0312 21.7812 33.0312 27.0312C33.0312 31.4062 31.4688 35.1562 28.3438 38.2812C25.2188 41.4062 21.4375 42.9688 17 42.9688C12.5625 42.9688 8.78125 41.4062 5.65625 38.2812C2.53125 35.1562 0.96875 31.4062 0.96875 27.0312C0.96875 20.2812 3.125 14.3438 7.4375 9.21875V9.96875C7.4375 12.0312 8.125 13.7813 9.5 15.2188C10.875 16.6562 12.5938 17.375 14.6562 17.375C16.6562 17.375 18.2812 16.6875 19.5312 15.3125C20.8438 13.875 21.5 12.0938 21.5 9.96875C21.5 8.71875 21.375 7.28125 21.125 5.65625C20.875 4.03125 20.625 2.75 20.375 1.8125L20 0.3125Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"17\" y1=\"-1\" x2=\"17\" y2=\"47\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\n    \u003C\u002Fdiv\u003E\n    \u003Cfigcaption class=\"comfrot__block-text\"\u003E\n      \u003Ch3 class=\"comfort__heading\"\u003EУют\u003C\u002Fh3\u003E\n      \u003Cp class=\"comfort__text\"\u003EНомер оснащён камином\u003C\u002Fp\u003E\n    \u003C\u002Ffigcaption\u003E\n  \u003C\u002Ffigure\u003E\n\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./pages/specific/specific.pug":
/*!*************************************!*\
  !*** ./pages/specific/specific.pug ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (pug_indent) {
      var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"en\"\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\n    \u003Ctitle\u003EDocument\u003C\u002Ftitle\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E ";
pug_mixins["header"] = pug_interp = function(second){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (second == "second") {
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__wrapper\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E\u003Csvg width=\"106\" height=\"40\" viewBox=\"0 0 106 40\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M62.335 13.368C62.5567 13.368 62.7375 13.4438 62.8775 13.5955C63.0292 13.7355 63.105 13.9163 63.105 14.138C63.105 14.348 63.0292 14.5288 62.8775 14.6805C62.7375 14.8322 62.5567 14.908 62.335 14.908H58.5725V25.408C58.5725 25.6297 58.4967 25.8163 58.345 25.968C58.205 26.108 58.0242 26.178 57.8025 26.178C57.5925 26.178 57.4117 26.108 57.26 25.968C57.1083 25.8163 57.0325 25.6297 57.0325 25.408V14.908H53.27C53.06 14.908 52.8792 14.8322 52.7275 14.6805C52.5758 14.5288 52.5 14.348 52.5 14.138C52.5 13.9163 52.5758 13.7355 52.7275 13.5955C52.8792 13.4438 53.06 13.368 53.27 13.368H62.335Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M68.9076 13.368C69.7943 13.368 70.6285 13.5372 71.4101 13.8755C72.2034 14.2138 72.8918 14.6747 73.4751 15.258C74.0701 15.8413 74.5368 16.5297 74.8751 17.323C75.2134 18.1047 75.3826 18.9388 75.3826 19.8255C75.3826 20.8638 75.1609 21.8205 74.7176 22.6955C74.2743 23.5705 73.6735 24.3055 72.9151 24.9005C72.9151 24.9005 72.9035 24.9122 72.8801 24.9355C72.3201 25.3555 71.7076 25.688 71.0426 25.933C70.3776 26.1663 69.6659 26.283 68.9076 26.283C68.0209 26.283 67.1868 26.1138 66.4051 25.7755C65.6234 25.4372 64.9351 24.9763 64.3401 24.393C63.7568 23.8097 63.2959 23.1272 62.9576 22.3455C62.6193 21.5638 62.4501 20.7238 62.4501 19.8255C62.4501 18.8455 62.6484 17.9413 63.0451 17.113C63.4418 16.273 63.9843 15.5555 64.6726 14.9605L64.7426 14.8905C64.7543 14.8905 64.7718 14.8788 64.7951 14.8555C65.3551 14.3888 65.9851 14.0272 66.6851 13.7705C67.3851 13.5022 68.1259 13.368 68.9076 13.368ZM68.9076 24.743C69.3509 24.743 69.771 24.6905 70.1676 24.5855C70.576 24.4688 70.9609 24.3113 71.3226 24.113L65.1801 16.6405C64.8068 17.0722 64.5151 17.5622 64.3051 18.1105C64.0951 18.6472 63.9901 19.2188 63.9901 19.8255C63.9901 20.5022 64.1185 21.138 64.3751 21.733C64.6318 22.328 64.9818 22.853 65.4251 23.308C65.8801 23.7513 66.4051 24.1013 67.0001 24.358C67.5951 24.6147 68.2309 24.743 68.9076 24.743ZM72.5301 23.1505C72.9384 22.7072 73.2535 22.2055 73.4751 21.6455C73.7085 21.0738 73.8251 20.4672 73.8251 19.8255C73.8251 19.1488 73.6968 18.513 73.4401 17.918C73.1834 17.323 72.8276 16.8038 72.3726 16.3605C71.9293 15.9055 71.4101 15.5497 70.8151 15.293C70.2201 15.0363 69.5843 14.908 68.9076 14.908C68.4409 14.908 67.9918 14.9722 67.5601 15.1005C67.1284 15.2172 66.7259 15.3922 66.3526 15.6255L72.5301 23.1505Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M82.351 20.6305C82.1177 20.6305 81.9194 20.5372 81.756 20.3505L77.2585 14.5755C77.1302 14.4122 77.0777 14.2313 77.101 14.033C77.1244 13.823 77.2177 13.6538 77.381 13.5255C77.5444 13.3972 77.7252 13.3505 77.9235 13.3855C78.1335 13.4088 78.3027 13.5022 78.431 13.6655L82.351 18.6705L86.1835 13.753C86.3119 13.5897 86.4752 13.4963 86.6735 13.473C86.8835 13.4497 87.0702 13.5022 87.2335 13.6305C87.3969 13.7588 87.4902 13.928 87.5135 14.138C87.5369 14.3363 87.4844 14.5172 87.356 14.6805L82.946 20.3505C82.7944 20.5372 82.596 20.6305 82.351 20.6305ZM87.2685 26.2655C87.2219 26.2655 87.146 26.2597 87.041 26.248C86.9477 26.2363 86.8369 26.2072 86.7085 26.1605C86.5802 26.1022 86.4402 26.0263 86.2885 25.933C86.1485 25.828 86.0085 25.688 85.8685 25.513L82.351 20.9805L78.5185 25.9155C78.3902 26.0788 78.221 26.1722 78.011 26.1955C77.8127 26.2188 77.6319 26.1663 77.4685 26.038C77.3052 25.9097 77.2119 25.7463 77.1885 25.548C77.1652 25.338 77.2177 25.1513 77.346 24.988L81.756 19.318C81.896 19.1313 82.0885 19.038 82.3335 19.038C82.5902 19.038 82.7944 19.1313 82.946 19.318L87.041 24.568C87.0994 24.6497 87.1519 24.7022 87.1985 24.7255C87.2452 24.7488 87.2802 24.7663 87.3035 24.778C87.5019 24.778 87.6652 24.848 87.7935 24.988C87.9335 25.1163 88.0094 25.2797 88.021 25.478C88.0444 25.688 87.986 25.8688 87.846 26.0205C87.706 26.1722 87.531 26.2538 87.321 26.2655H87.2685Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M91.7343 26.2655C91.5126 26.2655 91.326 26.1897 91.1743 26.038C91.0226 25.8863 90.9468 25.6997 90.9468 25.478V14.103C90.9468 13.893 91.0226 13.7122 91.1743 13.5605C91.326 13.4088 91.5126 13.333 91.7343 13.333C91.9443 13.333 92.1251 13.4088 92.2768 13.5605C92.4285 13.7122 92.5043 13.893 92.5043 14.103V25.478C92.5043 25.6997 92.4285 25.8863 92.2768 26.038C92.1251 26.1897 91.9443 26.2655 91.7343 26.2655Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M104.938 26.2305C104.681 26.2305 104.483 26.1313 104.343 25.933L97.0452 16.343V25.478C97.0452 25.688 96.9693 25.8688 96.8177 26.0205C96.6777 26.1605 96.5027 26.2305 96.2927 26.2305C96.0943 26.2305 95.9193 26.1605 95.7677 26.0205C95.616 25.8688 95.5402 25.688 95.5402 25.478V14.1205C95.5402 13.9572 95.5868 13.8113 95.6802 13.683C95.7735 13.5547 95.9018 13.4672 96.0652 13.4205C96.2168 13.3622 96.3685 13.3563 96.5202 13.403C96.6718 13.4497 96.8002 13.5372 96.9052 13.6655L104.185 23.273V14.1205C104.185 13.9222 104.255 13.7472 104.395 13.5955C104.547 13.4438 104.728 13.368 104.938 13.368C105.148 13.368 105.323 13.4438 105.463 13.5955C105.614 13.7472 105.69 13.9222 105.69 14.1205V25.478C105.69 25.6413 105.643 25.7872 105.55 25.9155C105.457 26.0438 105.334 26.1372 105.183 26.1955C105.066 26.2188 104.984 26.2305 104.938 26.2305Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M20.0003 27.0587C19.3533 27.0587 18.8239 26.5292 18.8239 25.8822C18.8239 21.3528 15.118 17.6469 10.5886 17.6469C9.94152 17.6469 9.41211 17.1175 9.41211 16.4704C9.41211 15.8234 9.94152 15.2939 10.5886 15.2939C16.4415 15.2939 21.1768 20.0292 21.1768 25.8822C21.1768 26.5292 20.6474 27.0587 20.0003 27.0587Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cpath d=\"M30.5884 16.4704C30.5884 17.1175 30.0589 17.6469 29.4119 17.6469C26.6178 17.6469 24.1178 19.0587 22.6472 21.2057C22.3236 20.3822 21.9413 19.6175 21.4707 18.9116C23.4119 16.6763 26.2648 15.2939 29.4119 15.2939C30.0589 15.2939 30.5884 15.8234 30.5884 16.4704Z\" fill=\"url(#paint1_linear)\"\u002F\u003E\n\u003Cpath d=\"M20 40C8.97059 40 0 31.0294 0 20C0 8.97059 8.97059 0 20 0C31.0294 0 40 8.97059 40 20C40 31.0294 31.0294 40 20 40ZM20 2.35294C10.2647 2.35294 2.35294 10.2647 2.35294 20C2.35294 29.7353 10.2647 37.6471 20 37.6471C29.7353 37.6471 37.6471 29.7353 37.6471 20C37.6471 10.2647 29.7353 2.35294 20 2.35294Z\" fill=\"url(#paint2_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"15.2945\" y1=\"15.2939\" x2=\"15.2945\" y2=\"27.0587\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003ClinearGradient id=\"paint1_linear\" x1=\"26.0295\" y1=\"15.2939\" x2=\"26.0295\" y2=\"21.2057\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#6FCF97\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#66D2EA\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003ClinearGradient id=\"paint2_linear\" x1=\"20\" y1=\"0\" x2=\"20\" y2=\"40\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__right\"\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cmenu class=\"header__menu\"\u003E\u003Ca class=\"header__item header__item_active\" href=\"#\"\u003EО нас\u003C\u002Fa\u003E\u003Ca class=\"header__item header__item_arrow\" href=\"#\"\u003EУслуги\u003C\u002Fa\u003E\u003Ca class=\"header__item\" href=\"#\"\u003EВакансии \u003C\u002Fa\u003E\u003Ca class=\"header__item\" href=\"#\"\u003EНовости\u003C\u002Fa\u003E\u003Ca class=\"header__item header__item_arrow\" href=\"#\"\u003EСоглашения\u003C\u002Fa\u003E\u003C\u002Fmenu\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__menu-сaesar\"\u003E\u003Cspan\u003EЮлий Цезарь\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fheader\u003E";
}
else {
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cheader class=\"header\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__wrapper\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E\u003Ca href=\"index\"\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + " \u003Csvg width=\"106\" height=\"40\" viewBox=\"0 0 106 40\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M62.335 13.368C62.5567 13.368 62.7375 13.4438 62.8775 13.5955C63.0292 13.7355 63.105 13.9163 63.105 14.138C63.105 14.348 63.0292 14.5288 62.8775 14.6805C62.7375 14.8322 62.5567 14.908 62.335 14.908H58.5725V25.408C58.5725 25.6297 58.4967 25.8163 58.345 25.968C58.205 26.108 58.0242 26.178 57.8025 26.178C57.5925 26.178 57.4117 26.108 57.26 25.968C57.1083 25.8163 57.0325 25.6297 57.0325 25.408V14.908H53.27C53.06 14.908 52.8792 14.8322 52.7275 14.6805C52.5758 14.5288 52.5 14.348 52.5 14.138C52.5 13.9163 52.5758 13.7355 52.7275 13.5955C52.8792 13.4438 53.06 13.368 53.27 13.368H62.335Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M68.9076 13.368C69.7943 13.368 70.6285 13.5372 71.4101 13.8755C72.2034 14.2138 72.8918 14.6747 73.4751 15.258C74.0701 15.8413 74.5368 16.5297 74.8751 17.323C75.2134 18.1047 75.3826 18.9388 75.3826 19.8255C75.3826 20.8638 75.1609 21.8205 74.7176 22.6955C74.2743 23.5705 73.6735 24.3055 72.9151 24.9005C72.9151 24.9005 72.9035 24.9122 72.8801 24.9355C72.3201 25.3555 71.7076 25.688 71.0426 25.933C70.3776 26.1663 69.6659 26.283 68.9076 26.283C68.0209 26.283 67.1868 26.1138 66.4051 25.7755C65.6234 25.4372 64.9351 24.9763 64.3401 24.393C63.7568 23.8097 63.2959 23.1272 62.9576 22.3455C62.6193 21.5638 62.4501 20.7238 62.4501 19.8255C62.4501 18.8455 62.6484 17.9413 63.0451 17.113C63.4418 16.273 63.9843 15.5555 64.6726 14.9605L64.7426 14.8905C64.7543 14.8905 64.7718 14.8788 64.7951 14.8555C65.3551 14.3888 65.9851 14.0272 66.6851 13.7705C67.3851 13.5022 68.1259 13.368 68.9076 13.368ZM68.9076 24.743C69.3509 24.743 69.771 24.6905 70.1676 24.5855C70.576 24.4688 70.9609 24.3113 71.3226 24.113L65.1801 16.6405C64.8068 17.0722 64.5151 17.5622 64.3051 18.1105C64.0951 18.6472 63.9901 19.2188 63.9901 19.8255C63.9901 20.5022 64.1185 21.138 64.3751 21.733C64.6318 22.328 64.9818 22.853 65.4251 23.308C65.8801 23.7513 66.4051 24.1013 67.0001 24.358C67.5951 24.6147 68.2309 24.743 68.9076 24.743ZM72.5301 23.1505C72.9384 22.7072 73.2535 22.2055 73.4751 21.6455C73.7085 21.0738 73.8251 20.4672 73.8251 19.8255C73.8251 19.1488 73.6968 18.513 73.4401 17.918C73.1834 17.323 72.8276 16.8038 72.3726 16.3605C71.9293 15.9055 71.4101 15.5497 70.8151 15.293C70.2201 15.0363 69.5843 14.908 68.9076 14.908C68.4409 14.908 67.9918 14.9722 67.5601 15.1005C67.1284 15.2172 66.7259 15.3922 66.3526 15.6255L72.5301 23.1505Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M82.351 20.6305C82.1177 20.6305 81.9194 20.5372 81.756 20.3505L77.2585 14.5755C77.1302 14.4122 77.0777 14.2313 77.101 14.033C77.1244 13.823 77.2177 13.6538 77.381 13.5255C77.5444 13.3972 77.7252 13.3505 77.9235 13.3855C78.1335 13.4088 78.3027 13.5022 78.431 13.6655L82.351 18.6705L86.1835 13.753C86.3119 13.5897 86.4752 13.4963 86.6735 13.473C86.8835 13.4497 87.0702 13.5022 87.2335 13.6305C87.3969 13.7588 87.4902 13.928 87.5135 14.138C87.5369 14.3363 87.4844 14.5172 87.356 14.6805L82.946 20.3505C82.7944 20.5372 82.596 20.6305 82.351 20.6305ZM87.2685 26.2655C87.2219 26.2655 87.146 26.2597 87.041 26.248C86.9477 26.2363 86.8369 26.2072 86.7085 26.1605C86.5802 26.1022 86.4402 26.0263 86.2885 25.933C86.1485 25.828 86.0085 25.688 85.8685 25.513L82.351 20.9805L78.5185 25.9155C78.3902 26.0788 78.221 26.1722 78.011 26.1955C77.8127 26.2188 77.6319 26.1663 77.4685 26.038C77.3052 25.9097 77.2119 25.7463 77.1885 25.548C77.1652 25.338 77.2177 25.1513 77.346 24.988L81.756 19.318C81.896 19.1313 82.0885 19.038 82.3335 19.038C82.5902 19.038 82.7944 19.1313 82.946 19.318L87.041 24.568C87.0994 24.6497 87.1519 24.7022 87.1985 24.7255C87.2452 24.7488 87.2802 24.7663 87.3035 24.778C87.5019 24.778 87.6652 24.848 87.7935 24.988C87.9335 25.1163 88.0094 25.2797 88.021 25.478C88.0444 25.688 87.986 25.8688 87.846 26.0205C87.706 26.1722 87.531 26.2538 87.321 26.2655H87.2685Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M91.7343 26.2655C91.5126 26.2655 91.326 26.1897 91.1743 26.038C91.0226 25.8863 90.9468 25.6997 90.9468 25.478V14.103C90.9468 13.893 91.0226 13.7122 91.1743 13.5605C91.326 13.4088 91.5126 13.333 91.7343 13.333C91.9443 13.333 92.1251 13.4088 92.2768 13.5605C92.4285 13.7122 92.5043 13.893 92.5043 14.103V25.478C92.5043 25.6997 92.4285 25.8863 92.2768 26.038C92.1251 26.1897 91.9443 26.2655 91.7343 26.2655Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M104.938 26.2305C104.681 26.2305 104.483 26.1313 104.343 25.933L97.0452 16.343V25.478C97.0452 25.688 96.9693 25.8688 96.8177 26.0205C96.6777 26.1605 96.5027 26.2305 96.2927 26.2305C96.0943 26.2305 95.9193 26.1605 95.7677 26.0205C95.616 25.8688 95.5402 25.688 95.5402 25.478V14.1205C95.5402 13.9572 95.5868 13.8113 95.6802 13.683C95.7735 13.5547 95.9018 13.4672 96.0652 13.4205C96.2168 13.3622 96.3685 13.3563 96.5202 13.403C96.6718 13.4497 96.8002 13.5372 96.9052 13.6655L104.185 23.273V14.1205C104.185 13.9222 104.255 13.7472 104.395 13.5955C104.547 13.4438 104.728 13.368 104.938 13.368C105.148 13.368 105.323 13.4438 105.463 13.5955C105.614 13.7472 105.69 13.9222 105.69 14.1205V25.478C105.69 25.6413 105.643 25.7872 105.55 25.9155C105.457 26.0438 105.334 26.1372 105.183 26.1955C105.066 26.2188 104.984 26.2305 104.938 26.2305Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M20.0003 27.0587C19.3533 27.0587 18.8239 26.5292 18.8239 25.8822C18.8239 21.3528 15.118 17.6469 10.5886 17.6469C9.94152 17.6469 9.41211 17.1175 9.41211 16.4704C9.41211 15.8234 9.94152 15.2939 10.5886 15.2939C16.4415 15.2939 21.1768 20.0292 21.1768 25.8822C21.1768 26.5292 20.6474 27.0587 20.0003 27.0587Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cpath d=\"M30.5884 16.4704C30.5884 17.1175 30.0589 17.6469 29.4119 17.6469C26.6178 17.6469 24.1178 19.0587 22.6472 21.2057C22.3236 20.3822 21.9413 19.6175 21.4707 18.9116C23.4119 16.6763 26.2648 15.2939 29.4119 15.2939C30.0589 15.2939 30.5884 15.8234 30.5884 16.4704Z\" fill=\"url(#paint1_linear)\"\u002F\u003E\n\u003Cpath d=\"M20 40C8.97059 40 0 31.0294 0 20C0 8.97059 8.97059 0 20 0C31.0294 0 40 8.97059 40 20C40 31.0294 31.0294 40 20 40ZM20 2.35294C10.2647 2.35294 2.35294 10.2647 2.35294 20C2.35294 29.7353 10.2647 37.6471 20 37.6471C29.7353 37.6471 37.6471 29.7353 37.6471 20C37.6471 10.2647 29.7353 2.35294 20 2.35294Z\" fill=\"url(#paint2_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"15.2945\" y1=\"15.2939\" x2=\"15.2945\" y2=\"27.0587\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003ClinearGradient id=\"paint1_linear\" x1=\"26.0295\" y1=\"15.2939\" x2=\"26.0295\" y2=\"21.2057\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#6FCF97\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#66D2EA\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003ClinearGradient id=\"paint2_linear\" x1=\"20\" y1=\"0\" x2=\"20\" y2=\"40\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__right\"\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cmenu class=\"header__menu\"\u003E\u003Ca class=\"header__item header__item_active\" href=\"#\"\u003EО нас\u003C\u002Fa\u003E\u003Ca class=\"header__item header__item_arrow\" href=\"#\"\u003EУслуги\u003C\u002Fa\u003E\u003Ca class=\"header__item\" href=\"#\"\u003EВакансии \u003C\u002Fa\u003E\u003Ca class=\"header__item\" href=\"#\"\u003EНовости\u003C\u002Fa\u003E\u003Ca class=\"header__item header__item_arrow\" href=\"#\"\u003EСоглашения\u003C\u002Fa\u003E\u003Ca class=\"header__item header__item_display-none\" href=\"login\"\u003EВойти\u003C\u002Fa\u003E\u003Ca class=\"header__item header__item_display-none\" href=\"registration\"\u003EЗарегистрироваться\u003C\u002Fa\u003E\u003C\u002Fmenu\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"burger__menu\"\u003E\u003Cspan class=\"burger__item\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"burger__item\"\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"burger__item\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"header__menu-btn\"\u003E\u003Ca href=\"login\"\u003E";




















pug_mixins["buttonWithBorderSmall"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general buttons-general__block-border\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"buttons-general__btn buttons-general__btn-border buttons-general__btn_hover-border buttons-general__btn-border-width\""+" type=\"button\""+pug.attr("value", name, true, true)) + "\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};










pug_mixins["buttonBig"] = pug_interp = function(name, noArrow){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (noArrow == "no") {
pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general buttons-general__btn_hover\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"buttons-general__btn buttons-general__btn-background buttons-general__btn-big_width\""+" name=\"btnSign\" type=\"button\""+pug.attr("value", name, true, true)) + "\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general buttons-general__btn_hover\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"buttons-general__btn buttons-general__btn-background buttons-general__btn-big_width\""+" name=\"btnSign\" type=\"button\""+pug.attr("value", name, true, true)) + "\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general__big-arrow\"\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + " \u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_indent.push("                ");
pug_mixins["buttonWithBorderSmall"]("Войти");
pug_indent.pop();
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Ca href=\"registration\"\u003E";
pug_indent.push("                ");
pug_mixins["buttonBig"]("Зарегистрироваться", "no");
pug_indent.pop();
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fheader\u003E";
}
};
pug_indent.push("    ");
pug_mixins["header"]();
pug_indent.pop();
pug_html = pug_html + "\n    \u003Cmain class=\"main-specific\"\u003E\n      \u003Cdiv class=\"container\"\u003E\n        \u003Cdiv class=\"main-specific__wrapper\"\u003E\n          \u003Cdiv class=\"main-specific__up-left\"\u003E\n            \u003Ch2 class=\"main-specific__up-left-heading\"\u003EСведения о номере\u003C\u002Fh2\u003E" + (null == (pug_interp = __webpack_require__(/*! ../../blocks/form-elements/comfort/comfort.pug */ "./blocks/form-elements/comfort/comfort.pug").call(this, locals)) ? "" : pug_interp) + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"main-specific__up-right\"\u003E\n            \u003Ch2 class=\"main-specific__up-right-heading\"\u003EВпечатления о номере\u003C\u002Fh2\u003E\n            \u003Cdiv class=\"voices\"\u003E\n              \u003Cdiv class=\"voices__circle\"\u003E\n                \u003Cdiv class=\"voices__circle-wrapper\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"voices__circle-super\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"voices__circle-good\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"voices__circle-satisfy\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"voices__circle-no-good\"\u003E\u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"voices__circle-text\"\u003E\u003Cspan\u003E260\u003C\u002Fspan\u003E\u003Cspan\u003Eголосов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cul class=\"voices__list\"\u003E\n                \u003Cli class=\"voices__item\"\u003EВеликолепно\u003C\u002Fli\u003E\n                \u003Cli class=\"voices__item\"\u003EХорошо\u003C\u002Fli\u003E\n                \u003Cli class=\"voices__item\"\u003EУдовлетворительно\u003C\u002Fli\u003E\n                \u003Cli class=\"voices__item\"\u003EРазочарован\u003C\u002Fli\u003E\n              \u003C\u002Ful\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"main-specific__down\"\u003E\n            \u003Ch2 class=\"main-specific__down-title\"\u003EОтзывы посетителей номера\u003C\u002Fh2\u003E";
pug_mixins["review"] = pug_interp = function(pathToImage, text, countLike){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review\"\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__human\"\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__human-image\"\u003E\u003Cimg" + (pug.attr("src", pathToImage, true, true)+" alt=\"human\"") + "\u003E\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__human-name\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3\u003EМурад Сарафанов\u003C\u002Fh3\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__human-online\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E5 дней назад\u003C\u002Fp\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__main\"\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__like\"\u003E";
pug_mixins["Like"] = pug_interp = function(countLike){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"like\"\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"like__item\"\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel class=\"like__label\"\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"like__input\" type=\"checkBox\"\u003E\u003Cspan class=\"like__fake\" tabindex=\"0\"\u003E\u003Cspan class=\"like__heart\"\u003E\u003C\u002Fspan\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"like__text\"\u003E" + (pug.escape(null == (pug_interp = countLike) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fspan\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Flabel\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_indent.push("                  ");
pug_mixins["Like"](countLike);
pug_indent.pop();
pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"review__human-text\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_indent.push("            ");
pug_mixins["review"](__webpack_require__(/*! ../../blocks/form-elements/review/image/human1.png */ "./blocks/form-elements/review/image/human1.png"), "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.", 50);
pug_indent.pop();
pug_indent.push("            ");
pug_mixins["review"](__webpack_require__(/*! ../../blocks/form-elements/review/image/human2.png */ "./blocks/form-elements/review/image/human2.png"), "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент", 20);
pug_indent.pop();
pug_html = pug_html + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"main-specific__appart\"\u003E\n            \u003Cdiv class=\"appart\"\u003E\n              \u003Cform class=\"appart__form\" action=\"\"\u003E \n                \u003Cdiv class=\"appart__header\"\u003E\n                  \u003Cdiv class=\"appart__header-left\"\u003E\u003Cspan class=\"appart__header-left-item\"\u003E№\u003C\u002Fspan\u003E\u003Cspan class=\"appart__header-left-item\"\u003E200\u003C\u002Fspan\u003E\u003Cspan class=\"appart__header-left-item\"\u003E \u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"appart__header-right\"\u003E\u003Cspan class=\"appart__header-right-item\"\u003E9 990₽\u003C\u002Fspan\u003E\u003Cspan class=\"appart__header-right-item\"\u003Eв сутки\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"appart__date\"\u003E\n                  \u003Cdiv class=\"drop-downs\"\u003E\n                    \u003Cdiv class=\"drop-downs__date\"\u003E\n                      \u003Cdiv class=\"drop-downs drop-downs__date_width\"\u003E\n                        \u003Ch3 class=\"drop-downs__global-heading\"\u003EПрибытие\u003C\u002Fh3\u003E\n                        \u003Cdiv class=\"drop-downs__global drop-downs__date calendar-date-one\" id=\"calendar-date-one\"\u003E\n                          \u003Cp class=\"drop-downs__global-text\" id=\"calendar__text-one\"\u003EДД.ММ.ГГ\u003C\u002Fp\u003E\u003Cspan class=\"drop-downs__global-arrow\" id=\" \"\u003E\u003C\u002Fspan\u003E\n                        \u003C\u002Fdiv\u003E\n                      \u003C\u002Fdiv\u003E\n                      \u003Cdiv class=\"drop-downs drop-downs__date_width\"\u003E\n                        \u003Ch3 class=\"drop-downs__global-heading\"\u003EВыезд\u003C\u002Fh3\u003E\n                        \u003Cdiv class=\"drop-downs__global drop-downs__date drop-downs__date_width\"\u003E\n                          \u003Cp class=\"drop-downs__global-text\" id=\"calendar__text-one-second\"\u003EДД.ММ.ГГ\u003C\u002Fp\u003E\u003Cspan class=\"drop-downs__global-arrow drop-downs__no-arrow\" id=\" \"\u003E\u003C\u002Fspan\u003E\n                        \u003C\u002Fdiv\u003E\n                      \u003C\u002Fdiv\u003E";
pug_mixins["calendar"] = pug_interp = function(type){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["calendar calendar-" + type], [true]), false, true)) + "\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__up\"\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["calendar__arrow-right calendar__arrow-right-" + type], [true]), false, true)) + "\u003E\u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch2" + (pug.attr("class", pug.classes(["calendar__heading calendar__heading-"  + type], [true]), false, true)) + "\u003EИюль 2021\u003C\u002Fh2\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["calendar__arrow-left calendar__arrow-left-"  + type], [true]), false, true)) + "\u003E\u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__main\"\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week\"\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EПн\u003C\u002Fdiv\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EВт\u003C\u002Fdiv\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EСр\u003C\u002Fdiv\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EЧт\u003C\u002Fdiv\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EПт\u003C\u002Fdiv\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EСб\u003C\u002Fdiv\u003E\n                            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"calendar__week-item\"\u003EВс\u003C\u002Fdiv\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["calednar__days calednar__days-" + type], [true]), false, true)) + "\u003E\u003C\u002Fdiv\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["calendar__footer calendar__footer-" + type], [true]), false, true)) + "\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3" + (" class=\"calendar__buttons-item calendar__buttons-item_hover\""+pug.attr("id", "calendar-delete-" + type, true, true)) + "\u003EОчистить\u003C\u002Fh3\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3" + (pug.attr("class", pug.classes(["calendar__buttons-item calendar__buttons-item_hover calendar__buttons-item-send-" + type], [true]), false, true)) + "\u003EПрименить\u003C\u002Fh3\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_indent.push("                      ");
pug_mixins["calendar"]("one");
pug_indent.pop();
pug_html = pug_html + "\n                    \u003C\u002Fdiv\u003E\n                  \u003C\u002Fdiv\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"appart__guest\"\u003E";
























































pug_mixins["DropBoxGuest"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs drop-downs__count\"\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"drop-downs__global-heading\"\u003EГости\u003C\u002Fh3\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__global drop-downs__guest\"\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"drop-downs__global-text drop-downs__guest-text\"\u003EСколько гостей\u003C\u002Fp\u003E\u003Cspan class=\"drop-downs__global-arrow\" id=\"drop-downs__input\"\u003E\u003C\u002Fspan\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__block drop-downs__block-general\"\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__block-row\"\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"drop-downs__h3\"\u003EВзрослые\u003C\u002Fh3\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__score\"\u003E\u003Cspan class=\"drop-downs__minus_no-active\" id=\"drop-downs__minus\"\u003E-\u003C\u002Fspan\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 id=\"drop-downs__value\" data-value=\"0\"\u003E0\u003C\u002Fh3\u003E\u003Cspan id=\"drop-downs__plus\"\u003E+\u003C\u002Fspan\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__block-row\"\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"drop-downs__h3\"\u003EДети\u003C\u002Fh3\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__score\"\u003E\u003Cspan class=\"drop-downs__minus_no-active\" id=\"drop-downs__minus\"\u003E-\u003C\u002Fspan\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 id=\"drop-downs__value\" data-value=\"0\"\u003E0\u003C\u002Fh3\u003E\u003Cspan id=\"drop-downs__plus\"\u003E+\u003C\u002Fspan\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__block-row\"\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"drop-downs__h3\"\u003EМладенцы\u003C\u002Fh3\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__score\"\u003E\u003Cspan class=\"drop-downs__minus_no-active\" id=\"drop-downs__minus\"\u003E-\u003C\u002Fspan\u003E\n                          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 id=\"drop-downs__value\" data-value=\"0\"\u003E0\u003C\u002Fh3\u003E\u003Cspan id=\"drop-downs__plus\"\u003E+\u003C\u002Fspan\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"drop-downs__buttons-guest drop-downs__open-btn\"\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"drop-downs__buttons-item drop-downs__buttons-item_hover\" id=\"drop-downs__delete\"\u003EОчистить\u003C\u002Fh3\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Ch3 class=\"drop-downs__buttons-item drop-downs__buttons-item_hover\" id=\"drop-downs__send\"\u003EПрименить\u003C\u002Fh3\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_indent.push("                  ");
pug_mixins["DropBoxGuest"]();
pug_indent.pop();
pug_html = pug_html + "\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"appart__main\"\u003E\n                  \u003Cp class=\"appart__main-text\"\u003E9 990₽ х 4 суток\u003C\u002Fp\u003E\n                  \u003Cp class=\"appart__main-text\"\u003E39 960₽\u003C\u002Fp\u003E\n                  \u003Cp class=\"appart__main-text appart__main-ifno\"\u003EСбор за услуги: скидка 2 179₽\u003Cspan\u003Ei\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n                  \u003Cp class=\"appart__main-text\"\u003E0₽\u003C\u002Fp\u003E\n                  \u003Cp class=\"appart__main-text appart__main-ifno\"\u003EСбор за дополнительные услуги\u003Cspan\u003Ei\u003C\u002Fspan\u003E\u003C\u002Fp\u003E\n                  \u003Cp class=\"appart__main-text\"\u003E300₽\u003C\u002Fp\u003E\n                \u003C\u002Fdiv\u003E\n                \u003Cdiv class=\"appart__footer\"\u003E\n                  \u003Ch2 class=\"appart__footer-total\"\u003EИтого\u003C\u002Fh2\u003E\n                  \u003Ch2 class=\"appart__footer-total\"\u003E38 081₽\u003C\u002Fh2\u003E\n                  \u003Cdiv class=\"appart__btn\"\u003E";




















pug_mixins["buttonWithBorderSmall"] = pug_interp = function(name){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general buttons-general__block-border\"\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"buttons-general__btn buttons-general__btn-border buttons-general__btn_hover-border buttons-general__btn-border-width\""+" type=\"button\""+pug.attr("value", name, true, true)) + "\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};










pug_mixins["buttonBig"] = pug_interp = function(name, noArrow){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (noArrow == "no") {
pug_html = pug_html + "\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general buttons-general__btn_hover\"\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"buttons-general__btn buttons-general__btn-background buttons-general__btn-big_width\""+" name=\"btnSign\" type=\"button\""+pug.attr("value", name, true, true)) + "\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
else {
pug_html = pug_html + "\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general buttons-general__btn_hover\"\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput" + (" class=\"buttons-general__btn buttons-general__btn-background buttons-general__btn-big_width\""+" name=\"btnSign\" type=\"button\""+pug.attr("value", name, true, true)) + "\u003E\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"buttons-general__big-arrow\"\u003E\n                        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + " \u003Csvg width=\"17\" height=\"18\" viewBox=\"0 0 17 18\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M8.36252 0.984375L16.3781 9L8.36252 17.0156L6.95627 15.6094L12.5344 9.98438H0.346894V8.01562H12.5344L6.95627 2.39062L8.36252 0.984375Z\" fill=\"#BC9CFF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\n                      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
};
pug_indent.push("                    ");
pug_mixins["buttonBig"]("Забронировать");
pug_indent.pop();
pug_html = pug_html + "\n                  \u003C\u002Fdiv\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fform\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cdiv class=\"main-specific__footer\"\u003E\n          \u003Cdiv class=\"main-specific__rules\"\u003E\n            \u003Ch2 class=\"main-specific__heading-rules\"\u003EПравила\u003C\u002Fh2\u003E" + (null == (pug_interp = __webpack_require__(/*! ../../blocks/form-elements/bullet-list/bullet-list.pug */ "./blocks/form-elements/bullet-list/bullet-list.pug").call(this, locals)) ? "" : pug_interp) + "\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"main-specific__stop\"\u003E\n            \u003Ch2 class=\"main-specific__heading-stop\"\u003EОтмена\u003C\u002Fh2\u003E\n            \u003Cp class=\"main-specific__text-stop\"\u003EБесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fmain\u003E\n    \u003Cfooter class=\"footer\"\u003E\n      \u003Cdiv class=\"container\"\u003E\n        \u003Cdiv class=\"footer__wrapper\"\u003E\n          \u003Cdiv class=\"footer__logo\"\u003E\u003Ca href=\"index\"\u003E\u003Csvg width=\"106\" height=\"40\" viewBox=\"0 0 106 40\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M62.335 13.368C62.5567 13.368 62.7375 13.4438 62.8775 13.5955C63.0292 13.7355 63.105 13.9163 63.105 14.138C63.105 14.348 63.0292 14.5288 62.8775 14.6805C62.7375 14.8322 62.5567 14.908 62.335 14.908H58.5725V25.408C58.5725 25.6297 58.4967 25.8163 58.345 25.968C58.205 26.108 58.0242 26.178 57.8025 26.178C57.5925 26.178 57.4117 26.108 57.26 25.968C57.1083 25.8163 57.0325 25.6297 57.0325 25.408V14.908H53.27C53.06 14.908 52.8792 14.8322 52.7275 14.6805C52.5758 14.5288 52.5 14.348 52.5 14.138C52.5 13.9163 52.5758 13.7355 52.7275 13.5955C52.8792 13.4438 53.06 13.368 53.27 13.368H62.335Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M68.9076 13.368C69.7943 13.368 70.6285 13.5372 71.4101 13.8755C72.2034 14.2138 72.8918 14.6747 73.4751 15.258C74.0701 15.8413 74.5368 16.5297 74.8751 17.323C75.2134 18.1047 75.3826 18.9388 75.3826 19.8255C75.3826 20.8638 75.1609 21.8205 74.7176 22.6955C74.2743 23.5705 73.6735 24.3055 72.9151 24.9005C72.9151 24.9005 72.9035 24.9122 72.8801 24.9355C72.3201 25.3555 71.7076 25.688 71.0426 25.933C70.3776 26.1663 69.6659 26.283 68.9076 26.283C68.0209 26.283 67.1868 26.1138 66.4051 25.7755C65.6234 25.4372 64.9351 24.9763 64.3401 24.393C63.7568 23.8097 63.2959 23.1272 62.9576 22.3455C62.6193 21.5638 62.4501 20.7238 62.4501 19.8255C62.4501 18.8455 62.6484 17.9413 63.0451 17.113C63.4418 16.273 63.9843 15.5555 64.6726 14.9605L64.7426 14.8905C64.7543 14.8905 64.7718 14.8788 64.7951 14.8555C65.3551 14.3888 65.9851 14.0272 66.6851 13.7705C67.3851 13.5022 68.1259 13.368 68.9076 13.368ZM68.9076 24.743C69.3509 24.743 69.771 24.6905 70.1676 24.5855C70.576 24.4688 70.9609 24.3113 71.3226 24.113L65.1801 16.6405C64.8068 17.0722 64.5151 17.5622 64.3051 18.1105C64.0951 18.6472 63.9901 19.2188 63.9901 19.8255C63.9901 20.5022 64.1185 21.138 64.3751 21.733C64.6318 22.328 64.9818 22.853 65.4251 23.308C65.8801 23.7513 66.4051 24.1013 67.0001 24.358C67.5951 24.6147 68.2309 24.743 68.9076 24.743ZM72.5301 23.1505C72.9384 22.7072 73.2535 22.2055 73.4751 21.6455C73.7085 21.0738 73.8251 20.4672 73.8251 19.8255C73.8251 19.1488 73.6968 18.513 73.4401 17.918C73.1834 17.323 72.8276 16.8038 72.3726 16.3605C71.9293 15.9055 71.4101 15.5497 70.8151 15.293C70.2201 15.0363 69.5843 14.908 68.9076 14.908C68.4409 14.908 67.9918 14.9722 67.5601 15.1005C67.1284 15.2172 66.7259 15.3922 66.3526 15.6255L72.5301 23.1505Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M82.351 20.6305C82.1177 20.6305 81.9194 20.5372 81.756 20.3505L77.2585 14.5755C77.1302 14.4122 77.0777 14.2313 77.101 14.033C77.1244 13.823 77.2177 13.6538 77.381 13.5255C77.5444 13.3972 77.7252 13.3505 77.9235 13.3855C78.1335 13.4088 78.3027 13.5022 78.431 13.6655L82.351 18.6705L86.1835 13.753C86.3119 13.5897 86.4752 13.4963 86.6735 13.473C86.8835 13.4497 87.0702 13.5022 87.2335 13.6305C87.3969 13.7588 87.4902 13.928 87.5135 14.138C87.5369 14.3363 87.4844 14.5172 87.356 14.6805L82.946 20.3505C82.7944 20.5372 82.596 20.6305 82.351 20.6305ZM87.2685 26.2655C87.2219 26.2655 87.146 26.2597 87.041 26.248C86.9477 26.2363 86.8369 26.2072 86.7085 26.1605C86.5802 26.1022 86.4402 26.0263 86.2885 25.933C86.1485 25.828 86.0085 25.688 85.8685 25.513L82.351 20.9805L78.5185 25.9155C78.3902 26.0788 78.221 26.1722 78.011 26.1955C77.8127 26.2188 77.6319 26.1663 77.4685 26.038C77.3052 25.9097 77.2119 25.7463 77.1885 25.548C77.1652 25.338 77.2177 25.1513 77.346 24.988L81.756 19.318C81.896 19.1313 82.0885 19.038 82.3335 19.038C82.5902 19.038 82.7944 19.1313 82.946 19.318L87.041 24.568C87.0994 24.6497 87.1519 24.7022 87.1985 24.7255C87.2452 24.7488 87.2802 24.7663 87.3035 24.778C87.5019 24.778 87.6652 24.848 87.7935 24.988C87.9335 25.1163 88.0094 25.2797 88.021 25.478C88.0444 25.688 87.986 25.8688 87.846 26.0205C87.706 26.1722 87.531 26.2538 87.321 26.2655H87.2685Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M91.7343 26.2655C91.5126 26.2655 91.326 26.1897 91.1743 26.038C91.0226 25.8863 90.9468 25.6997 90.9468 25.478V14.103C90.9468 13.893 91.0226 13.7122 91.1743 13.5605C91.326 13.4088 91.5126 13.333 91.7343 13.333C91.9443 13.333 92.1251 13.4088 92.2768 13.5605C92.4285 13.7122 92.5043 13.893 92.5043 14.103V25.478C92.5043 25.6997 92.4285 25.8863 92.2768 26.038C92.1251 26.1897 91.9443 26.2655 91.7343 26.2655Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M104.938 26.2305C104.681 26.2305 104.483 26.1313 104.343 25.933L97.0452 16.343V25.478C97.0452 25.688 96.9693 25.8688 96.8177 26.0205C96.6777 26.1605 96.5027 26.2305 96.2927 26.2305C96.0943 26.2305 95.9193 26.1605 95.7677 26.0205C95.616 25.8688 95.5402 25.688 95.5402 25.478V14.1205C95.5402 13.9572 95.5868 13.8113 95.6802 13.683C95.7735 13.5547 95.9018 13.4672 96.0652 13.4205C96.2168 13.3622 96.3685 13.3563 96.5202 13.403C96.6718 13.4497 96.8002 13.5372 96.9052 13.6655L104.185 23.273V14.1205C104.185 13.9222 104.255 13.7472 104.395 13.5955C104.547 13.4438 104.728 13.368 104.938 13.368C105.148 13.368 105.323 13.4438 105.463 13.5955C105.614 13.7472 105.69 13.9222 105.69 14.1205V25.478C105.69 25.6413 105.643 25.7872 105.55 25.9155C105.457 26.0438 105.334 26.1372 105.183 26.1955C105.066 26.2188 104.984 26.2305 104.938 26.2305Z\" fill=\"#1F2041\"\u002F\u003E\n\u003Cpath d=\"M20.0003 27.0587C19.3533 27.0587 18.8239 26.5292 18.8239 25.8822C18.8239 21.3528 15.118 17.6469 10.5886 17.6469C9.94152 17.6469 9.41211 17.1175 9.41211 16.4704C9.41211 15.8234 9.94152 15.2939 10.5886 15.2939C16.4415 15.2939 21.1768 20.0292 21.1768 25.8822C21.1768 26.5292 20.6474 27.0587 20.0003 27.0587Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cpath d=\"M30.5884 16.4704C30.5884 17.1175 30.0589 17.6469 29.4119 17.6469C26.6178 17.6469 24.1178 19.0587 22.6472 21.2057C22.3236 20.3822 21.9413 19.6175 21.4707 18.9116C23.4119 16.6763 26.2648 15.2939 29.4119 15.2939C30.0589 15.2939 30.5884 15.8234 30.5884 16.4704Z\" fill=\"url(#paint1_linear)\"\u002F\u003E\n\u003Cpath d=\"M20 40C8.97059 40 0 31.0294 0 20C0 8.97059 8.97059 0 20 0C31.0294 0 40 8.97059 40 20C40 31.0294 31.0294 40 20 40ZM20 2.35294C10.2647 2.35294 2.35294 10.2647 2.35294 20C2.35294 29.7353 10.2647 37.6471 20 37.6471C29.7353 37.6471 37.6471 29.7353 37.6471 20C37.6471 10.2647 29.7353 2.35294 20 2.35294Z\" fill=\"url(#paint2_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"15.2945\" y1=\"15.2939\" x2=\"15.2945\" y2=\"27.0587\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003ClinearGradient id=\"paint1_linear\" x1=\"26.0295\" y1=\"15.2939\" x2=\"26.0295\" y2=\"21.2057\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#6FCF97\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#66D2EA\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003ClinearGradient id=\"paint2_linear\" x1=\"20\" y1=\"0\" x2=\"20\" y2=\"40\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\n            \u003Cp class=\"footer__logo-text\"\u003EБронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»\u003C\u002Fp\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cul class=\"footer__list\"\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item footer__item_active\"\u003EНавигация\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EО нас\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EНовости\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EСлужба поддержки\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EУслуги\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003C\u002Ful\u003E\n          \u003Cul class=\"footer__list\"\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item footer__item_active\"\u003EО нас\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EО сервисе\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EНаша команда\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EВакансии\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EИнвесторы\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003C\u002Ful\u003E\n          \u003Cul class=\"footer__list\"\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item footer__item_active\"\u003EСлужба поддержки\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EСоглашения\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EСообщества\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item\"\u003EСвязь с нами\u003C\u002Fli\u003E\u003C\u002Fa\u003E\u003C\u002Ful\u003E\n          \u003Cul class=\"footer__list footer__list-subscribe\"\u003E\u003Ca href=\"#\"\u003E\n              \u003Cli class=\"footer__item footer__item_active\"\u003EПодписка\u003C\u002Fli\u003E\u003C\u002Fa\u003E\n            \u003Cli class=\"footer__item\"\u003EПолучайте специальные предложения и новости сервиса\u003C\u002Fli\u003E\n            \u003Cdiv class=\"footer__list-subscribe-item\"\u003E";
pug_mixins["TextSubscribe"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"text\"\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Clabel for=\"text-subscribe\"\u003E\u003C\u002Flabel\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"text__wrapper-block text__subscribe-email_width\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cinput class=\"text__subscribe-email text__global text__global_hover-focus\" type=\"text\" id=\"text-subscribe\" placeholder=\"Email\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"text__arrow-right\"\u003E\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_indent.push("              ");
pug_mixins["TextSubscribe"]();
pug_indent.pop();
pug_html = pug_html + "\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"footer__copy\"\u003E\n        \u003Cdiv class=\"container\"\u003E\n          \u003Cdiv class=\"footer__copy-wrapper\"\u003E\n            \u003Cdiv class=\"footer__copy-left\"\u003E\n              \u003Cp\u003ECopyright © 2018 Toxin отель. Все права защищены.\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n            \u003Cdiv class=\"footer__copy-right\"\u003E\u003Ca href=\"#\"\u003E\u003Csvg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19.25 0.5H2.75C1.48438 0.5 0.5 1.53125 0.5 2.75V19.25C0.5 20.5156 1.48438 21.5 2.75 21.5H9.17188V14.375H6.21875V11H9.17188V8.46875C9.17188 5.5625 10.9062 3.92188 13.5312 3.92188C14.8438 3.92188 16.1562 4.15625 16.1562 4.15625V7.01562H14.7031C13.25 7.01562 12.7812 7.90625 12.7812 8.84375V11H16.0156L15.5 14.375H12.7812V21.5H19.25C20.4688 21.5 21.5 20.5156 21.5 19.25V2.75C21.5 1.53125 20.4688 0.5 19.25 0.5Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"11\" y1=\"1\" x2=\"11\" y2=\"25\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\u003Csvg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M11 5.60938C10.0312 5.60938 9.125 5.85937 8.28125 6.35938C7.46875 6.82812 6.8125 7.48438 6.3125 8.32812C5.84375 9.14062 5.60938 10.0312 5.60938 11C5.60938 11.9688 5.84375 12.875 6.3125 13.7188C6.8125 14.5312 7.46875 15.1875 8.28125 15.6875C9.125 16.1562 10.0312 16.3906 11 16.3906C11.9688 16.3906 12.8594 16.1562 13.6719 15.6875C14.5156 15.1875 15.1719 14.5312 15.6406 13.7188C16.1406 12.875 16.3906 11.9688 16.3906 11C16.3906 10.0312 16.1406 9.14062 15.6406 8.32812C15.1719 7.48438 14.5156 6.82812 13.6719 6.35938C12.8594 5.85937 11.9688 5.60938 11 5.60938ZM11 14.5156C10.0312 14.5156 9.20312 14.1719 8.51562 13.4844C7.82812 12.7969 7.48438 11.9688 7.48438 11C7.48438 10.0312 7.82812 9.20312 8.51562 8.51562C9.20312 7.82812 10.0312 7.48438 11 7.48438C11.9688 7.48438 12.7969 7.82812 13.4844 8.51562C14.1719 9.20312 14.5156 10.0312 14.5156 11C14.5156 11.9688 14.1719 12.7969 13.4844 13.4844C12.7969 14.1719 11.9688 14.5156 11 14.5156ZM17.8906 5.375C17.8594 5.71875 17.7188 6.01563 17.4688 6.26562C17.25 6.51562 16.9688 6.64062 16.625 6.64062C16.2812 6.64062 15.9844 6.51562 15.7344 6.26562C15.4844 6.01563 15.3594 5.71875 15.3594 5.375C15.3594 5.03125 15.4844 4.73437 15.7344 4.48438C15.9844 4.23438 16.2812 4.10938 16.625 4.10938C16.9688 4.10938 17.2656 4.23438 17.5156 4.48438C17.7656 4.73437 17.8906 5.03125 17.8906 5.375ZM21.4531 6.64062C21.3906 5.73438 21.25 4.95312 21.0312 4.29688C20.75 3.51562 20.3125 2.84375 19.7188 2.28125C19.1562 1.6875 18.4844 1.25 17.7031 0.96875C17.0469 0.75 16.2656 0.625 15.3594 0.59375C14.4844 0.53125 13.0312 0.5 11 0.5C8.96875 0.5 7.5 0.53125 6.59375 0.59375C5.71875 0.625 4.95312 0.75 4.29688 0.96875C3.51562 1.25 2.82812 1.6875 2.23438 2.28125C1.67188 2.84375 1.25 3.51562 0.96875 4.29688C0.75 4.95312 0.609375 5.73438 0.546875 6.64062C0.515625 7.51562 0.5 8.96875 0.5 11C0.5 13.0312 0.515625 14.5 0.546875 15.4062C0.609375 16.2812 0.75 17.0469 0.96875 17.7031C1.25 18.4844 1.67188 19.1719 2.23438 19.7656C2.82812 20.3281 3.51562 20.7344 4.29688 20.9844C4.95312 21.2344 5.71875 21.375 6.59375 21.4062C7.5 21.4688 8.96875 21.5 11 21.5C13.0312 21.5 14.4844 21.4688 15.3594 21.4062C16.2656 21.375 17.0469 21.25 17.7031 21.0312C18.4844 20.75 19.1562 20.3281 19.7188 19.7656C20.3125 19.1719 20.75 18.4844 21.0312 17.7031C21.25 17.0469 21.375 16.2812 21.4062 15.4062C21.4688 14.5 21.5 13.0312 21.5 11C21.5 8.96875 21.4844 7.51562 21.4531 6.64062ZM19.2031 17.1875C18.8281 18.125 18.1562 18.7969 17.1875 19.2031C16.6875 19.3906 15.8438 19.5156 14.6562 19.5781C14 19.6094 13.0312 19.625 11.75 19.625H10.25C9 19.625 8.03125 19.6094 7.34375 19.5781C6.1875 19.5156 5.34375 19.3906 4.8125 19.2031C3.875 18.8281 3.20312 18.1562 2.79688 17.1875C2.60938 16.6562 2.48438 15.8125 2.42188 14.6562C2.39062 13.9688 2.375 13 2.375 11.75V10.25C2.375 9 2.39062 8.03125 2.42188 7.34375C2.48438 6.15625 2.60938 5.3125 2.79688 4.8125C3.17188 3.84375 3.84375 3.17188 4.8125 2.79688C5.34375 2.60938 6.1875 2.48437 7.34375 2.42188C8.03125 2.39062 9 2.375 10.25 2.375H11.75C13 2.375 13.9688 2.39062 14.6562 2.42188C15.8438 2.48437 16.6875 2.60938 17.1875 2.79688C18.1562 3.17188 18.8281 3.84375 19.2031 4.8125C19.3906 5.3125 19.5156 6.15625 19.5781 7.34375C19.6094 8 19.625 8.96875 19.625 10.25V11.75C19.625 13 19.6094 13.9688 19.5781 14.6562C19.5156 15.8125 19.3906 16.6562 19.2031 17.1875Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"11\" y1=\"-1\" x2=\"11\" y2=\"23\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003E\u003Csvg width=\"24\" height=\"20\" viewBox=\"0 0 24 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M21.5156 5.125C22.4531 4.42188 23.2969 3.57812 23.9531 2.59375C23.1094 2.96875 22.125 3.25 21.1406 3.34375C22.1719 2.73438 22.9219 1.79688 23.2969 0.625C22.3594 1.1875 21.2812 1.60938 20.2031 1.84375C19.2656 0.859375 18 0.296875 16.5938 0.296875C13.875 0.296875 11.6719 2.5 11.6719 5.21875C11.6719 5.59375 11.7188 5.96875 11.8125 6.34375C7.73438 6.10938 4.07812 4.14062 1.64062 1.1875C1.21875 1.89062 0.984375 2.73438 0.984375 3.67188C0.984375 5.35938 1.82812 6.85938 3.1875 7.75C2.39062 7.70312 1.59375 7.51562 0.9375 7.14062V7.1875C0.9375 9.57812 2.625 11.5469 4.875 12.0156C4.5 12.1094 4.03125 12.2031 3.60938 12.2031C3.28125 12.2031 3 12.1562 2.67188 12.1094C3.28125 14.0781 5.10938 15.4844 7.26562 15.5312C5.57812 16.8438 3.46875 17.6406 1.17188 17.6406C0.75 17.6406 0.375 17.5938 0 17.5469C2.15625 18.9531 4.73438 19.75 7.54688 19.75C16.5938 19.75 21.5156 12.2969 21.5156 5.78125C21.5156 5.54688 21.5156 5.35938 21.5156 5.125Z\" fill=\"url(#paint0_linear)\"\u002F\u003E\n\u003Cdefs\u003E\n\u003ClinearGradient id=\"paint0_linear\" x1=\"12\" y1=\"0\" x2=\"12\" y2=\"24\" gradientUnits=\"userSpaceOnUse\"\u003E\n\u003Cstop stop-color=\"#BC9CFF\"\u002F\u003E\n\u003Cstop offset=\"1\" stop-color=\"#8BA4F9\"\u002F\u003E\n\u003C\u002FlinearGradient\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Ffooter\u003E\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";
    }.call(this, "pug_indent" in locals_for_with ?
        locals_for_with.pug_indent :
        typeof pug_indent !== 'undefined' ? pug_indent : undefined));
    ;;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./blocks/form-elements/review/image/human1.png":
/*!******************************************************!*\
  !*** ./blocks/form-elements/review/image/human1.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/human1.png";

/***/ }),

/***/ "./blocks/form-elements/review/image/human2.png":
/*!******************************************************!*\
  !*** ./blocks/form-elements/review/image/human2.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/human2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"specific": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_pug-runtime_index_js-node_modules_uti-f141bf","blocks_form-elements_drop-downs___general_drop-downs__count_js-blocks_form-elements_drop-down-7dfffb"], () => (__webpack_require__("./pages/specific/specific.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=specific.js.map