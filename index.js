const fs = require('fs/promises');
  // const readline = require('readline/promises');
fs.readFile('./README.md')
  .then(data => console.log(data.toString()))
  .catch(err => console.log(err.message));
const text = "AAAAAAAAББББ";
  fs.writeFile('./README.md',text)

const path = require('path');
const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js');
console.log("парс пути", path.parse(fullpath));
console.log(' Назва файла', path.basename(fullpath));
console.log(' Розширення файла', path.extname(fullpath));
console.log(' Перевырка на абсолютний шлях файла', path.isAbsolute(fullpath));

const siteURL = 'http://localhost:8080/users?id=5123';
const url = new URL(siteURL);

console.log(url);

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello world!');
});

server.listen(port, () => {
  console.log(`Сервер ожидает соединения на порте: ${port}`);
});

