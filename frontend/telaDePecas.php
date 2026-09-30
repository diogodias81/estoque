<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de peças</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="textoPrincipal">Registre as peças!</h1>
        <div class="card">
            
            <form>

                <input type="hidden" id="indice">
                <div>
                    <label>codigo:</label>
                    <input type="number" id="codigoPeca">
                </div>
                <div>
                    <label>Nome Da Peça:</label>
                    <input type="text" id="nomePeca">
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input type="text" id="quantidadePeca">
                </div>

                <div>
                    <button type="button" onclick="adicionarPeca()">Salvar </button>
                    <button type="button" onclick="limpar()">Limpar</button>
                </div>  
            </form>
        
        </div>
        <div class="card2">
            <div id="resultado"></div>
        </div>
            <a href="telaDeRegistro.php">Pedidos</a>

    </div>
    <script src="../js/pecas.js"></script>
</body>
</html>
