<?php

class Pecas
{
    public function listarPecas()
    {
        return json_encode($_SESSION['listaPecas']);
    }

    public function adicionarPecas()
    {

        if (isset($_POST) && count($_POST) > 0) {

            if (!$_POST['codigo']) {
                die(json_encode(['mensagem' => 'O campo Código é obrigatório']));
            }

            if (!$_POST['nome']) {
                die(json_encode(['mensagem' => 'O campo Nome é obrigatório']));
            }

            if (!$_POST['quantidade']) {
                die(json_encode(['mensagem' => 'O campo Quantidade é obrigatório']));
            }

            if ((int)$_POST['quantidade'] != $_POST['quantidade']) {
                die(json_encode([
                    'mensagem' => 'A quantidade deve ser um número inteiro'
                ]));
            }
            if ((int)$_POST['codigo'] != $_POST['codigo']) {
                die(json_encode([
                    'mensagem' => 'O codigo deve ser um número inteiro'
                ]));
            }


            if (isset($_POST['indice']) && is_numeric($_POST['indice'])) {
                $indice = $_POST['indice'];
                $_SESSION['listaPecas'][$indice]['codigo'] = $_POST['codigo'];
                $_SESSION['listaPecas'][$indice]['nome'] = $_POST['nome'];
                $_SESSION['listaPecas'][$indice]['quantidade'] = $_POST['quantidade'];
            } else {
                $_SESSION['listaPecas'][] = [
                    'codigo'     => $_POST['codigo'],
                    'nome'       => $_POST['nome'],
                    'quantidade' => $_POST['quantidade']
                ];
            }
        }

        
    }

    public function deletarPeca()
    {
        if (isset($_GET['indice']) && is_numeric($_GET['indice'])) {
            $indice = $_GET['indice'];

            // echo'<pre>'; print_r($_SESSION['listaPecas'][$indice]); die;

            array_splice($_SESSION['listaPecas'], $indice, 1);
            // unset($_SESSION['listaPecas'][$indice]);
        }
    }
}
