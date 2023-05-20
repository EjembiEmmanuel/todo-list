"use strict";
var lib;
(self["webpackChunklib"] = self["webpackChunklib"] || []).push([["listController"],{

/***/ "./src/modules/controllers/listController.js":
/*!***************************************************!*\
  !*** ./src/modules/controllers/listController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayListComponent": () => (/* binding */ displayListComponent),
/* harmony export */   "handleLists": () => (/* binding */ handleLists),
/* harmony export */   "renderListsFromLocalStrorage": () => (/* binding */ renderListsFromLocalStrorage)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/modules/render.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.js */ "./src/modules/todo.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list.js */ "./src/modules/list.js");
/* harmony import */ var _assets_icons_list_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/list-icon.svg */ "./src/assets/icons/list-icon.svg");
/* harmony import */ var _assets_icons_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/add.svg */ "./src/assets/icons/add.svg");
/* harmony import */ var _assets_icons_task_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/task.svg */ "./src/assets/icons/task.svg");








function createList(value, index) {
  const list = document.createElement("li");
  list.setAttribute("class", "list-item");
  list.setAttribute("data-key", `${index}`);
  list.setAttribute("onclick", "lib.displayListComponent(this)");

  const listIcon = new Image();
  listIcon.setAttribute("class", "list-icons");
  listIcon.src = _assets_icons_list_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list, listIcon);

  const listText = document.createElement("p");
  listText.setAttribute("class", "list-text");
  listText.textContent = value;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(list, listText);

  return list;
}

function storeList(list) {
  let lists = JSON.parse(localStorage.getItem("lists"));

  if (lists === null) {
    lists = [];
  }

  list = new _list_js__WEBPACK_IMPORTED_MODULE_2__["default"](list);

  localStorage.setItem("list", JSON.stringify(list));
  lists.push(list);
  localStorage.setItem("lists", JSON.stringify(lists));
}

function renderListsFromLocalStrorage() {
  const listsContainer = document.querySelector("#lists");
  listsContainer.replaceChildren();

  let lists = JSON.parse(localStorage.getItem("lists"));

  if (lists !== null) {
    for (let i = 0; i < lists.length; i++) {
      let list = createList(lists[i].name, i);

      (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listsContainer, list);
    }
  }
}

function handleLists(value) {
  storeList(value);
  renderListsFromLocalStrorage();
}

function createListComponent(list) {
  const listComponent = document.createElement("div");
  listComponent.setAttribute("id", "list-component");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listComponent, header);

  const taskIcon = new Image();
  taskIcon.setAttribute("id", "task-icon");
  taskIcon.src = _assets_icons_task_svg__WEBPACK_IMPORTED_MODULE_5__;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(header, taskIcon);

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = list.name;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(header, headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listComponent, main);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listComponent, footer);

  const inputArea = document.createElement("div");
  inputArea.setAttribute("id", "input-area");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(footer, inputArea);

  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("action", "#");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputArea, form);

  const formBtn = document.createElement("button");
  formBtn.setAttribute("id", "form-btn");
  formBtn.setAttribute("type", "submit");
  formBtn.setAttribute("onclick", "lib.handleTask()");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, formBtn);

  const addIcon = new Image();
  addIcon.src = _assets_icons_add_svg__WEBPACK_IMPORTED_MODULE_4__;
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(formBtn, addIcon);

  const formInput = document.createElement("input");
  formInput.setAttribute("id", "form-input");
  formInput.setAttribute("placeholder", "Add a task");
  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, formInput);

  return listComponent;
}

function displayListComponent(element) {
  let index = element.dataset.key;

  let lists = JSON.parse(localStorage.getItem("lists"));

  const list = lists[index];

  const listComponent = createListComponent(list);

  console.log(listComponent);
}


/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/modules/render.js");
/* harmony import */ var _assets_icons_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/add.svg */ "./src/assets/icons/add.svg");
/* harmony import */ var _assets_icons_task_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/task.svg */ "./src/assets/icons/task.svg");





