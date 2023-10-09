const agendado = document.querySelector('#agendado');

const dadosAgendamentoJSON = localStorage.getItem('dadosAgendamento');
const dadosAgendamento = JSON.parse(dadosAgendamentoJSON);

const dadosCadastroJSON = localStorage.getItem('dadosCadastro');
const dadosCadastro = JSON.parse(dadosCadastroJSON);

const novoHTML = document.createElement('div');
novoHTML.innerHTML = `
        <div class="dadosAgendamento">
        <span><h1>Agendado com sucesso!</h1></span><br>
            <ul>
            <li>Nome completo: ${dadosCadastro.seuPrimeiroNome} ${dadosCadastro.seuSobrenome}</li>
            <li>E-mail: ${dadosCadastro.seuEmail}</li>
            <li>Telefone celular: ${dadosCadastro.telefoneCelular}</li>
            <li>Data: ${dadosAgendamento.dataAgendamento}</li>
            <li>Horário: ${dadosAgendamento.horarioAgendamento}</li>
            <li>Tipo de atendimento: ${dadosAgendamento.tipoAtendimento}</li>
            <li>Médico: ${dadosAgendamento.qualMedico}</li>
            <li>Comentário: ${dadosAgendamento.comentarioCliente}</li>
            </ul>
        </div>
`;
agendado.appendChild(novoHTML);