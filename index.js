const express = require('express');
const path = require('path');

const app = express();

// Configurar para servir arquivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal (será exibida ao acessar a aplicação)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
