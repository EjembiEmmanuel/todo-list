import Render from "../render.js";
import Todo from "../todo.js";

import CicleUnchecked from "../../assets/icons/circle-unchecked.svg";
import CicleChecked from "../../assets/icons/circle-checked.svg";
import StarIcon from "../../assets/icons/star.svg";
import StarFilledIcon from "../../assets/icons/star-filled.svg";

import "../../assets/css/taskController.css";

import { format } from "date-fns";

let todoList = [];

function createTask() {
  const input = document.querySelector("#form-input");

  const dateCreated = format(new Date(), "E dd MMM yyyy");

  const todo = new Todo(input.value, dateCreated);

  return todo;
}

function storeTask(task) {
  todoList.push(task);
}

export function renderTasks() {
  const main = document.querySelector("#main");
  main.replaceChildren();

  for (let i = 0; i < todoList.length; i++) {
    const cuurentTask = todoList[i];

    const circleIcon = new Image();
    circleIcon.setAttribute("class", "circle-icon");
    circleIcon.setAttribute("onmouseover", "lib.showMarkAsCompleteIcon(this)");
    circleIcon.setAttribute("onmouseout", "lib.removeMarkAsCompleteIcon(this)");
    circleIcon.src = CicleUnchecked;

    const starIcon = new Image();
    starIcon.setAttribute("class", "star-icon");
    starIcon.setAttribute("onmouseover", "lib.showMarkAsImportantIcon(this)");
    starIcon.setAttribute("onmouseout", "lib.removeMarkAsImportantIcon(this)");
    starIcon.src = StarIcon;

    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task-container");
    Render(taskContainer, circleIcon);
    Render(main, taskContainer);

    const newTask = document.createElement("p");
    newTask.setAttribute("class", "tasks");
    newTask.textContent = todoList[i].title;
    Render(taskContainer, newTask);

    Render(taskContainer, starIcon);
  }
}

export function showMarkAsCompleteIcon(element) {
  element.src = CicleChecked;
}

export function removeMarkAsCompleteIcon(element) {
  element.src = CicleUnchecked;
}

export function showMarkAsImportantIcon(element) {
  element.src = StarFilledIcon;
}

export function removeMarkAsImportantIcon(element) {
  element.src = StarIcon;
}

export function handleTask() {
  const task = createTask();
  storeTask(task);
  renderTasks();
}
