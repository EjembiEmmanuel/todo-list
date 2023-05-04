import Render from "../render.js";

import "./important.css";

import StarIcon from "../../assets/icons/star.svg";

export default function Important() {
  const important = document.createElement("div");
  important.setAttribute("id", "important-component");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  Render(important, header);

  const starIcon = new Image();
  starIcon.setAttribute("id", "star-icon");
  starIcon.src = StarIcon;
  Render(header, starIcon);

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = "Important";
  Render(header, headerText);

  return important;
}
