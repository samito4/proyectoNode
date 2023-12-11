//
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("<h1>HOLA Mundo Sami Mimun</h1>");
});
server.listen(PORT, () => {
  console.log(`Server runnning at http:localhost:${PORT}`);
});
