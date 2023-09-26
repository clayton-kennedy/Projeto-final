const nomeCliente = document.querySelector('#nomeCliente');
const emailCliente = document.querySelector('#emailCliente');
const numeroWhats = document.querySelector('#numeroWhats');
const dataAgendamento = document.querySelector('#dataAgendamento');
const qualMedico = document.getElementById('qualMedico');
const comentarioCliente = document.querySelector('#comentarioCliente');
const botaoAgendamento = document.querySelector('#botaoAgendamento');
const ulAgendado = document.getElementById('ulAgendado');

botaoAgendamento.addEventListener('click', () => {

     const novaLI = document.createElement('li');
     novaLI.innerHTML = `
        <li>Nome: ${nomeCliente.value}</li><br>
        <li>Email: ${emailCliente}</li><br>
        <li>Número de Whatsapp: ${numeroWhats}</li><br>
        <li>Médico(a): ${qualMedico}</li><br>
        <li>Data e hora: ${dataAgendamento}</li><br>
        <li>Comentário: ${comentarioCliente}</li><br>
     `;
     ulAgendado.innerHTML = novaLI;
     console.log(ulAgendado);
})