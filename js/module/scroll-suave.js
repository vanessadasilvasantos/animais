export default class ScrollSuave {
  constructor(links, opitions) {
    this.linksInternos = document.querySelectorAll(links);
    if (opitions === undefined) {
      this.opitions = { behavior: "smooth", block: "start" };
    } else {
      this.opitions = opitions;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.opitions);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
