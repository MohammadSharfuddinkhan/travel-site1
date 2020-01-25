import "../style/style.css";
import MobileMenu from "./module/MobileMenu";
import RevealOnScroll from "./module/RevealOnScroll";

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
