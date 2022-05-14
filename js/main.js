(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header__active");
    } else {
      header.classList.remove("header__active");
    }
  };
})();

// Burger headler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuCloseItem = document.querySelector(".header__nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header_nav_active");
  });
})();

// Scroll to anchors

(function () {
  // Плавный скрол.
  const smoothScroll = function (targetEl, duration) {
    // Высота header. Что бы не перекрывало при скроле.
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;
    // Обработчик скрола. Как будет анимироваться скролл.
    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    // Функция анимации.
    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };
  // Обработчик событий по самим ссылкам.
  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
