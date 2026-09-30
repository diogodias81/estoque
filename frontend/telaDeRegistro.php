<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pedidos</title>
</head>
<body>

<h1>Solicite Seus Pedidos</h1>

    <form>
    
        <input type="hidden" id="indice">
        <div>
            <label>Prouto:</label>
            <br>
            <select id="pecas"></select>
        </div>
        <div>
            <label>Quantidade:</label>
            <br>
            <input type="number" id="quantidadePecas">
        </div>
        <div>
            <button type="button" onclick="adicionarPedido()">Adicionar Pedido</button>
        </div>

        <h2>Lista De Pedidos</h2>

        <div id="lista-pedidos"></div>

    </form>

    <a href="telaDePecas.php">voltar</a>
    
    <script src="../js/pedidos.js"></script>

</body>
</html>