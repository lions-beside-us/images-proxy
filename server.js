const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const path = require('path');
const port = 80;
const chalk = require('chalk');

app.use(express.static(path.join(__dirname, 'client')));

app.use('/songdata/', createProxyMiddleware({
  target: 'http://localhost:1000',
  changeOrigin: true
}));

app.use('/relatedTracks/', createProxyMiddleware({
  target: 'http://3.15.220.99:3001',
  changeOrigin: true
}));

app.use('/artistBio/', createProxyMiddleware({
  target: 'http://34.220.154.45:2000',
  changeOrigin: true
}));

app.use('/comments/', createProxyMiddleware({
  target: 'http://3.138.151.252:4000',
  changeOrigin: true
}));

app.use('/hashtags/', createProxyMiddleware({
  target: 'http://3.19.209.147:4001',
  changeOrigin: true
}));

app.use('/users/', createProxyMiddleware({
  target: 'http://3.16.151.4:4002',
  changeOrigin: true
}));

app.use('/:current', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/', createProxyMiddleware({
  target: 'http://34.220.154.45:2000',
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(chalk.magenta(`Listening on port http://localhost:${port}`));
});

module.exports = app;