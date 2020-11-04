const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();
const path = require('path');
const port = 80;
const chalk = require('chalk');

app.use(express.static(path.join(__dirname, 'client')));

// Frankie - Song Player
app.use('/songdata/', createProxyMiddleware({
  target: 'http://52.37.102.63:3005',
  changeOrigin: true
}));

// Nicholas - Related Tracks
app.use('/relatedTracks/', createProxyMiddleware({
  target: 'http://3.15.220.99:3001',
  changeOrigin: true
}));

// Cam - Artist/Band Bio
app.use('/artistBio/', createProxyMiddleware({
  target: 'http://34.220.154.45:2000',
  changeOrigin: true
}));

// Cam - Song Description
app.use('/songDescription/', createProxyMiddleware({
  target: 'http://localhost:2001',
  changeOrigin: true
}));

// Toly - Comments
app.use('/comments/', createProxyMiddleware({
  target: 'http://52.14.128.124:4000',
  changeOrigin: true
}));

// Toly - Hashtags
app.use('/hashtags/', createProxyMiddleware({
  target: 'http://18.189.26.97:4001',
  changeOrigin: true
}));

// Toly - Users
app.use('/users/', createProxyMiddleware({
  target: 'http://18.218.58.9:4002',
  changeOrigin: true
}));

app.use('/:current', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.log(chalk.magenta(`Listening on port http://localhost:${port}`));
});

module.exports = app;