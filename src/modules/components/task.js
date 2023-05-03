import Render from "../render.js";

import "./task.css";

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

  return task;
}
