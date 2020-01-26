import "../style/style.css";
import "lazysizes";
import MobileMenu from "./module/MobileMenu";
import RevealOnScroll from "./module/RevealOnScroll";
import StickyHeader from "./module/StickyHeader";

new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal"*/ "./module/modal")
        .then(x => {
          modal = new x.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => console.log("thre was a problem."));
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
