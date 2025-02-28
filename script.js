function toggleMenu() {
  const menu = document.querySelector(".nav-list");
  const burger = document.querySelector(".burger-menu");

  menu.classList.toggle("active");
  burger.classList.toggle("active");

  // Ubah ikon burger
  if (menu.classList.contains("active")) {
    burger.innerHTML = "✖";
  } else {
    burger.innerHTML = "☰";
  }
}
