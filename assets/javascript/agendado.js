const agendado = document.querySelector('#agendado');

const dadosAgendamentoJSON = localStorage.getItem('dadosAgendamento');
const dadosAgendamento = JSON.parse(dadosAgendamentoJSON);

const novoHTML = document.createElement('div');
novoHTML.innerHTML = `
        <div class="dadosAgendamento">
        <span><h1>Agendado com sucesso!</h1></span><br>
            <ul>
            <li>Nome: ${dadosAgendamento.nomeCliente}</li>
            <li>E-mail: ${dadosAgendamento.emailCliente}</li>
            <li>Telefone: ${dadosAgendamento.numeroWhats}</li>
            <li>Data e Horário ${dadosAgendamento.dataAgendamento}</li>
            <li>Médico: ${dadosAgendamento.qualMedico}</li>
            <li>Comentário: ${dadosAgendamento.comentarioCliente}</li>
            </ul>
        </div>
`;
agendado.appendChild(novoHTML);