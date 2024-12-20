const express = require('express');
const app = express();

// Chave da API configurada
const API_KEY = 'my-secret-api-key-22210507'; // Sua chave

// Middleware para validar a chave API
app.use((req, res, next) => {
    const apiKey = req.header('x-api-key'); // Cabeçalho onde a chave deve ser enviada
    if (apiKey !== API_KEY) {
        return res.status(401).send('Chave de API inválida');
    }
    next();
});

// Rota principal (testar a conexão)
app.get('/', (req, res) => {
    res.send('Olá, Evolution Marca!');
});

// Configuração da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});
