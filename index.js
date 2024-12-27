app.get('/dashboard/:instance', (req, res) => {
    const instanceName = req.params.instance;
    res.send(`
        <html>
        <head>
            <title>Detalhes da Instância: ${instanceName}</title>
        </head>
        <body>
            <h1>Detalhes da Instância: ${instanceName}</h1>
            <p>Aqui você pode configurar ou visualizar os detalhes da instância ${instanceName}.</p>
            <a href="/instancias">Voltar para Gerenciamento de Instâncias</a>
        </body>
        </html>
    `);
});
