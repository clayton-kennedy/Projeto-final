const seuNome = document.querySelector('#seuNome').value;
const seuTelefone = document.querySelector('#seuTelefone').value;
const telefoneCelular = document.querySelector('#telefoneCelular').value;
const telefoneResidencial = document.querySelector('#telefoneResidencial').value;
const dataNascimento = document.querySelector('#dataNascimento').value;
const cpf = document.querySelector('#cpf').value;
const seuEmail = document.querySelector('#seuEmail').value;
const confirmarSeuEmail = document.querySelector('#confirmarSeuEmail').value;
const criarSenha = document.querySelector('#criarSenha').value;
const confirmarSuaSenha = document.querySelector('#confirmarSuaSenha').value;
const botaoCriarCadastro = document.querySelector('#botaoCriarCadastro').value;

botaoCriarCadastro.addEventListener('click', () => {
    const dadosCadastro = {
        seuNome,
        telefoneCelular,
        telefoneResidencial,
        dataNascimento,
        cpf,
        seuEmail,
        confirmarSeuEmail,
        criarSenha,
        confirmarSuaSenha
    }

    localStorage.setItem('dadosParaLocalStorage', dadosCadastro);
})