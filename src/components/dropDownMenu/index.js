import "./style.scss";

const createItemsDrop = (text) => {
  const menuItem = document.createElement("li");
  menuItem.className = "item-menu__list-item";
  menuItem.textContent = text;

  if (text === "Редактировать") {
    menuItem.classList.add("edit");
  } else if (text === "Удалить") {
    menuItem.classList.add("delete");
  }

  return menuItem;
};

export const dropDownMenuItem = (id) => {
  const dropDownMenu = document.createElement("ul");
  dropDownMenu.className = "item-menu__list";
  dropDownMenu.id = id;
  dropDownMenu.append(
    createItemsDrop("Редактировать"),
    createItemsDrop("Удалить")
  );
  return dropDownMenu;
};

export const dropDownUserMenu = () => {
  const dropDownMenu = document.createElement("ul");
  dropDownMenu.className = "user__dropdown";
  dropDownMenu.append(createItemsDrop("Профиль"), createItemsDrop("Выход"));
  return dropDownMenu;
};
