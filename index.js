const express = require('express');
const app = express();

// Rota principal
app.get('/', (req, res) => {
    res.send('Olá, Evolution Marca!');
});

// Porta configurada para Railway
const PORT = process.env.PORT || 3000;

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});

// Rota para Webhook
app.post('/webhook', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.status(200).send({ message: 'Webhook recebido com sucesso!' });
});

// Rota para página de configuração
app.get('/config', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Página de Configuração</title>
            </head>
            <body>
                <h1>Página de Configuração</h1>
                <p>Bem-vindo à página de configuração da Evolution Marca!</p>
            </body>
        </html>
    `);
});

// Rota para Gerente de Evolução
app.get('/manager', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Gerente de Evolução</title>
            </head>
            <body>
                <h1>Bem-vindo ao Gerente de Evolução</h1>
                <p>Configure suas instâncias aqui.</p>
            </body>
        </html>
    `);
});
