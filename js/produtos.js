let codigo = document.querySelector('#codigoPeca');
let nome = document.querySelector('#nomePeca');
let quantidade = document.querySelector('#quantidadePeca');
let indice = document.querySelector('#indice');
let resultado = document.querySelector('#resultado')



function carregarPecas(){
    fetch('../db/bancoDeProdutos.php')
    .then(resposta =>resposta.json())
    .then(resposta=>{ 
        let elementoHTML = '';
        for(let i = 0; i < resposta.length;i++){
                elementoHTML += `<div id="produto-${i}"
                <div>            
                    <p>
                            Nome: ${resposta[i].nome}<br> Código${resposta[i].codigo}<br>Quantidade:<strong>${resposta[i].quantidade}</strong>
                            <button type="button" onclick="editarProduto(${i}, ${resposta[i].codigo}, '${resposta[i].nome}', ${resposta[i].quantidade})">Editar</button>
                            <button type="button" onclick="deletarProduto(${i})">Deletar</button>
                    </p>
                </div>    
                `
        }
        resultado.innerHTML = elementoHTML;
    })
}



function adicionarPeca(){
    fetch('../db/bancoDeProdutos',{
        method:'POST',
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:`codigo=${codigo.value}&nome=${nome.value}&quatidade=${quantidade.value}&indice=${indice.value}`
    })
    .then(r => r.json())
    .then(r =>{
        //passar a funcao de carregar lista
        carregarPecas()
    })
}
