const botaoComentar = document.getElementById('botaoComentar');
const digitarDepoimentos = document.querySelector('.digitarDepoimentos');
const postarDepoimento = document.querySelector('.postarDepoimento');
const cardDepoimentos = document.querySelector('.cardDepoimentos');
const loginDepoimentos = document.querySelector('.loginDepoimentos');
const section3 = document.querySelector('.section3');
const botaoLoginDepoimentos = document.querySelector('.botaoLoginDepoimentos');

const dadosCadastroJSON = localStorage.getItem('dadosCadastro');
const dadosCadastro = JSON.parse(dadosCadastroJSON);

botaoComentar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const dadosCadastroJSON = localStorage.getItem('dadosCadastro');
    const dadosCadastro = JSON.parse(dadosCadastroJSON);
    if (dadosCadastro && dadosCadastro.logado == 1) {
            loginDepoimentos.classList.add('hide');
            digitarDepoimentos.classList.remove('hide');
        } else {
            loginDepoimentos.classList.toggle('hide');
        }
    })
botaoLoginDepoimentos.addEventListener('click', () => {
const seuEmailDepoimentos = document.querySelector('#seuEmailDepoimentos').value;
const suaSenhaDepoimentos = document.querySelector('#suaSenhaDepoimentos').value;
    if (seuEmailDepoimentos === dadosCadastro.seuEmail && suaSenhaDepoimentos === dadosCadastro.suaSenha) {
        dadosCadastro.logado = 1;
        localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
        loginDepoimentos.classList.add('hide');
        digitarDepoimentos.classList.remove('hide');
        seuEmailDepoimentos = '';
        suaSenhaDepoimentos = '';
    } else {
    alert('Dados incorretos.')}
})
postarDepoimento.addEventListener('click', (ev) => {
    ev.preventDefault();
const depoimentoCliente = document.querySelector('#depoimentoCliente').value;
const depoimento = document.createElement('div');
        depoimento.innerHTML = `
            <div class="cardDepoimentos">
                <img src="./assets/imagens/depoimento0.jpg" alt="Imagem cliente depoimentos">
                <h4>${dadosCadastro.seuPrimeiroNome}</h4>
                <span id="depoimentoCliente">"${depoimentoCliente}"</span>
            </div>
        `;
        section3.appendChild(depoimento);
        depoimentoCliente.value = '';
        dadosCadastro.logado = 0;
        localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
        digitarDepoimentos.classList.add('hide');
})