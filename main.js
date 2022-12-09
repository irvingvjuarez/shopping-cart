const cartButton = document.querySelector(".navbar-shopping-cart")
const desktopMenu = document.querySelector(".desktop-menu")

cartButton.addEventListener("click", () => desktopMenu.classList.toggle("hidden"))