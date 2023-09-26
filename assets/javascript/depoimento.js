
const botaoComentar = document.getElementById('botaoComentar');
const digitarDepoimentos = document.getElementById('digitarDepoimentos');

botaoComentar.addEventListener('click', (evento) => {
    evento.preventDefault();
    digitarDepoimentos.classList.toggle('hide');

})