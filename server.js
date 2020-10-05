const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const port = 5000;

app.use('/artistBio', createProxyMiddleware({
  target: 'http://localhost:2000/',
  headers: {
    method: 'GET'
  },
  changeOrigin: true
}));

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

module.exports = app;