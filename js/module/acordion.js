export default function activeAcordion() {
  const dtAcordion = document.querySelectorAll("[data-js='acordion'] dt");
  const activeClass = "ativo";

  function acordionFaq() {
    this.nextElementSibling.classList.toggle(activeClass);
    this.classList.toggle(activeClass);
  }

  if (dtAcordion.length) {
    dtAcordion[0].nextElementSibling.classList.add(activeClass);
    dtAcordion[0].classList.add(activeClass);

    dtAcordion.forEach((item) => {
      item.addEventListener("click", acordionFaq);
    });
  }
}
