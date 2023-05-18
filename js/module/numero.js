export default function initNumero() {
  const numeros = document.querySelectorAll("[data-numero]");

  function initAnimation() {
    numeros.forEach((num) => {
      const texto = +num.innerText;
      let total = 0;
      const incremento = Math.floor(texto / 100);
      const timer = setInterval(() => {
        total = total + incremento;
        num.innerText = total;
        if (total > texto) {
          num.innerText = texto;
          clearInterval();
        }
      }, 25 * Math.random());
      timer;
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      initAnimation();
    }
  }

  const targetObserver = document.querySelector(".numero");
  const observer = new MutationObserver(handleMutation);

  observer.observe(targetObserver, { attributes: true });
}
