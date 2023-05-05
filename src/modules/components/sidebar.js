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
        let myDayComponent = document.querySelector("#my-day-component");
        if (!myDayComponent) {
          if (main.children.length > 0) {
            let current = document.querySelector(".active");
            current.classList.remove("active");
            main.children.item(0).remove();
          }
          myDayComponent = MyDay();
          this.classList.add("active");
          Render(main, myDayComponent);
        }
        break;
      case 1:
        let importantComponent = document.querySelector("#important-component");
        if (!importantComponent) {
          if (main.children.length > 0) {
            let current = document.querySelector(".active");
            current.classList.remove("active");
            main.children.item(0).remove();
          }
          importantComponent = Important();
          this.classList.add("active");
          Render(main, importantComponent);
        }
        break;
      case 2:
        let scheduleComponent = document.querySelector("#schedule-component");
        if (!scheduleComponent) {
          if (main.children.length > 0) {
            let current = document.querySelector(".active");
            current.classList.remove("active");
            main.children.item(0).remove();
          }
          scheduleComponent = Schedule();
          this.classList.add("active");
          Render(main, scheduleComponent);
        }
        break;
      case 3:
        let taskComponent = document.querySelector("#task-component");
        if (!taskComponent) {
          if (main.children.length > 0) {
            let current = document.querySelector(".active");
            current.classList.remove("active");
            main.children.item(0).remove();
          }
          taskComponent = Task();
          this.classList.add("active");
          Render(main, taskComponent);
          break;
        }
    }
  })
);