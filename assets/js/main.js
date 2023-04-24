(() => {
  const nav = document.querySelector(".header-nav-mobile");
  const btnClose = nav.querySelector(".btn-close-menu");
  const menuItems = nav.querySelectorAll(".list-item > a");
  const menuIcon = document.querySelector(".header-menu-mobile");
  const overlay = document.querySelector(".overlay");

  if (!nav || !btnClose || !menuItems || !menuIcon || !overlay) return false;

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("open-menu");
    overlay.classList.toggle("active");
  });

  btnClose.addEventListener("click", () => {
    overlay.classList.toggle("active");
    nav.classList.toggle("open-menu");
  });

  overlay.addEventListener("click", () => {
    nav.classList.toggle("open-menu");
    overlay.classList.toggle("active");
  });

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      nav.classList.remove("open-menu");
      overlay.classList.remove("active");
    });
  });
})();
