let codigo = document.querySelector('#codigoPeca');
let nome = document.querySelector('#nomePeca');
let quantidade = document.querySelector('#quantidadePeca');
let indice = document.querySelector('#indice');
let resultado = document.querySelector('#resultado');


function carregarPecas(){
    fetch('../db/bancoDePecas.php')
        .then(resposta => resposta.json())
        .then(resposta => {

            let listaHTML = '';

            let chaves = Object.keys(resposta);

            for(let i = 0; i < chaves.length; i++){

                let indicePeca = chaves[i];

                listaHTML += `
                    <div>
                        <p>
                            Nome: ${resposta[indicePeca].nome}<br>
                            Código: ${resposta[indicePeca].codigo}<br>
                            Quantidade: ${resposta[indicePeca].quantidade}
                        </p>
                        <button type="button"
                            onclick="editarPeca(${indicePeca},${resposta[indicePeca].codigo},'${resposta[indicePeca].nome}',${resposta[indicePeca].quantidade})">Editar   </button>
                        <button type="button"
                            onclick="deletarPeca(${indicePeca})">
                            Deletar
                        </button>
                    </div>
                `;
            }

            resultado.innerHTML = listaHTML;
        });
}


function adicionarPeca(){
    fetch('../db/bancoDePecas.php',{
        method:'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`codigo=${codigo.value}&nome=${nome.value}&quantidade=${quantidade.value}&indice=${indice.value}`
    })
    .then(r => r.json())
    .then(r => {

        if(r.info) {
            alert(r.info);
            return;
        }

        if(r.mensagem) {
            alert(r.mensagem);
        }

        carregarPecas();
        limpar();
    });
}


function editarPeca(indiceEditado, codigoEditado, nomeEditado, quantidadeEditada){
    codigo.value = codigoEditado;
    indice.value = indiceEditado;
    nome.value = nomeEditado;
    quantidade.value = quantidadeEditada;
}


function deletarPeca(indice) {
    fetch(`../db/bancoDePecas.php?indice=${indice}&deletar=DELETE`)
        .then(resposta => resposta.json())
        .then(resposta => {
            carregarPecas();
        });
}


function limpar(){
    codigo.value = '';
    nome.value = '';
    quantidade.value = '';
    indice.value = '';
}


carregarPecas();