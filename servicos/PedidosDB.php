<?php

class Pedidos {

    public function listarPedidos()
    {
        return json_encode($_SESSION['listaPedidos']);
    }

    public function adicionarPedido()
    {
        if (isset($_POST) && count($_POST) > 0) {

            // Percorrendo a lista de pecass
            for ($i = 0; $i < count($_SESSION['listaPecas']); $i++) {

                // Verificando se o código do pecas é igual ao código enviado
                if ($_SESSION['listaPecas'][$i]['codigo'] == $_POST['codigopecas']) {

                    // Verificando se existe estoque suficiente
                    if ($_POST['quantidade'] <= $_SESSION['listaPecas'][$i]['quantidade']) {

                        // Adicionando o pedido
                        $_SESSION['listaPedidos'][] = [
                            'codigo_pecas' => $_POST['codigopecas'],
                            'nome_pecas' => $_SESSION['listaPecas'][$i]['nome'],
                            'quantidade' => $_POST['quantidade']
                        ];

                        // Atualizando a quantidade do pecas
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
    }

    public function alterar() 
    {

    }

    public function excluir() 
    {

    }
}




