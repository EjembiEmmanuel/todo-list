import Avatar from "../assets/icons/avatar.svg";
import DayIcon from "../assets/icons/day.svg";
import StarIcon from "../assets/icons/star.svg";
import ScheduleIcon from "../assets/icons/schedule.svg";
import TaskIcon from "../assets/icons/task.svg";
import AddIcon from "../assets/icons/add.svg";

import "./sidebarComponent.css";

import Render from "./render.js";

export default function SidebarComponent() {
  const sidebarComponent = document.createElement("div");
  sidebarComponent.setAttribute("id", "sidebar-component");

  const userArea = document.createElement("div");
  userArea.setAttribute("id", "user-area");
  Render(sidebarComponent, userArea);

  const avatar = new Image();
  avatar.setAttribute("id", "avatar");
  avatar.src = Avatar;
  Render(userArea, avatar);

  const userDetails = document.createElement("div");
  userDetails.setAttribute("id", "user-details");
  Render(userArea, userDetails);

  const username = document.createElement("h3");
  username.setAttribute("id", "username");
  username.textContent = "Demo User";
  Render(userDetails, username);

  const useremail = document.createElement("p");
  useremail.setAttribute("id", "useremail");
  useremail.textContent = "demo@email.com";
  Render(userDetails, useremail);

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  Render(sidebarComponent, menu);

  const menuList = document.createElement("ul");
  menuList.setAttribute("id", "menu-list");
  Render(menu, menuList);

  const menuListItem1 = document.createElement("li");
  menuListItem1.setAttribute("class", "menu-list-item");
  menuListItem1.textContent = "My Day";
  Render(menuList, menuListItem1);

  const dayIcon = new Image();
  dayIcon.setAttribute("class", "menu-icons");
  dayIcon.src = DayIcon;
  Render(menuListItem1, dayIcon);

  const menuListItem2 = document.createElement("li");
  menuListItem2.setAttribute("class", "menu-list-item");
  menuListItem2.textContent = "Important";
  Render(menuList, menuListItem2);

  const starIcon = new Image();
  starIcon.setAttribute("class", "menu-icons");
  starIcon.src = StarIcon;
  Render(menuListItem2, starIcon);

  const menuListItem3 = document.createElement("li");
  menuListItem3.setAttribute("class", "menu-list-item");
  menuListItem3.textContent = "Scheduled";
  Render(menuList, menuListItem3);

  const scheduleIcon = new Image();
  scheduleIcon.setAttribute("class", "menu-icons");
  scheduleIcon.src = ScheduleIcon;
  Render(menuListItem3, scheduleIcon);

  const menuListItem4 = document.createElement("li");
  menuListItem4.setAttribute("class", "menu-list-item");
  menuListItem4.textContent = "Tasks";
  Render(menuList, menuListItem4);

  const taskIcon = new Image();
  taskIcon.setAttribute("class", "menu-icons");
  taskIcon.src = TaskIcon;
  Render(menuListItem4, taskIcon);

  const newListBtn = document.createElement("button");
  newListBtn.setAttribute("id", "new-list-btn");
  newListBtn.textContent = "New list";
  Render(sidebarComponent, newListBtn);

  const addIcon = new Image();
  addIcon.setAttribute("class", "add-icon");
  addIcon.src = AddIcon;
  Render(newListBtn, addIcon);

  return sidebarComponent;
}