class List {
  constructor(name) {
    this.name = name;
    this.component = this.createComponent();
  }

  createComponent() {
    const listComponent = document.createElement("div");
    listComponent.setAttribute("id", "list-component");

    const header = document.createElement("div");
    header.setAttribute("id", "header");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listComponent, header);

    const taskIcon = new Image();
    taskIcon.setAttribute("id", "task-icon");
    taskIcon.src = _assets_icons_task_svg__WEBPACK_IMPORTED_MODULE_2__;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(header, taskIcon);

    const headerText = document.createElement("h1");
    headerText.setAttribute("id", "header-text");
    headerText.textContent = this.name;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(header, headerText);

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listComponent, main);

    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(listComponent, footer);

    const inputArea = document.createElement("div");
    inputArea.setAttribute("id", "input-area");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(footer, inputArea);

    const form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("action", "#");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(inputArea, form);

    const formBtn = document.createElement("button");
    formBtn.setAttribute("id", "form-btn");
    formBtn.setAttribute("type", "submit");
    formBtn.setAttribute("onclick", "lib.handleTask()");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, formBtn);

    const addIcon = new Image();
    addIcon.src = _assets_icons_add_svg__WEBPACK_IMPORTED_MODULE_1__;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(formBtn, addIcon);

    const formInput = document.createElement("input");
    formInput.setAttribute("id", "form-input");
    formInput.setAttribute("placeholder", "Add a task");
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__["default"])(form, formInput);

    return listComponent;
  }
}


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Render)
/* harmony export */ });
function Render(parent, child) {
  parent.appendChild(child);
}


/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, dateCreated) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.status = false;
  }

  get status() {
    return this.complete;
  }

  set status(status) {
    this.complete = status;
  }

  get dueDate() {
    return this.date;
  }

  set dueDate(date) {
    this.date = date;
  }

  get description() {
    return this.notes;
  }

  set description(description) {
    this.notes = description;
  }
}


/***/ }),

/***/ "./src/assets/icons/add.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/add.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "362ac4523c56291cd908.svg";

/***/ }),

/***/ "./src/assets/icons/list-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/list-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1cd963b8e5803dcf4f3.svg";

/***/ }),

