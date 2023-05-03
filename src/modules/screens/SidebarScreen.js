import Task from "../components/task";
import Render from "../render.js";

function taskScreenHandler() {
  const body = document.getElementsByTagName("body")[0];
  const main = document.querySelector("#main");
  main.remove();
  const task = Task();
  Render(body, task);
}

export { taskScreenHandler };
