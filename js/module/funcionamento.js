export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horaDia = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberta = diaSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horaAgora >= horaDia[0] && horaAgora < horaDia[1];

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add("aberto");
  } else {
    funcionamento.classList.add("fechado");
  }
}
