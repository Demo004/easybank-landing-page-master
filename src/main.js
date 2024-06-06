// modern normalize
import "../style/modern-normalize.css";

// styles
import "../style/style.css";

// components
import "../style/components/header.css";
import "../style/components/hero.css";
import "../style/components/about.css";
import "../style/components/blog.css";
import "../style/components/footer.css";

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


// ###header scroll shadow effects
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
      header.classList.add('shadow');
  } else {
      header.classList.remove('shadow');
  }
});


// ### scroll behavior
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
