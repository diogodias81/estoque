let produto = document.querySelector('#produto')
let quantidadePedida = document.querySelector('#quantidadePecas')
let listaPedidos = document.querySelector('#lista-pedidos')
let indice = document.querySelector('#indice')


function carregarProdutos() {
    fetch('../db/bancoDeProdutos.php')
    .then(resposta => resposta.json())
    .then(resposta=> {
        let listaHTML = '<option value="">SELECIONE...</option>';
        
            for(let i= 0; i < resposta.length; i++){
                listaHTML+= ` <option value="${resposta[i].codigo}">    
                                ${resposta[i].nome} -
                                Estoque: ${resposta[i].quantidade}
                                </option>`
            }

            produto.innerHTML = listaHTML;
            
        });
}

function carregarPedidos(){
    fetch('../db/bancoDePedidos.php')
    .then(resposta => resposta.json())
    .then(resposta => {
            let listaHTML = '';

            for(let i= 0; i < resposta.length; i++){
                listaHTML+= `<p>
                quantidade:${resposta[i].quantidade}<br> 
                nome: ${resposta[i].nome_produto} <br>
                codigo: (${resposta[i].codigo_produto})</p>`
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
        body: `codigoProduto=${produto.value}&quantidade=${quantidadePedida.value}`
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
            carregarProdutos();
        }
    })
}

carregarProdutos();
carregarPedidos();