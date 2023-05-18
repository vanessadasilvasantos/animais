import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstar"];

  function openMenu() {
    menuButton.classList.add("activ");
    menuList.classList.add("activ");
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove("activ");
      menuList.classList.remove("activ");
    });
  }

  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}
