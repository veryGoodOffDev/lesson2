import "./style.scss";
import "@/js/register";
import { dropDownUserMenu } from "../dropDownMenu";
import avatar from "@/assets/images/userAvatar.jpg";

const createItemMenu = (path, title) => {
  const menuItem = document.createElement("li"),
    menuLink = document.createElement("a");

  menuItem.className = "menu__list-item";
  menuLink.className = "menu__list-link";
  menuLink.href = path;
  menuLink.textContent = title;
  menuItem.append(menuLink);

  return menuItem;
};

export const createHeaderNav = () => {
  const header = document.createElement("header"),
    headerInner = document.createElement("div"),
    navMenu = document.createElement("nav"),
    menuList = document.createElement("ul"),
    userButton = document.createElement("a"),
    userAvatar = document.createElement("img"),
    arrow = document.createElement("span");

  header.className = "header";
  headerInner.className = "header__inner";
  navMenu.className = "menu";
  menuList.className = "menu__list";
  userButton.className = "user__button";
  userAvatar.className = "user__img";
  userAvatar.src = avatar;
  arrow.className = "arrow down";

  header.append(headerInner);
  headerInner.append(navMenu);
  navMenu.append(menuList, userButton);
  menuList.append(
    createItemMenu("#", "Проекты"),
    createItemMenu("#", "Задачи"),
    createItemMenu("#", "Пользователи")
  );
  userButton.append(userAvatar, arrow, dropDownUserMenu());
  arrow.insertAdjacentHTML(
    "afterbegin",
    `<svg>
  <use xlink:href="#Vector" />
  </svg>`
  );

  return header;
};
