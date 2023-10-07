
const botaoCriarCadastro = document.querySelector('#botaoCriarCadastro');

botaoCriarCadastro.addEventListener('click', (e) => {
    e.preventDefault();

    const seuNome = document.querySelector('#seuNome').value;
    const telefoneCelular = document.querySelector('#telefoneCelular').value;
    const telefoneResidencial = document.querySelector('#telefoneResidencial').value;
    const dataNascimento = document.querySelector('#dataNascimento').value;

    const cpf = document.querySelector('#cpf').value;
    const seuCEP = document.querySelector('#cep').value;
    const seuLogradouro = document.querySelector('#logradouro').value;
    const seuBairro = document.querySelector('#bairro').value;
    const seuUF = document.querySelector('#uf').value;
    const seuNumeroCasa = document.querySelector('#numeroCasa').value;

    const seuEmail = document.querySelector('#seuEmail').value;
    const confirmarSeuEmail = document.querySelector('#confirmarSeuEmail').value;
    const suaSenha = document.querySelector('#suaSenha').value;
    const confirmarSuaSenha = document.querySelector('#confirmarSuaSenha').value;

    const msgErroEmail = document.querySelector('#msgErroEmail');
    const msgErroSenha = document.querySelector('#msgErroSenha');
    const msgErro = document.querySelector('#msgErro');
    const logado = 1;

    if (seuEmail != confirmarSeuEmail) {
        msgErroEmail.style.display = 'block';
    } else if (suaSenha != confirmarSuaSenha) {
        msgErroSenha.style.display = 'block';
    } else if (cpf.length != 11) {
        msgErro.style.display = 'block';
    } else {
        msgErro.style.display = 'none';
        msgErroSenha.style.display = 'none';
        msgErroEmail.style.display = 'none';

        const dadosCadastro = {
          seuNome,
          telefoneCelular,
          telefoneResidencial,
          dataNascimento,
          cpf,
          seuCEP,
          seuLogradouro,
          seuBairro,
          seuNumeroCasa,
          seuUF,
          seuEmail,
          suaSenha,
          logado
      };
      localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
      window.location.href = 'registrado.html';
  }
});

