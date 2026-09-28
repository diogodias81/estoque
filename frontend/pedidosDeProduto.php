<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de peças</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Registre as peças!</h1>
    <div class="container">
        <div class="card">
            <form>

                <input type="hidden" id="indice">
                <div>
                    <label>codigo</label>
                    <input type="number" id="codigoPeca">
                </div>
                <div>
                    <label>Nome Da Peça</label>
                    <input type="text" id="nomePeca">
                </div>
                <div>
                    <label>Quantidade</label>
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
    </div>

    <script src="../js/produtos.js"></script>
</body>
</html>