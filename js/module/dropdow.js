import outsideClick from "./outsideClick.js";

export default class Dropdow {
  constructor(dropdowMenu, events) {
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.dropdowMenu = document.querySelectorAll(dropdowMenu);
    this.activeClass = "activ";

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdowMenu() {
    this.dropdowMenu.forEach((event) => {
      this.events.forEach((eventUser) => {
        event.addEventListener(eventUser, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdowMenu.legth) {
      this.addDropdowMenu();
    }
    return this;
  }
}
