export default class Acordion {
  constructor(list) {
    this.dtAcordion = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAcordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addEventAcordion() {
    this.dtAcordion.forEach((item) => {
      item.addEventListener("click", () => this.toggleAcordion(item));
    });
  }

  //iniciar função

  init() {
    if (this.dtAcordion.length) {
      this.toggleAcordion(this.dtAcordion[0]);
      this.addEventAcordion();
    }
  }
}
