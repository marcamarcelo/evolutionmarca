<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerente de Evolução</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f9f9f9;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;
        }
        h1 {
            margin-bottom: 20px;
            color: #4CAF50;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            border: none;
            background: #4CAF50;
            color: white;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Gerente de Evolução</h1>
        <form id="connectionForm">
            <input type="text" id="serverUrl" name="serverUrl" placeholder="URL do Servidor" required>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Número do Celular" required>
            <button type="submit">Conectar</button>
        </form>
        <div id="responseMessage" style="margin-top: 20px; color: #555;"></div>
    </div>
    <script>
        document.getElementById('connectionForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            const serverUrl = document.getElementById('serverUrl').value;
            const phoneNumber = document.getElementById('phoneNumber').value;

            try {
                const response = await fetch('/connect', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ serverUrl, phoneNumber }),
                });

                const result = await response.json();
                document.getElementById('responseMessage').innerText = result.message;
            } catch (error) {
                document.getElementById('responseMessage').innerText = 'Erro ao conectar.';
            }
        });
    </script>
</body>
</html>
