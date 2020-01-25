import "../style/style.css";
import MobileMenu from "./module/MobileMenu";

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
