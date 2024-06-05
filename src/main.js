// modern normalize
import "../style/modern-normalize.css";

// styles
import "../style/style.css";

// components
import "../style/components/header.css";
import "../style/components/hero.css";

// utility
import "../style/utility.css";

//###  ham menu-effect
document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.querySelector(".ham__icon");
  const headerMenu = document.querySelector(".header__menu");

  hamIcon.addEventListener("click", function () {
    headerMenu.classList.toggle("active");
  });
});
