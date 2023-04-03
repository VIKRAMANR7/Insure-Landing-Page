const mainMenu = document.querySelector(".top-links");
const closeMenu = document.querySelector(".close");
const openMenu = document.querySelector(".hamburger");
const mobileNavPattern = document.querySelector(".mobile-nav");

openMenu.addEventListener("click", showNav);
closeMenu.addEventListener("click", closeNav);

function showNav() {
  mainMenu.style.display = "block";
  mainMenu.style.top = "80px";
  mobileNavPattern.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  mainMenu.style.top = "-100%";
  mobileNavPattern.style.display = "none";
  document.body.style.overflow = "visible";
}
