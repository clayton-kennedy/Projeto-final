const nomeCliente = document.querySelector('#nomeCliente');
const emailCliente = document.querySelector('#emailCliente');
const numeroWhats = document.querySelector('#numeroWhats');
const dataAgendamento = document.querySelector('#dataAgendamento');
const qualMedico = document.querySelector('#qualMedico');
const comentarioCliente = document.querySelector('#comentarioCliente');
const botaoAgendamento = document.querySelector('#botaoAgendamento');

botaoAgendamento.addEventListener('click', (evento) => {
   evento.preventDefault();

   alert(
   `
      Consulta agendada com sucesso!


      Nome: ${nomeCliente.value}
      E-mail: ${emailCliente.value}
      Whatsapp: ${numeroWhats.value}
      Data e Horário: ${dataAgendamento.value}
      Médico: ${qualMedico.value}
      Comentário: ${comentarioCliente.value}
   `
   )
   nomeCliente.value = '';
   emailCliente.value = '';
   numeroWhats.value = '';
   dataAgendamento.value = '';
   qualMedico.value = '';
   comentarioCliente.value = '';
   })
