export default class Numero {
  constructor(numero, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numero);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrementarNumero(num) {
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
  }

  initAnimation() {
    this.numeros.forEach((num) => {
      this.constructor.incrementarNumero(num);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.initAnimation();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    this.addMutationObserver();
    return this;
  }
}
