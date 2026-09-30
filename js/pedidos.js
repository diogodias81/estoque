let pecas = document.querySelector('#pecas')
let quantidadePedida = document.querySelector('#quantidadePecas')
let listaPedidos = document.querySelector('#lista-pedidos')
let indice = document.querySelector('#indice')


function carregarpecass() {
    fetch('../db/bancoDePecas.php')
    .then(resposta => resposta.json())
    .then(resposta=> {
        
        let listaHTML = '<option value="">SELECIONE...</option>';
        
            for(let i= 0; i < resposta.length; i++){
                listaHTML+= ` <option value="${resposta[i].codigo}">    
                                ${resposta[i].nome} -
                                Estoque: ${resposta[i].quantidade}
                                </option>`
            }

            pecas.innerHTML = listaHTML;
            
        });
}

function carregarPedidos(){
    fetch("../db/bancoDePedidos.php?acao=C")
    .then(resposta => resposta.json())
    .then(resposta => {
            let listaHTML = '';

            for(let i= 0; i < resposta.length; i++){
                listaHTML+= `<p>
                quantidade:${resposta[i].quantidade}<br> 
                nome: ${resposta[i].nome_pecas} <br>
                codigo: (${resposta[i].codigo_pecas})</p>`
            }

            listaPedidos.innerHTML = listaHTML;

    });
}

function adicionarPedido(){
    fetch('../db/bancoDePedidos.php',{
        method:'POST',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `acao=I&codigopecas=${pecas.value}&quantidade=${quantidadePedida.value}`
        })
        .then(r => r.json())
        .then(r => {
        if(r.info) {
            alert(r.info); return;
        }
            if(r.mensagem) {
            alert(r.mensagem);
            
            quantidadePedida.value = '';

            
            carregarPedidos();
            carregarpecass();
        }
    })
}

carregarpecass();
carregarPedidos();