const burgerMenu = document.querySelector('#burger_menu')
const blanket = document.querySelector('.blanket')
const menuList = document.querySelector('#menu')

burgerMenu.addEventListener('click', () => {
    blanket.classList.toggle('inactive')
    document.body.classList.toggle('lock')
})