
const iconeMenu = document.querySelector('#iconeMenu');

iconeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});
