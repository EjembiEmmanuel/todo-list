import Render from "../render.js";
import Todo from "../todo.js";
import List from "../list.js";

import { format } from "date-fns";

import ListIcon from "../../assets/icons/list-icon.svg";
import AddIcon from "../../assets/icons/add.svg";

import "../../assets/css/listController.css";

function createList(value, index) {
  const list = document.createElement("li");
  list.setAttribute("class", "list-item");
  list.setAttribute("data-key", `${index}`);
  list.setAttribute("data-name", `${value}`);
  list.setAttribute("onclick", "listController.displayListComponent(this)");

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

  let tasks = [];

  list = new List(list, tasks);

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

  const list = document.querySelector(`[data-name=${value}]`);

  displayListComponent(list);
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
  formBtn.setAttribute("onclick", "listController.handleListTask()");
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

  if (current) {
    current.classList.remove("active");
  }
  element.classList.add("active");

  let index = element.dataset.key;

  let lists = JSON.parse(localStorage.getItem("lists"));

  const list = lists[index];

  const listComponent = createListComponent(list);

  Render(main, listComponent);
  renderListTasks(element.dataset.name);
}

function createListTaskComponent(taskId, task) {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "task-container");
  taskContainer.setAttribute("data-key", `${taskId}`);
  taskContainer.setAttribute(
    "onclick",
    "listController.showListTaskDetails(this)"
  );

  const circleIcon = document.createElement("div");
  circleIcon.setAttribute("class", "checkmark-wrapper");
  circleIcon.setAttribute("data-key", `${taskId}`);
  circleIcon.setAttribute("onclick", "listController.toggleStatus(this)");
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

function createListTask() {
  const input = document.querySelector("#form-input");

  const dateCreated = format(new Date(), "E dd MMM yyyy");

  const todo = new Todo(input.value, dateCreated, false);

  return todo;
}

function updateListTask(task, index) {
  let currentList = document.querySelector(".active").dataset.name;

  let lists = JSON.parse(localStorage.getItem("lists"));

  for (let i = 0; i < lists.length; i++) {
    if (currentList === lists[i].name) {
      let list = lists[i].tasks;

      localStorage.setItem("task", JSON.stringify(task));
      list[index] = task;
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  }
}

export function showListTaskDetails(element) {
  const taskDetails = document.querySelector("#task-details");
  taskDetails.style.display = "flex";

  const index = element.dataset.key;

  let currentList = document.querySelector(".active").dataset.name;

  let lists = JSON.parse(localStorage.getItem("lists"));

  for (let i = 0; i < lists.length; i++) {
    if (currentList === lists[i].name) {
      let list = lists[i].tasks;

      const task = list[index];

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
        list.splice(index, 1);
        localStorage.setItem("lists", JSON.stringify(lists));
        renderListTasks(currentList);
        hideTaskDetails();
      };
    }
  }
}

export function hideTaskDetails() {
  const taskDetails = document.querySelector("#task-details");

  taskDetails.style.display = "none";
}

export function toggleStatus(element) {
  const index = Number(element.dataset.key);

  let currentList = document.querySelector(".active").dataset.name;

  let lists = JSON.parse(localStorage.getItem("lists"));

  for (let i = 0; i < lists.length; i++) {
    if (currentList === lists[i].name) {
      let list = lists[i].tasks;

      let task = list[index];

      if (task.status === false) {
        task.status = true;
      } else {
        task.status = false;
      }

      element.firstElementChild.classList.toggle("checkmark");

      updateListTask(task, index);
    }
  }
}

export function setDueDate() {
  const element = document.querySelector("#due-date");

  if (element.value !== "") {
    const dueDate = format(new Date(element.value), "dd/MMM/yyyy");
    const index = element.dataset.key;

    let currentList = document.querySelector(".active").dataset.name;

    let lists = JSON.parse(localStorage.getItem("lists"));

    for (let i = 0; i < lists.length; i++) {
      if (currentList === lists[i].name) {
        let list = lists[i].tasks;

        let task = list[index];

        task.dueDate = dueDate;

        updateListTask(task, index);
        renderListTasks(currentList);
      }
    }
  }
}

export function setDescription(taskId) {
  const taskNote = document.querySelector("#task-note-text");
  const note = taskNote.value;

  const index = Number(taskId);

  let currentList = document.querySelector(".active").dataset.name;

  let lists = JSON.parse(localStorage.getItem("lists"));

  for (let i = 0; i < lists.length; i++) {
    if (currentList === lists[i].name) {
      let list = lists[i].tasks;

      let task = list[index];

      task.description = note;

      updateListTask(task, index);
      renderListTasks(currentList);
    }
  }
}

function storeListTask(listName, task) {
  let lists = JSON.parse(localStorage.getItem("lists"));

  if (lists === null) {
    lists = [];
  }

  for (let i = 0; i < lists.length; i++) {
    if (listName === lists[i].name) {
      let list = lists[i];

      localStorage.setItem("task", JSON.stringify(task));
      list.tasks.push(task);
      localStorage.setItem("lists", JSON.stringify(lists));
    }
  }
}

export function renderListTasks(listName) {
  const main = document.querySelector("#main");
  main.replaceChildren();

  let lists = JSON.parse(localStorage.getItem("lists"));

  if (lists !== null) {
    for (let i = 0; i < lists.length; i++) {
      if (listName === lists[i].name) {
        let list = lists[i].tasks;

        for (let i = 0; i < list.length; i++) {
          const currentTask = list[i];

          const taskComponent = createListTaskComponent(i, currentTask);
          Render(main, taskComponent);
        }
      }
    }
  }
}

export function handleListTask() {
  const task = createListTask();
  let currentList = document.querySelector(".active").dataset.name;

  storeListTask(currentList, task);
  renderListTasks(currentList);
}
