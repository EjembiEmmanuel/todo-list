import Sidebar from "./modules/sidebar.js";
import Main from "./modules/main.js";
import Render from "./modules/render.js";

import "./style.css";

window.onload = (event) => {
  const body = document.getElementsByTagName("body")[0];
  const sidebar = Sidebar();
  const main = Main();

  Render(body, sidebar);
  Render(body, main);
};
