import Render from "../render.js";
import Todo from "../todo.js";
import List from "../list.js";

import ListIcon from "../../assets/icons/list-icon.svg";

function createList(value) {
  const list = document.createElement("li");
  list.setAttribute("class", "list-item");

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
      let list = createList(lists[i].name);

      Render(listsContainer, list);
    }
  }
}

export function handleLists(value) {
  storeList(value);
  renderListsFromLocalStrorage();
}
