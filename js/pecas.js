let codigo = document.querySelector('#codigoPeca');
let nome = document.querySelector('#nomePeca');
let quantidade = document.querySelector('#quantidadePeca');
let indice = document.querySelector('#indice');
let resultado = document.querySelector('#resultado');


function carregarPecas(){
    fetch('../db/bancoDePecas.php?acao=C')
        .then(resposta => resposta.json())
        .then(resposta => {

            let listaHTML = '';

            // let chaves = Object.keys(resposta);

            for(let i = 0; i < resposta.length; i++){

                // let indicePeca = chaves[i];

                listaHTML += `
                    <div>
                        <p>
                            Nome: ${resposta[i].nome}<br>
                            Código: ${resposta[i].codigo}<br>
                            Quantidade: ${resposta[i].quantidade}
                        </p>
                        <button type="button"
                            onclick="editarPeca(${i},${resposta[i].codigo},'${resposta[i].nome}',${resposta[i].quantidade})">Editar   </button>
                        <button type="button"
                            onclick="deletarPeca(${i})">
                            Deletar
                        </button>
                    </div>
                `;
            }

            resultado.innerHTML = listaHTML;
        });
}


function adicionarPeca(){
    fetch('../db/bancoDePecas.php?acao=C',{
        method:'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`acao=I&codigo=${codigo.value}&nome=${nome.value}&quantidade=${quantidade.value}&indice=${indice.value}`
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
    fetch(`../db/bancoDePecas.php?indice=${indice}&acao=D`)
        .then(resposta => resposta.json())
        .then(resposta => {
            if(resposta.mensagem) {
                alert(resposta.mensagem);
            }
            
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