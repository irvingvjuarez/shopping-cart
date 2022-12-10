const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")

const cartButton = document.querySelector(".navbar-shopping-cart")
const hamburguerButton = document.querySelector(".hamburguer-btn")

const menuTriggers = [
    {
        id: "desktop",
        menu: desktopMenu,
        button: cartButton,
    },
    {
        id: "mobile",
        menu: mobileMenu,
        button: hamburguerButton,
    }
]

menuTriggers.forEach(trigger => {
    trigger.button.addEventListener("click", () => trigger.menu.classList.toggle("hidden"))
})