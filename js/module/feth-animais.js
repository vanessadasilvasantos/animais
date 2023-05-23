import Numero from "./numero.js";

export default function initFethAnimal(url, target) {
  const numeroAnimais = document.querySelector(target);

  function preencheAnimais(animal) {
    const divAnimal = creatAnimal(animal);
    numeroAnimais.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const numero = new Numero("[data-numero]", ".numero", "ativo");
    numero.init();
  }

  async function fethAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => preencheAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  function creatAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animais");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  fethAnimais(url);
}
