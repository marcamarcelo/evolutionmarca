const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware para parse de JSON
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de instâncias
app.get('/instancias', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'instancias.html'));
});

// Rota para a página do dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Rota para reiniciar uma instância
app.post('/reiniciar', (req, res) => {
    const instancia = req.body.instancia;
    console.log(`Reiniciando a instância: ${instancia}`);
    res.send(`Instância ${instancia} reiniciada com sucesso.`);
});

// Rota para desconectar uma instância
app.post('/desconectar', (req, res) => {
    const instancia = req.body.instancia;
    console.log(`Desconectando a instância: ${instancia}`);
    res.send(`Instância ${instancia} desconectada com sucesso.`);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
