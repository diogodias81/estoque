<?php
session_start();
//fazer validacao de int
require '../servicos/pecasDB.php';

// unset($_SESSION['listaPecas']);

if (!isset($_SESSION['listaPecas'])) {
    $_SESSION['listaPecas'] = [];
}

$oPecas = new  Pecas();

if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == 'C') {
    echo $oPecas->listarPecas();
}


if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == 'I') {
    $oPecas->adicionarPecas();

    echo json_encode(['mensagem' => 'Peça cadastrada com sucesso']);
}


if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == 'D') {
    $oPecas->deletarPeca();

    echo json_encode(['mensagem' => 'Peça removida com sucesso']);
}