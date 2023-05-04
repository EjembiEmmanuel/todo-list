import Render from "../render.js";
import Task from "./task.js";
import MyDay from "./myDay.js";
import Important from "./important.js";
import Schedule from "./schedule.js";

const menuBtns = document.querySelectorAll(".menu-list-item");
let main = document.querySelector("#main");

menuBtns.forEach((menuBtn, index) =>
  menuBtn.addEventListener("click", function () {
    switch (index) {
      case 0:
        let mainComponent = document.querySelector("#my-day-component");
        if (!mainComponent) {
          if (main.children.length > 0) {
            main.children.item(0).remove();
          }
          mainComponent = MyDay();
          Render(main, mainComponent);
        }
        break;
      case 1:
        let importantComponent = document.querySelector("#important-component");
        if (!importantComponent) {
          if (main.children.length > 0) {
            main.children.item(0).remove();
          }
          importantComponent = Important();
          Render(main, importantComponent);
        }
        break;
      case 2:
        let scheduleComponent = document.querySelector("#schedule-component");
        if (!scheduleComponent) {
          if (main.children.length > 0) {
            main.children.item(0).remove();
          }
          scheduleComponent = Schedule();
          Render(main, scheduleComponent);
        }
        break;
      case 3:
        let taskComponent = document.querySelector("#task-component");
        if (!taskComponent) {
          if (main.children.length > 0) {
            main.children.item(0).remove();
          }
          taskComponent = Task();
          Render(main, taskComponent);
          break;
        }
    }
  })
);
