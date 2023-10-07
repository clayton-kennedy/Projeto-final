
const iconeMenu = document.querySelector('#iconeMenu');

iconeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
});

const sair = document.getElementById('sair');
sair.addEventListener('click', () => {
    dadosCadastro.logado = 0;
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
})