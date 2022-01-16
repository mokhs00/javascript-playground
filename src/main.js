// @ts-check

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('resr');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`prot : ${PORT}`);
});
