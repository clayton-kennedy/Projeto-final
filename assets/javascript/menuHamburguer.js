// const iconeMenu = document.getElementById('iconeMenu');

// function mostrarMenu() {
//     const nav = document.getElementById('nav');
//     nav.classList.toggle('active');
// }
// iconeMenu.addEventListener('click', mostrarMenu);

function mostrarMenu() {
    let nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        document.querySelector('.iconeHamburguer').src = "./assets/imagens/icone-menu.png";
    } else {
        nav.classList.add('active');
        document.querySelector('.iconeHamburguer').src = "./assets/imagens/icone-menu-fechar.png";
    }
}
iconeMenu.addEventListener('click', mostrarMenu);