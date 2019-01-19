const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);

const controller = require('./controller');

socket(server, {
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

app.get('/', controller.index);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server on port ${port}`);
});
