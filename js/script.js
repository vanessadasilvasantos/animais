import initTabNav from "./module/tab-nav.js";
import ScrollSuave from "./module/scroll-suave.js";
import activeAcordion from "./module/acordion.js";
import activeAnimaScroll from "./module/anima-scroll.js";
import initModal from "./module/modal-abrir.js";
import initDropdow from "./module/dropdow.js";
import initMenuMobile from "./module/menu-mobile.js";
import initFuncionamento from "./module/funcionamento.js";
import initFethAnimal from "./module/feth-animais.js";
import initBitcoinValor from "./module/btn.js";

const scollSuave = new ScrollSuave('a[href^="#"]');
scollSuave.init();

activeAnimaScroll();
activeAcordion();
initTabNav();
initModal();
initDropdow();
initMenuMobile();
initFuncionamento();
initFethAnimal();
initBitcoinValor();