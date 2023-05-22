import Render from "../render.js";
import TaskController from "../controllers/taskController.js";

import "../../assets/css/task.css";

import AddIcon from "../../assets/icons/add.svg";
import TaskIcon from "../../assets/icons/task.svg";

export default function Task() {
  const task = document.createElement("div");
  task.setAttribute("id", "task-component");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  Render(task, header);

  const taskIcon = new Image();
  taskIcon.setAttribute("id", "task-icon");
  taskIcon.src = TaskIcon;
  Render(header, taskIcon);

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = "Tasks";
  Render(header, headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  Render(task, main);

  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  Render(task, footer);

  const inputArea = document.createElement("div");
  inputArea.setAttribute("id", "input-area");
  Render(footer, inputArea);

  const form = document.createElement("form");
  form.setAttribute("id", "form");
  // form.setAttribute("action", "#");
  Render(inputArea, form);

  const formBtn = document.createElement("button");
  formBtn.setAttribute("id", "form-btn");
  formBtn.setAttribute("type", "submit");
  formBtn.setAttribute("onclick", "taskController.handleTask()");
  Render(form, formBtn);

  const addIcon = new Image();
  addIcon.src = AddIcon;
  Render(formBtn, addIcon);

  const formInput = document.createElement("input");
  formInput.setAttribute("id", "form-input");
  formInput.setAttribute("placeholder", "Add a task");
  Render(form, formInput);

  return task;
}
