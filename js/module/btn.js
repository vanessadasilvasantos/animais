export default function initBitcoinValor(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const btnPreco = document.querySelector(target);
      btnPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
