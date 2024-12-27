const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware para processar JSON do formulário
app.use(bodyParser.json());

// Configurar para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para processar a conexão
app.post('/connect', (req, res) => {
    const { serverUrl, phoneNumber } = req.body;

    if (!serverUrl || !phoneNumber) {
        return res.status(400).json({ message: 'Preencha todos os campos.' });
    }

    // Simulação de lógica de conexão (substitua com sua lógica real)
    res.json({ message: `Conectado ao servidor ${serverUrl} com o número ${phoneNumber}` });
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
