const express = require('express');
const opn = require('opn');

const app = express();
const PORT = 3000;
const INDEXURL = `http://localhost:${PORT}/index.html`;

app.get('/', (req, res) => {
  res.send('This is root path, please type filename full path to url')
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`util-static-server running on ${INDEXURL}`);
  opn(INDEXURL)
});
