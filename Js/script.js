//-------------- Toggle --------------

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu-lateral')
const main = document.querySelector('main')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    main.classList.toggle('active');
}) 
