import Task from "../components/task";
import Render from "../render.js";

function taskScreenHandler() {
  const body = document.getElementsByTagName("body")[0];
  const main = document.querySelector("#main");

  let task = document.querySelector("#task-component");

  if (main) {
    main.remove();
  }

  if (!task) {
    task = Task();
    Render(body, task);
  }
}

export { taskScreenHandler };
