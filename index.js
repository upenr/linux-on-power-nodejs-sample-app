const http = require('http')

const os = require('os');
const networkInterfaces = os.networkInterfaces();
const ipAddress = networkInterfaces['eth0'][0].address;

const hostname = ipAddress;
//const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  const message = {content: 'Welcome to IBM Infrastructure Technical Training!'};
  res.write(JSON.stringify(message) + '\n');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});