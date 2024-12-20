const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá, Evolution Marca!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});
app.post('/webhook', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.status(200).send({ message: 'Webhook recebido com sucesso!' });
});
app.get('/config', (req, res) => {
    res.send(`
        <h1>Página de Configuração</h1>
        <p>Bem-vindo à página de configuração da Evolution Marca!</p>
    `);
});
