import { createItem } from "../components/ItemList";
import { items } from "./fakeApi";
import { createEmptyPage } from "../components/EmptyPage";
const app = document.querySelector("#app");
const create = document.createElement.bind(document);

const createWrapper = () => {
  const wrapper = create("div");
  wrapper.className = "wrapper";
  return wrapper;
};
const wrapper = createWrapper();

const createSection = (name) => {
  const tasks = create("section");
  tasks.className = name;
  return tasks;
};

const ctreateContainer = () => {
  const taskList = create("ul");
  taskList.className = "task__list";
  return taskList;
};

export const renderTaskList = () => {
  const section = createSection("tasks");
  const container = ctreateContainer();
  app.append(wrapper);
  wrapper.append(section);
  section.append(container);
  items.forEach((item) => {
    const taskItem = createItem(
      item.id,
      item.title,
      item.status,
      item.created,
      item.edited,
      item.number,
      item.isProject
    );
    container.append(taskItem);
  });
};

export const renderEmptyPage = () => {
  const section = createSection('no-tasks')
  const emptyPage = createEmptyPage('Не создан ни один проект')
  wrapper.append(section)
  section.append(emptyPage)
}
