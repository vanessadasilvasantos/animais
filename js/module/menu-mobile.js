import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuButton.classList.add("activ");
    this.menuList.classList.add("activ");
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove("activ");
      this.menuList.classList.remove("activ");
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
  }
}
