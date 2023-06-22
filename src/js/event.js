const app = document.querySelector("#app");
app.addEventListener("click", (e) => {
  selectActiveMenu(e);
  showUserDropDown(e);
  hideMenu(e)
});


function selectActiveMenu(event) {
  const allLinks = document.querySelectorAll(".menu__list-link");
  const isNavLink = event.target.closest(".menu__list-link");
  if (isNavLink) {
    if(isNavLink.classList.contains('active')){
      return
    }
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
  if (isUserButton) {
    isUserButton.classList.toggle("active");
    userDropDown.classList.toggle("show-menu");
  } else {
    usrButton.classList.remove("active");
    userDropDown.classList.remove("show-menu");
  }
}

function hideMenu(event){
  const allNavButtons = document.querySelectorAll('.item-menu')
  const allDropDownMenu = document.querySelectorAll('.item-menu__list')
  if(!event.target.classList.contains('item-menu')) {
    allNavButtons.forEach((navButton) => {
      navButton.classList.remove('show')
    })
    allDropDownMenu.forEach((menu) => {
      menu.classList.remove('show-menu')
    })
  }
}


export function setDropDownMenu() {
  const allNavButtons = document.querySelectorAll('.item-menu')
  allNavButtons.forEach((navMenu) => {
    navMenu.addEventListener('click', () => {
      const currentMenu = navMenu.closest('.item-menu')
      if(currentMenu) {
          currentMenu.classList.toggle('show')
          currentMenu.childNodes[1].classList.toggle('show-menu')
      } 
      if(!currentMenu) {
        navMenu.classList.remove('show-menu')
      }
    })
  })
}