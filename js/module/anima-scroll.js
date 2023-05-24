export default class AnimaScroll {
  constructor(target) {
    this.sections = document.querySelectorAll(target);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.flor(offset - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageXOffset > item.offset) {
        item.element.classList.add("ativo");
      } else {
        item.element.section.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.section.leght) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.animaScroll);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.animaScroll);
  }
}
