import SidebarComponent from "./modules/sidebarComponent.js";
import Main from "./modules/main.js";
import Render from "./modules/render.js";

import "./style.css";

window.onload = (event) => {
  const body = document.getElementsByTagName("body")[0];
  const sidebarComponent = SidebarComponent();
  const main = Main();

  Render(body, sidebarComponent);
  Render(body, main);
};
