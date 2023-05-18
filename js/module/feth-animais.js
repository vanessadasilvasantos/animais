import initNumero from "./numero.js";

export default function initFethAnimal() {
  async function fethAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numeroAnimais = document.querySelector(".numero-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = creatAnimal(animal);
        numeroAnimais.appendChild(divAnimal);
      });
      initNumero();
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
  fethAnimais("./animais.json");
}
