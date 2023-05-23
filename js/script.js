import TabNav from "./module/tab-nav.js";
import ScrollSuave from "./module/scroll-suave.js";
import Acordion from "./module/acordion.js";
import activeAnimaScroll from "./module/anima-scroll.js";
import Modal from "./module/modal-abrir.js";
import initDropdow from "./module/dropdow.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFethAnimal from "./module/feth-animais.js";
import initBitcoinValor from "./module/btn.js";

const scollSuave = new ScrollSuave('a[href^="#"]');
scollSuave.init();

const acordion = new Acordion("[data-js='acordion'] dt");
acordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

activeAnimaScroll();
initDropdow();
initMenuMobile();
initFuncionamento();
initBitcoinValor();

initFethAnimal("./animais.json", ".numero-grid");
