// index.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const app = express();
const PORT = 3001;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta para la página principal
app.get('/', (req, res) => {
  const postsDir = path.join(__dirname, 'posts');
  fs.readdir(postsDir, (err, files) => {
    if (err) {
      res.status(500).send('Error al leer los posts');
    } else {
      res.render('index', { files });
    }
  });
});

// Ruta para mostrar una publicación
app.get('/post/:filename', (req, res) => {
  const postPath = path.join(__dirname, 'posts', `${req.params.filename}.md`);
  
  fs.readFile(postPath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Post no encontrado');
    } else {
      const htmlContent = marked(data);
      res.render('post', { content: htmlContent });
    }
  });
});

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
