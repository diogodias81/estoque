<?php

session_start();

if (!isset($_SESSION['listaPedidos'])) {
    $_SESSION['listaPedidos'] = [];
}

if (!isset($_SESSION['listaPecas'])) {
    $_SESSION['listaPecas'] = [];
}

if (isset($_POST) && count($_POST) > 0) {

    // Percorrendo a lista de produtos
    for ($i = 0; $i < count($_SESSION['listaPecas']); $i++) {

        // Verificando se o código do produto é igual ao código enviado
        if ($_SESSION['listaPecas'][$i]['codigo'] == $_POST['codigoProduto']) {

            // Verificando se existe estoque suficiente
            if ($_POST['quantidade'] <= $_SESSION['listaPecas'][$i]['quantidade']) {

                // Adicionando o pedido
                $_SESSION['listaPedidos'][] = [
                    'codigo_produto' => $_POST['codigoProduto'],
                    'nome_produto' => $_SESSION['listaPecas'][$i]['nome'],
                    'quantidade' => $_POST['quantidade']
                ];

                // Atualizando a quantidade do produto
                $_SESSION['listaPecas'][$i]['quantidade'] =
                    $_SESSION['listaPecas'][$i]['quantidade'] - $_POST['quantidade'];

                die(json_encode([
                    'mensagem' => 'Item adicionado com sucesso'
                ]));
            } else {

                die(json_encode([
                    'info' => 'Quantidade maior que o estoque'
                ]));
            }
        }
    }
}

echo json_encode($_SESSION['listaPedidos']);
