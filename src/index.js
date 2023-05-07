import MyDay from "./modules/components/myDay.js";
import Render from "./modules/render.js";

import "./assets/css/style.css";

window.onload = (event) => {
  const main = document.querySelector("#content");
  const myDay = MyDay();
  const myDayItem = document.querySelector(".menu-list-item");
  myDayItem.classList.add("active");

  Render(main, myDay);
};
