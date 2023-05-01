import TodoIcon from "../assets/icons/todo_icon.svg";
import Avatar from "../assets/icons/avatar.svg";
import "./sidebar.css";

import Render from "./render.js";

export default function Sidebar() {
  const sidebar = document.createElement("div");
  sidebar.setAttribute("id", "sidebar");

  // const navbar = document.createElement("nav");
  // const logoArea = document.createElement("div");

  // const logoImg = document.createElement("img");

  // const logoText = document.createElement("h1");

  const userArea = document.createElement("div");

  const avatar = new Image();
  avatar.src = Avatar;

  Render(userArea, avatar);

  // const userEmail = document.createElement("p");

  Render(sidebar, userArea);

  return sidebar;
}
