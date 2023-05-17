import Render from "../render.js";

import "../../assets/css/myDay.css";

export default function MyDay() {
  const myDay = document.createElement("div");
  myDay.setAttribute("id", "my-day-component");

  const header = document.createElement("div");
  header.setAttribute("id", "header");
  Render(myDay, header);

  const headerText = document.createElement("h1");
  headerText.setAttribute("id", "header-text");
  headerText.textContent = "Welcome!";
  Render(header, headerText);

  const main = document.createElement("div");
  main.setAttribute("id", "main");
  Render(myDay, main);

  return myDay;
}
