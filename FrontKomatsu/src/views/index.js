const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de Express para usar archivos estáticos en la carpeta 'public'
app.use(express.static('public'));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
