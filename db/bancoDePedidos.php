<?php

session_start();


require '../servicos/PedidosDB.php';


if (!isset($_SESSION['listaPedidos'])) {
    $_SESSION['listaPedidos'] = [];
}


//instancio a classe e crio o
$oPedido = new Pedidos();


if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == 'C') {
    echo $oPedido->listarPedidos();
}


if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == 'I') {
    $oPedido->adicionarPedido();
}

if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == 'D') {
    $oPedido->deletarPedido();
    echo json_encode(['mensagem' => 'Pedido removida com sucesso']);
}







