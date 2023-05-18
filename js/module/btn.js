export default function initBitcoinValor() {
  fetch("https://blockchain.info/ticker")
    .then((r) => r.json())
    .then((bitcoin) => {
      const btnPreco = document.querySelector(".btn-num");
      btnPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
