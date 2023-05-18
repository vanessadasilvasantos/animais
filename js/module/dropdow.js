import outsideClick from "./outsideClick.js";

export default function initDropdow() {}

const dropdowMenu = document.querySelectorAll("[data-dropdow]");

dropdowMenu.forEach((event) => {
  ["touchstart", "click"].forEach((eventUser) => {
    event.addEventListener(eventUser, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.add("activ");
  outsideClick(this, ["touchstart", "click"], () => {
    this.classList.remove("activ");
  });
}