/***/ "./src/assets/icons/task.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/task.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aea91522052712d8fd09.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/controllers/listController.js"));
/******/ lib = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdENvbnRyb2xsZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDSjtBQUNBOztBQUUwQjtBQUNQO0FBQ0U7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQVE7QUFDekIsRUFBRSxzREFBTTs7QUFFUjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFNOztBQUVSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxnREFBSTs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qzs7QUFFQSxNQUFNLHNEQUFNO0FBQ1o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxzREFBTTs7QUFFUjtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFRO0FBQ3pCLEVBQUUsc0RBQU07O0FBRVI7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBTTs7QUFFUjtBQUNBO0FBQ0EsRUFBRSxzREFBTTs7QUFFUjtBQUNBO0FBQ0EsRUFBRSxzREFBTTs7QUFFUjtBQUNBO0FBQ0EsRUFBRSxzREFBTTs7QUFFUjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFNOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBTTs7QUFFUjtBQUNBLGdCQUFnQixrREFBTztBQUN2QixFQUFFLHNEQUFNOztBQUVSO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQU07O0FBRVI7QUFDQTs7QUFFTztBQUNQOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIaUM7O0FBRWE7QUFDRTs7QUFFakM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQU07O0FBRVY7QUFDQTtBQUNBLG1CQUFtQixtREFBUTtBQUMzQixJQUFJLHNEQUFNOztBQUVWO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQU07O0FBRVY7QUFDQTtBQUNBLElBQUksc0RBQU07O0FBRVY7QUFDQTtBQUNBLElBQUksc0RBQU07O0FBRVY7QUFDQTtBQUNBLElBQUksc0RBQU07O0FBRVY7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBTTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQU07O0FBRVY7QUFDQSxrQkFBa0Isa0RBQU87QUFDekIsSUFBSSxzREFBTTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFNOztBQUVWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWIvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9saXN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9saWIvLi9zcmMvbW9kdWxlcy9saXN0LmpzIiwid2VicGFjazovL2xpYi8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9saWIvLi9zcmMvbW9kdWxlcy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZW5kZXIgZnJvbSBcIi4uL3JlbmRlci5qc1wiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG8uanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9saXN0LmpzXCI7XG5cbmltcG9ydCBMaXN0SWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb25zL2xpc3QtaWNvbi5zdmdcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiO1xuaW1wb3J0IFRhc2tJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbnMvdGFzay5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdCh2YWx1ZSwgaW5kZXgpIHtcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGlzdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3QtaXRlbVwiKTtcbiAgbGlzdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCBgJHtpbmRleH1gKTtcbiAgbGlzdC5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwibGliLmRpc3BsYXlMaXN0Q29tcG9uZW50KHRoaXMpXCIpO1xuXG4gIGNvbnN0IGxpc3RJY29uID0gbmV3IEltYWdlKCk7XG4gIGxpc3RJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1pY29uc1wiKTtcbiAgbGlzdEljb24uc3JjID0gTGlzdEljb247XG4gIFJlbmRlcihsaXN0LCBsaXN0SWNvbik7XG5cbiAgY29uc3QgbGlzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGlzdFRleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LXRleHRcIik7XG4gIGxpc3RUZXh0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gIFJlbmRlcihsaXN0LCBsaXN0VGV4dCk7XG5cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIHN0b3JlTGlzdChsaXN0KSB7XG4gIGxldCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSk7XG5cbiAgaWYgKGxpc3RzID09PSBudWxsKSB7XG4gICAgbGlzdHMgPSBbXTtcbiAgfVxuXG4gIGxpc3QgPSBuZXcgTGlzdChsaXN0KTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RcIiwgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xuICBsaXN0cy5wdXNoKGxpc3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RzXCIsIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJMaXN0c0Zyb21Mb2NhbFN0cm9yYWdlKCkge1xuICBjb25zdCBsaXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdHNcIik7XG4gIGxpc3RzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gIGxldCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSk7XG5cbiAgaWYgKGxpc3RzICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxpc3QgPSBjcmVhdGVMaXN0KGxpc3RzW2ldLm5hbWUsIGkpO1xuXG4gICAgICBSZW5kZXIobGlzdHNDb250YWluZXIsIGxpc3QpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTGlzdHModmFsdWUpIHtcbiAgc3RvcmVMaXN0KHZhbHVlKTtcbiAgcmVuZGVyTGlzdHNGcm9tTG9jYWxTdHJvcmFnZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0Q29tcG9uZW50KGxpc3QpIHtcbiAgY29uc3QgbGlzdENvbXBvbmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxpc3RDb21wb25lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0LWNvbXBvbmVudFwiKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXJcIik7XG4gIFJlbmRlcihsaXN0Q29tcG9uZW50LCBoZWFkZXIpO1xuXG4gIGNvbnN0IHRhc2tJY29uID0gbmV3IEltYWdlKCk7XG4gIHRhc2tJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1pY29uXCIpO1xuICB0YXNrSWNvbi5zcmMgPSBUYXNrSWNvbjtcbiAgUmVuZGVyKGhlYWRlciwgdGFza0ljb24pO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGV4dFwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgUmVuZGVyKGhlYWRlciwgaGVhZGVyVGV4dCk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICBSZW5kZXIobGlzdENvbXBvbmVudCwgbWFpbik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICBSZW5kZXIobGlzdENvbXBvbmVudCwgZm9vdGVyKTtcblxuICBjb25zdCBpbnB1dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dC1hcmVhXCIpO1xuICBSZW5kZXIoZm9vdGVyLCBpbnB1dEFyZWEpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcbiAgUmVuZGVyKGlucHV0QXJlYSwgZm9ybSk7XG5cbiAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGZvcm1CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtLWJ0blwiKTtcbiAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBmb3JtQnRuLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJsaWIuaGFuZGxlVGFzaygpXCIpO1xuICBSZW5kZXIoZm9ybSwgZm9ybUJ0bik7XG5cbiAgY29uc3QgYWRkSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhZGRJY29uLnNyYyA9IEFkZEljb247XG4gIFJlbmRlcihmb3JtQnRuLCBhZGRJY29uKTtcblxuICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0taW5wdXRcIik7XG4gIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkFkZCBhIHRhc2tcIik7XG4gIFJlbmRlcihmb3JtLCBmb3JtSW5wdXQpO1xuXG4gIHJldHVybiBsaXN0Q29tcG9uZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxpc3RDb21wb25lbnQoZWxlbWVudCkge1xuICBsZXQgaW5kZXggPSBlbGVtZW50LmRhdGFzZXQua2V5O1xuXG4gIGxldCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaXN0c1wiKSk7XG5cbiAgY29uc3QgbGlzdCA9IGxpc3RzW2luZGV4XTtcblxuICBjb25zdCBsaXN0Q29tcG9uZW50ID0gY3JlYXRlTGlzdENvbXBvbmVudChsaXN0KTtcblxuICBjb25zb2xlLmxvZyhsaXN0Q29tcG9uZW50KTtcbn1cbiIsImltcG9ydCBSZW5kZXIgZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmltcG9ydCBBZGRJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvYWRkLnN2Z1wiO1xuaW1wb3J0IFRhc2tJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvdGFzay5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29tcG9uZW50ID0gdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCgpIHtcbiAgICBjb25zdCBsaXN0Q29tcG9uZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0Q29tcG9uZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdC1jb21wb25lbnRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlclwiKTtcbiAgICBSZW5kZXIobGlzdENvbXBvbmVudCwgaGVhZGVyKTtcblxuICAgIGNvbnN0IHRhc2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgdGFza0ljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWljb25cIik7XG4gICAgdGFza0ljb24uc3JjID0gVGFza0ljb247XG4gICAgUmVuZGVyKGhlYWRlciwgdGFza0ljb24pO1xuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLXRleHRcIik7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICBSZW5kZXIoaGVhZGVyLCBoZWFkZXJUZXh0KTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICAgIFJlbmRlcihsaXN0Q29tcG9uZW50LCBtYWluKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICAgIFJlbmRlcihsaXN0Q29tcG9uZW50LCBmb290ZXIpO1xuXG4gICAgY29uc3QgaW5wdXRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dEFyZWEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dC1hcmVhXCIpO1xuICAgIFJlbmRlcihmb290ZXIsIGlucHV0QXJlYSk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1cIik7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIjXCIpO1xuICAgIFJlbmRlcihpbnB1dEFyZWEsIGZvcm0pO1xuXG4gICAgY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tYnRuXCIpO1xuICAgIGZvcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBmb3JtQnRuLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJsaWIuaGFuZGxlVGFzaygpXCIpO1xuICAgIFJlbmRlcihmb3JtLCBmb3JtQnRuKTtcblxuICAgIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRJY29uLnNyYyA9IEFkZEljb247XG4gICAgUmVuZGVyKGZvcm1CdG4sIGFkZEljb24pO1xuXG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0taW5wdXRcIik7XG4gICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQWRkIGEgdGFza1wiKTtcbiAgICBSZW5kZXIoZm9ybSwgZm9ybUlucHV0KTtcblxuICAgIHJldHVybiBsaXN0Q29tcG9uZW50O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW5kZXIocGFyZW50LCBjaGlsZCkge1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRlQ3JlYXRlZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRhdGVDcmVhdGVkID0gZGF0ZUNyZWF0ZWQ7XG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBzdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGU7XG4gIH1cblxuICBzZXQgc3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMuY29tcGxldGUgPSBzdGF0dXM7XG4gIH1cblxuICBnZXQgZHVlRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZGF0ZSkge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubm90ZXM7XG4gIH1cblxuICBzZXQgZGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5vdGVzID0gZGVzY3JpcHRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==