import Render from "../render.js";
import Todo from "../todo.js";

import "../../assets/css/taskController.css";

import { format } from "date-fns";

function createTaskComponent(taskId, task) {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task-container");
  taskContainer.setAttribute("data-key", `${taskId}`);
  taskContainer.setAttribute("onclick", "taskController.showTaskDetails(this)");

  const circleIcon = document.createElement("div");
  circleIcon.setAttribute("class", "checkmark-wrapper");
  circleIcon.setAttribute("data-key", `${taskId}`);
  circleIcon.setAttribute("onclick", "taskController.toggleStatus(this)");
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

  if (task.dueDate) {
    const dueDate = document.createElement("p");
    dueDate.setAttribute("class", "due-date");

    if (task.dueDate === format(new Date(), "dd/MMM/yyyy")) {
      dueDate.textContent = "Due today";
    } else {
      dueDate.textContent = `Due on ${format(
        new Date(task.dueDate),
        "E dd MMM yyyy"
      )}`;
    }
    Render(taskContainer, dueDate);
  }

  return taskContainer;
}

function createTask() {
  const input = document.querySelector("#form-input");

  const dateCreated = format(new Date(), "E dd MMM yyyy");

  const todo = new Todo(input.value, dateCreated, false);

  return todo;
}

function storeTask(task) {
  let todoList = JSON.parse(localStorage.getItem("todoList"));

  if (todoList === null) {
    todoList = [];
  }

  localStorage.setItem("task", JSON.stringify(task));
  todoList.push(task);
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function updateTask(task, index) {
  let todoList = JSON.parse(localStorage.getItem("todoList"));

  localStorage.setItem("task", JSON.stringify(task));
  todoList[index] = task;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

export function renderTasks() {
  const main = document.querySelector("#main");
  main.replaceChildren();

  let todoList = JSON.parse(localStorage.getItem("todoList"));

  if (todoList !== null) {
    for (let i = 0; i < todoList.length; i++) {
      const currentTask = todoList[i];

      const taskComponent = createTaskComponent(i, currentTask);
      Render(main, taskComponent);
    }
  }
}

export function renderMyDayTasks() {
  const main = document.querySelector("#main");
  main.replaceChildren();

  let todoList = JSON.parse(localStorage.getItem("todoList"));

  if (todoList !== null) {
    for (let i = 0; i < todoList.length; i++) {
      const currentTask = todoList[i];

      if (currentTask.dueDate) {
        if (currentTask.dueDate === format(new Date(), "dd/MMM/yyyy")) {
          const taskComponent = createTaskComponent(i, currentTask);
          Render(main, taskComponent);
        }
      }
    }
  }
}

export function renderScheduledTasks() {
  const main = document.querySelector("#main");
  main.replaceChildren();

  let todoList = JSON.parse(localStorage.getItem("todoList"));

  if (todoList !== null) {
    for (let i = 0; i < todoList.length; i++) {
      const currentTask = todoList[i];

      if (currentTask.dueDate) {
        const taskComponent = createTaskComponent(i, currentTask);
        Render(main, taskComponent);
      }
    }
  }
}

export function showTaskDetails(element) {
  const taskDetails = document.querySelector("#task-details");
  taskDetails.style.display = "flex";

  const index = element.dataset.key;

  let todoList = JSON.parse(localStorage.getItem("todoList"));

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
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
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
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  const task = todoList[index];
  task.description = note;

  updateTask(task, index);

  renderTasks();
}

export function toggleStatus(element) {
  const index = Number(element.dataset.key);
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  const task = todoList[index];

  if (task.status === false) {
    task.status = true;
  } else {
    task.status = false;
  }

  element.firstElementChild.classList.toggle("checkmark");

  updateTask(task, index);
}

export function setDueDate() {
  const element = document.querySelector("#due-date");

  if (element.value !== "") {
    const dueDate = format(new Date(element.value), "dd/MMM/yyyy");
    const index = element.dataset.key;

    let todoList = JSON.parse(localStorage.getItem("todoList"));

    const task = todoList[index];
    task.dueDate = dueDate;

    updateTask(task, index);
    renderTasks();
  }
}

export function handleTask() {
  const task = createTask();
  storeTask(task);
  renderTasks();
}
