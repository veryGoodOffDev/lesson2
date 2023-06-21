import { createItem } from "@/components/ItemList";
import { items } from "@/js/fakeApi";
import { createEmptyPage } from "@/components/EmptyPage";
import { createHeaderNav } from "@/components/Navigation";
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

export const renderHeadMenu = () => {
  const headMenu = createHeaderNav()
  wrapper.append(headMenu)
}

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

export const renderEmptyPage = (text) => {
  const section = createSection('no-tasks')
  const emptyPage = createEmptyPage(text)
  wrapper.append(section)
  section.append(emptyPage)
}