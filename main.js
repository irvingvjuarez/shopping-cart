const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const productDetailMenu = document.querySelector(".product-detail")

const cartButton = document.querySelector(".navbar-shopping-cart")
const hamburguerButton = document.querySelector(".hamburguer-btn")
const emailDropdownButton = document.querySelector(".email-dropdown")

const menuTriggers = [
    {
        id: "desktop",
        menu: desktopMenu,
        button: emailDropdownButton,
    },
    {
        id: "mobile",
        menu: mobileMenu,
        button: hamburguerButton,
    },
    {
        id: "productDetail",
        menu: productDetailMenu,
        button: cartButton
    }
]

menuTriggers.forEach(trigger => {
    trigger.button.addEventListener("click", () => trigger.menu.classList.toggle("hidden"))
})