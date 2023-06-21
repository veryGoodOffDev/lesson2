const app = document.querySelector("#app");

app.addEventListener("click", (e) => {
  displayMenuItem(e);
  selectActiveMenu(e);
  showUserDropDown(e);
});

function displayMenuItem(event) {
  const allNavMenu = document.querySelectorAll(".item-menu");
  const isNavMenu = event.target.closest(".item-menu");
  const allMenuLists = document.querySelectorAll(".item-menu__list");

  const dropDownMenu = event.target.hasChildNodes()
    ? event.target.lastChild
    : null;

  if (!isNavMenu || !dropDownMenu) {
    allNavMenu.forEach((menu) => {
      menu.classList.remove("show");
      allMenuLists.forEach((list) => {
        list.classList.remove("show-menu");
      });
    });
  } else if (isNavMenu) {
    event.target.classList.toggle("show");
    dropDownMenu.classList.toggle("show-menu");
  } else {
    allNavMenu.forEach((menu) => {
      menu.classList.remove("show");
    });
    allMenuLists.forEach((list) => {
      list.classList.remove("show-menu");
    });
  }
}

function selectActiveMenu(event) {
  const allLinks = document.querySelectorAll(".menu__list-link");
  const isNavLink = event.target.closest(".menu__list-link");
  if (isNavLink) {
      allLinks.forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
    
  }
}

function showUserDropDown(event) {
  const isUserButton = event.target.closest(".user__button");
  const userDropDown = document.querySelector(".user__dropdown");
  const usrButton = document.querySelector(".user__button");
  console.log(isUserButton);
  if (isUserButton) {
    isUserButton.classList.toggle("active");
    userDropDown.classList.toggle("show-menu");
  } else {
    usrButton.classList.remove("active");
    userDropDown.classList.remove("show-menu");
  }
}
