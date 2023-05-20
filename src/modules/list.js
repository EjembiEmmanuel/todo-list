import Render from "./render.js";

import AddIcon from "../assets/icons/add.svg";
import TaskIcon from "../assets/icons/task.svg";

export default class List {
  constructor(name) {
    this.name = name;
    this.component = this.createComponent();
  }

  createComponent() {
    const listComponent = document.createElement("div");
    listComponent.setAttribute("id", "list-component");

    const header = document.createElement("div");
    header.setAttribute("id", "header");
    Render(listComponent, header);

    const taskIcon = new Image();
    taskIcon.setAttribute("id", "task-icon");
    taskIcon.src = TaskIcon;
    Render(header, taskIcon);

    const headerText = document.createElement("h1");
    headerText.setAttribute("id", "header-text");
    headerText.textContent = this.name;
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
}
