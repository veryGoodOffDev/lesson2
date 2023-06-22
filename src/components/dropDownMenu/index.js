import "./style.scss";

const createItemsDrop = (text) => {
  const menuItem = document.createElement("li");
  menuItem.className = "item-menu__list-item";
  menuItem.textContent = text;
  return menuItem;
};

export const dropDownMenuItem = (id) => {
  const dropDownMenu = document.createElement("ul");
  dropDownMenu.className = "item-menu__list";
  dropDownMenu.id = id;
  const itemEdit = createItemsDrop('Редактировать')
  const itemDelete = createItemsDrop('Удалить')
  itemEdit.classList.add('edit')
  itemDelete.classList.add('delete')
  dropDownMenu.append(
    itemEdit, itemDelete
  );
  return dropDownMenu;
};

export const dropDownUserMenu = () => {
  const dropDownMenu = document.createElement("ul");
  dropDownMenu.className = "user__dropdown";
  dropDownMenu.append(createItemsDrop("Профиль"), createItemsDrop("Выход"));
  return dropDownMenu;
};
