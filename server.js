const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const path = require('path');
const port = 2001;
const chalk = require('chalk');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/artistBio', createProxyMiddleware({
  target: 'http://localhost:2000/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.use('/', createProxyMiddleware({
  target: 'http://localhost:2000/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(chalk.magenta(`Listening on port http://localhost:${port}`));
});

module.exports = app;