
const campoRegistro = document.querySelector('#campoRegistro');
const botaoDeslogar = document.querySelector('#botaoDeslogar');

const dadosCadastroJSON = localStorage.getItem('dadosCadastro');
const dadosCadastro = JSON.parse(dadosCadastroJSON);

const novoHTML = document.createElement('div');
novoHTML.innerHTML = `
    <div class="dadosCadastro">
        <h3>Dados Pessoais</h3>
        <ul id="ulDadosCadastro">
            <li>Nome completo: ${dadosCadastro.seuPrimeiroNome} ${dadosCadastro.seuSobrenome}</li>
            <li>Telefone celular: ${dadosCadastro.telefoneCelular}</li>
            <li>Telefone residêncial: ${dadosCadastro.telefoneResidencial}</li>
            <li>Data de nascimento: ${dadosCadastro.dataNascimento}</li>
            <li>CPF: ${dadosCadastro.cpf}</li>
            <li>CEP: ${dadosCadastro.seuCEP}</li>
            <li>Endereço: ${dadosCadastro.seuLogradouro} - ${dadosCadastro.seuNumeroCasa}, ${dadosCadastro.seuBairro} - ${dadosCadastro.seuUF}</li>
        </ul>
        <h3>Dados da Conta</h3>
        <ul id="ulDadosCadastro">
            <li>E-mail: ${dadosCadastro.seuEmail}</li>
            <li>Senha: *** <a href="#" id="mudarSenha">Mudar</a></li>
        </ul>
    </div>
`;
campoRegistro.appendChild(novoHTML);

botaoDeslogar.addEventListener('click', () => {
    dadosCadastro.logado = 0;
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
    window.location.href = 'tela_login.html';
})