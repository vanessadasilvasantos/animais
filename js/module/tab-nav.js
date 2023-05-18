export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function tabAtivo(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add("ativo");
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", function () {
        tabAtivo(index);
      });
    });
  }
}
