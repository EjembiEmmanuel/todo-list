import Render from "../render.js";
import Todo from "../todo.js";

import CicleUnchecked from "../../assets/icons/circle-unchecked.svg";
import CicleChecked from "../../assets/icons/circle-checked.svg";

import "../../assets/css/taskController.css";

import { format } from "date-fns";

let todoList = [];

function createTaskComponent(taskId, task) {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task-container");
  taskContainer.setAttribute("data-key", `${taskId}`);
  taskContainer.setAttribute("onclick", "lib.showTaskDetails(this)");

  const circleIcon = document.createElement("div");
  circleIcon.setAttribute("class", "checkmark-wrapper");
  circleIcon.setAttribute("data-key", `${taskId}`);
  circleIcon.setAttribute("onclick", "lib.toggleStatus(this)");
  Render(taskContainer, circleIcon);

  if (task.status) {
    const checkMark = document.createElement("span");
    checkMark.setAttribute("class", "checkmark");
    Render(circleIcon, checkMark);
  } else {
    const checkMark = document.createElement("span");
    Render(circleIcon, checkMark);
  }

  const taskText = document.createElement("p");
  taskText.setAttribute("class", "tasks");
  taskText.textContent = task.title;
  Render(taskContainer, taskText);

  return taskContainer;
}

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

    const taskComponent = createTaskComponent(i, currentTask);
    Render(main, taskComponent);
  }
}

export function renderScheduledTasks() {
  const main = document.querySelector("#main");
  main.replaceChildren();

  for (let i = 0; i < todoList.length; i++) {
    const currentTask = todoList[i];

    if (currentTask.dueDate) {
      const taskComponent = createTaskComponent(i, currentTask);
      Render(main, taskComponent);
    }
  }
}

export function showTaskDetails(element) {
  const taskDetails = document.querySelector("#task-details");
  taskDetails.style.display = "flex";

  const index = element.dataset.key;

  const task = todoList[index];

  const checkMark =
    taskDetails.querySelector(".checkmark-wrapper").firstElementChild;

  if (task.status) {
    checkMark.classList.add("checkmark");
  } else {
    checkMark.classList.remove("checkmark");
  }

  const taskTitle = document.querySelector("#task-title-text");
  taskTitle.textContent = task.title;

  const dueDate = taskDetails.querySelector("#due-date");
  dueDate.setAttribute("data-key", `${index}`);

  const taskDate = document.querySelector("#task-date-text");
  taskDate.textContent = `Created on ${task.dateCreated}`;

  const taskNote = document.querySelector("#task-note-text");
  taskNote.setAttribute("data-key", `${index}`);

  if (task.description) {
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

export function toggleStatus(element) {
  const index = Number(element.dataset.key);
  const task = todoList[index];

  if (task.status === false) {
    task.status = true;
  } else {
    task.status = false;
  }

  element.firstElementChild.classList.toggle("checkmark");
}

export function setImportant(taskId) {
  const index = Number(taskId);
  const task = todoList[index];

  if (task.important === false) {
    task.important = true;
  } else {
    task.important = false;
  }

  renderTasks();
}

export function setDueDate() {
  const element = document.querySelector("#due-date");
  const dueDate = format(new Date(element.value), "dd/MMM/yyyy");
  const index = element.dataset.key;

  const task = todoList[index];

  task.dueDate = dueDate;

  console.log(task.dueDate === format(new Date(), "dd/MMM/yyyy"));
}

export function handleTask() {
  const task = createTask();
  storeTask(task);
  renderTasks();
}
