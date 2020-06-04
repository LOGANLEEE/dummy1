const http = require('http');
const cralwer = require('utils/crawler');
const { PrismaClient } = require('@prisma/client');

const hostname = '127.0.0.1';
const port = 3333;

cralwer.start();

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
