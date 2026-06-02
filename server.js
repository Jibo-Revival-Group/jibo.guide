const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'docs')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Friendly 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'docs', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Jibo Guide running at http://localhost:${PORT}`);
});
