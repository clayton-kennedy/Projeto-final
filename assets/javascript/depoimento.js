
const botaoComentar = document.getElementById('botaoComentar');
const digitarDepoimentos = document.querySelector('.digitarDepoimentos');
const postarDepoimento = document.querySelector('.postarDepoimento');
const cardDepoimentos = document.querySelector('.cardDepoimentos');
const section3 = document.querySelector('.section3');

botaoComentar.addEventListener('click', (evento) => {
    evento.preventDefault();
    digitarDepoimentos.classList.toggle('hide');
})
postarDepoimento.addEventListener('click', (evento) => {
    evento.preventDefault();
    const depoimentoCliente = document.querySelector('#depoimentoCliente').value;

    const depoimento = document.createElement('div');
    console.log(depoimentoCliente);
    depoimento.innerHTML = `
        <div class="cardDepoimentos">
            <img src="./assets/imagens/depoimento0.jpg" alt="Imagem cliente depoimentos">
            <span id="depoimentoCliente">${depoimentoCliente}</span>
        </div>
    `;
    section3.appendChild(depoimento);
    depoimentoCliente.value = '';
    depoimentoCliente.classList.add('hide');
});