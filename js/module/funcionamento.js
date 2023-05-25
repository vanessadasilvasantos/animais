export default class Funcionamento {
  constructor(diaDaSemana, activeClass, removeClass) {
    this.funcionamento = document.querySelector(diaDaSemana);
    this.activeClass = activeClass;
    this.removeClass = removeClass;
  }

  transformaDia() {
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horaDia = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  verificaDados() {
    this.semanaAberta = this.diaSemana.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horaAgora >= this.horaDia[0] && this.horaAgora < this.horaDia[1];
    return this.semanaAberta && this.horarioAberto;
  }

  ativaAberto() {
    if (this.verificaDados()) {
      this.funcionamento.classList.add(this.activeClass);
    } else {
      this.funcionamento.classList.add(this.removeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.transformaDia();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
