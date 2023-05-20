import Render from "../render.js";
import Todo from "../todo.js";
import List from "../list.js";

import ListIcon from "../../assets/icons/list-icon.svg";
import AddIcon from "../../assets/icons/add.svg";

import "../../assets/css/listController.css";

function createList(value, index) {
  const list = document.createElement("li");
  list.setAttribute("class", "list-item");
  list.setAttribute("data-key", `${index}`);
  list.setAttribute("onclick", "lib.displayListComponent(this)");

  const listIcon = new Image();
  listIcon.setAttribute("class", "list-icons");
  listIcon.src = ListIcon;
  Render(list, listIcon);

  const listText = document.createElement("p");
  listText.setAttribute("class", "list-text");
  listText.textContent = value;
  Render(list, listText);

  return list;
}

function storeList(list) {
  let lists = JSON.parse(localStorage.getItem("lists"));

  if (lists === null) {
    lists = [];
  }

  list = new List(list);

  localStorage.setItem("list", JSON.stringify(list));
  lists.push(list);
  localStorage.setItem("lists", JSON.stringify(lists));
}

export function renderListsFromLocalStrorage() {
  const listsContainer = document.querySelector("#lists");
  listsContainer.replaceChildren();

  let lists = JSON.parse(localStorage.getItem("lists"));

  if (lists !== null) {
    for (let i = 0; i < lists.length; i++) {
      let list = createList(lists[i].name, i);

      Render(listsContainer, list);
    }
  }
}

export function handleLists(value) {
  storeList(value);
  renderListsFromLocalStrorage();
}

function createListComponent(list) {
  const listComponent = document.createElement("div");
  listComponent.setAttribute("id", "list-component");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  Render(listComponent, header);

  const listIcon = new Image();
  listIcon.setAttribute("id", "task-icon");
  listIcon.src = ListIcon;
  Render(header, listIcon);

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = list.name;
  Render(header, headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  Render(listComponent, main);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  Render(listComponent, footer);

  const inputArea = document.createElement("div");
  inputArea.setAttribute("id", "input-area");
  Render(footer, inputArea);

  const form = document.createElement("form");
  form.setAttribute("id", "form");
  form.setAttribute("action", "#");
  Render(inputArea, form);

  const formBtn = document.createElement("button");
  formBtn.setAttribute("id", "form-btn");
  formBtn.setAttribute("type", "submit");
  formBtn.setAttribute("onclick", "lib.handleTask()");
  Render(form, formBtn);

  const addIcon = new Image();
  addIcon.src = AddIcon;
  Render(formBtn, addIcon);

  const formInput = document.createElement("input");
  formInput.setAttribute("id", "form-input");
  formInput.setAttribute("placeholder", "Add a task");
  Render(form, formInput);

  return listComponent;
}

export function displayListComponent(element) {
  let main = document.querySelector("#content");
  main.children.item(0).remove();

  let current = document.querySelector(".active");
  current.classList.remove("active");
  element.classList.add("active");

  let index = element.dataset.key;

  let lists = JSON.parse(localStorage.getItem("lists"));

  const list = lists[index];

  const listComponent = createListComponent(list);

  Render(main, listComponent);
}
