const nomeCliente = document.getElementById('nomeCliente');
const emailCliente = document.getElementById('emailCliente');
const numeroWhats = document.getElementById('numeroWhats');
const dataAgendamento = document.getElementById('dataAgendamento');
const nomeMedico = document.getElementById('medico');
const comentarioCliente = document.getElementById('comentarioCliente');
const botaoAgendamento = document.getElementById('botaoAgendamento');
const ulAgendado = document.getElementById('ulAgendado');

botaoAgendamento.addEventListener('click', () => {

     const novaLI = document.createElement('li');
     novaLI.innerHTML = `
        <li>Nome: ${nomeCliente.value}</li><br>
        <li>Email: ${emailCliente.value}</li><br>
        <li>Número de Whatsapp: ${numeroWhats.value}</li><br>
        <li>Médico(a): ${nomeMedico.value}</li><br>
        <li>Data e hora: ${dataAgendamento.value}</li><br>
        <li>Comentário: ${comentarioCliente.value}</li><br>
     `;
     ulAgendado.innerHTML = novaLI;
})
 