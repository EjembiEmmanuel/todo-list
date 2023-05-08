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

  const todo = new Todo(input.value, dateCreated, false);

  return todo;
}

function storeTask(task) {
  todoList.push(task);
}

export function renderTasks() {
  const main = document.querySelector("#main");
  main.replaceChildren();

  for (let i = 0; i < todoList.length; i++) {
    const currentTask = todoList[i];

    if (currentTask.status) {
      const circleIcon = new Image();
      circleIcon.setAttribute("class", "circle-icon");
      circleIcon.setAttribute("data-key", `${i}`);
      circleIcon.setAttribute("onclick", "lib.setStatus(this.dataset.key)");
      circleIcon.src = CicleChecked;

      const starIcon = new Image();
      starIcon.setAttribute("class", "star-icon");
      starIcon.src = StarIcon;

      const taskContainer = document.createElement("div");
      taskContainer.setAttribute("class", "task-container");
      taskContainer.setAttribute("data-key", `${i}`);
      taskContainer.setAttribute(
        "onclick",
        "lib.showTaskDetails(this.dataset.key)"
      );
      Render(taskContainer, circleIcon);
      Render(main, taskContainer);

      const newTask = document.createElement("p");
      newTask.setAttribute("class", "tasks");
      newTask.textContent = currentTask.title;
      Render(taskContainer, newTask);

      Render(taskContainer, starIcon);
    } else {
      const circleIcon = new Image();
      circleIcon.setAttribute("class", "circle-icon");
      circleIcon.setAttribute("data-key", `${i}`);
      circleIcon.setAttribute("onclick", "lib.setStatus(this.dataset.key)");
      circleIcon.setAttribute(
        "onmouseover",
        "lib.showMarkAsCompleteIcon(this)"
      );
      circleIcon.setAttribute(
        "onmouseout",
        "lib.removeMarkAsCompleteIcon(this)"
      );
      circleIcon.src = CicleUnchecked;

      const starIcon = new Image();
      starIcon.setAttribute("class", "star-icon");
      starIcon.setAttribute("onmouseover", "lib.showMarkAsImportantIcon(this)");
      starIcon.setAttribute(
        "onmouseout",
        "lib.removeMarkAsImportantIcon(this)"
      );
      starIcon.src = StarIcon;

      const taskContainer = document.createElement("div");
      taskContainer.setAttribute("class", "task-container");
      taskContainer.setAttribute("data-key", `${i}`);
      taskContainer.setAttribute(
        "onclick",
        "lib.showTaskDetails(this.dataset.key)"
      );
      Render(taskContainer, circleIcon);
      Render(main, taskContainer);

      const newTask = document.createElement("p");
      newTask.setAttribute("class", "tasks");
      newTask.textContent = currentTask.title;
      Render(taskContainer, newTask);

      Render(taskContainer, starIcon);
    }
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

export function showTaskDetails(taskId) {
  const taskDetails = document.querySelector("#task-details");
  taskDetails.style.display = "flex";

  const index = Number(taskId);

  const task = todoList[index];

  const taskTitle = document.querySelector("#task-title-text");
  taskTitle.textContent = task.title;

  const taskDate = document.querySelector("#task-date-text");
  taskDate.textContent = `Created on ${task.dateCreated}`;

  const taskNote = document.querySelector("#task-note-text");
  taskNote.setAttribute("data-key", `${index}`);
  if (task.description) {
    console.log(task.description);
    taskNote.value = task.description;
  } else {
    taskNote.value = "";
  }

  const deleteTaskBtn = document.querySelector("#delete-task-btn");
  deleteTaskBtn.onclick = () => {
    todoList.splice(index, 1);
    renderTasks();
    hideTaskDetails();
  };
}

export function hideTaskDetails() {
  const taskDetails = document.querySelector("#task-details");

  taskDetails.style.display = "none";
}

export function setDescription(taskId) {
  const taskNote = document.querySelector("#task-note-text");
  const note = taskNote.value;

  const index = Number(taskId);
  const task = todoList[index];
  task.description = note;
  renderTasks();
}

export function setStatus(taskId) {
  const index = Number(taskId);
  const task = todoList[index];

  if (task.status === false) {
    task.status = true;
  } else {
    task.status = false;
  }

  console.log(task);
  renderTasks();
}

export function handleTask() {
  const task = createTask();
  storeTask(task);
  renderTasks();
}
