import { createItem } from "../components/ItemList";
import { items } from "./fakeApi";
const app = document.querySelector("#app");

const create = document.createElement.bind(document);
const createSection = () => {
  const tasks = create("section");
  tasks.className = "tasks";
  return tasks;
};
const ctreateContainer = () => {
  const taskList = create("ul");
  taskList.className = "task__list";
  return taskList;
};

export const renderTaskList = () => {
    const section = createSection();
    const container = ctreateContainer();
    app.append(section)
    section.append(container)
    items.forEach((item) => {
        const taskItem = createItem(item.id, item.title, item.status, item.created, item.edited, item.number, item.isProject)
         container.append(taskItem)
     })
};
