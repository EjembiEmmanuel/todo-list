import Render from "../render.js";
import Todo from "../todo.js";

function createList(value) {
  const list = document.createElement("li");
  list.setAttribute("class", "list-item");
  list.textContent = value;

  return list;
}

function renderLists(list) {
  const lists = document.querySelector("#lists");
  Render(lists, list);
}

export function handleLists(value) {
  const list = createList(value);
  renderLists(list);
}
