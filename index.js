const http = require('http');
const os = require('os');

const port = 3000;

const server = http.createServer((req, res) => {
  const response = {
    status: 'success',
    message: 'Deployed with Ansible on IBM Power',
    hostname: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    nodeVersion: process.version
  };

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(response, null, 2) + '\n');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});