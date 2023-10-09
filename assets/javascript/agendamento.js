const botaoAgendamento = document.querySelector('#botaoAgendamento');
const loginAgendamento = document.querySelector('.loginAgendamento');
const agendamento = document.querySelector('.agendamento');
const botaoLoginAgendamento = document.querySelector('#botaoLoginAgendamento');

const dadosCadastroJSON = localStorage.getItem('dadosCadastro');
const dadosCadastro = JSON.parse(dadosCadastroJSON);

if (dadosCadastro && dadosCadastro.logado == 1) {
    loginAgendamento.style.display = 'none';
    agendamento.style.display = 'flex';
    dadosCadastro.logado = 1;
    localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
 } else {
    loginAgendamento.style.display = 'flex';
 }
botaoLoginAgendamento.addEventListener('click', () => {
    const seuEmailAgendamento = document.querySelector('#seuEmailAgendamento').value;
    const suaSenhaAgendamento = document.querySelector('#suaSenhaAgendamento').value;

    if (dadosCadastro && seuEmailAgendamento === dadosCadastro.seuEmail && suaSenhaAgendamento === dadosCadastro.suaSenha) {
      dadosCadastro.logado = 1;
      localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));
      loginAgendamento.style.display = 'none';
      agendamento.style.display = 'flex';
    } else {
      alert("Dados inválidos!");
    }
  });
  botaoAgendamento.addEventListener('click', () => {
    const dataAgendamento = document.querySelector('#dataAgendamento').value;
    const horarioAgendamento = document.querySelector('#horarioAgendamento').value;
    const tipoAtendimento = document.querySelector('#tipoAtendimento').value;
    const qualMedico = document.querySelector('#qualMedico').value;
    const comentarioCliente = document.querySelector('#comentarioCliente').value;
    const dadosDoAgendamento = {
      dataAgendamento,
      horarioAgendamento,
      tipoAtendimento,
      qualMedico,
      comentarioCliente,
    };
    localStorage.setItem('dadosAgendamento', JSON.stringify(dadosDoAgendamento));
    window.location.href = 'agendado.html';
  });
