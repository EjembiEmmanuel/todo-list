import Render from "../render.js";

import "../../assets/css/schedule.css";

import ScheduleIcon from "../../assets/icons/schedule.svg";

export default function Schedule() {
  const schedule = document.createElement("div");
  schedule.setAttribute("id", "schedule-component");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  Render(schedule, header);

  const scheduleIcon = new Image();
  scheduleIcon.setAttribute("id", "star-icon");
  scheduleIcon.src = ScheduleIcon;
  Render(header, scheduleIcon);

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = "Schedule";
  Render(header, headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  Render(schedule, main);

  return schedule;
}
