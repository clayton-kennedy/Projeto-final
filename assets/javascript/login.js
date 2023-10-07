
const botaoLogin = document.querySelector('#botaoLogin');

const dadosCadastroJSON = localStorage.getItem('dadosCadastro');
const dadosCadastro = JSON.parse(dadosCadastroJSON);

if (dadosCadastro && dadosCadastro.logado == 1) {
    window.location.href = 'registrado.html';
    dadosCadastro.logado = 1;
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
} else {
botaoLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
if (dadosCadastro && email == dadosCadastro.seuEmail && senha == dadosCadastro.suaSenha){
    console.log(dadosCadastro.logado);
    dadosCadastro.logado = 1;
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
    window.location.href = 'registrado.html';
} else {
    alert('Dados incorretos.')
}
})
}