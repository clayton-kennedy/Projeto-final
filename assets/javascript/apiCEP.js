const cep = document.querySelector('#cep');
const logradouro = document.querySelector('#logradouro');
const numeroCasa = document.querySelector('#numeroCasa');
const bairro = document.querySelector('#bairro');
const uf = document.querySelector('#uf');
const modalCEP = document.querySelector('.modalCEP');
const msgErroCEP = document.querySelector('#msgErroCEP');

cep.addEventListener("blur", evento => {
    evento.preventDefault();

    let valor = cep.value;
    valor = valor.replace("-", "");

    if (valor.length != 8) {
     msgErroCEP.style.display = 'block';
    } else {
        modalCEP.style.display = 'block';
        msgErroCEP.style.display = 'none';
        fetch(`https://viacep.com.br/ws/${valor}/json/`)
            .then(response => response.json())
            .then(dadosCEP => {
                console.log(dadosCEP);
                logradouro.value = dadosCEP.logradouro;
                bairro.value = dadosCEP.bairro;
                uf.value = dadosCEP.uf;
            })
            .catch(err => {
                alert("CEP Não encontrado");
                console.log(err);
            });
    }
});
