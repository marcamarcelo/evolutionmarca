const express = require('express');
const path = require('path');

const app = express();

// Configurar para servir arquivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para instâncias
app.get('/instancias', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'instancias.html'));
});

// Rota para dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
