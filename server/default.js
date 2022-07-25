const fs = require('fs');
const path = require('path');
const express = require('express');
const https = require('https');
const compression = require('compression');

const app = express();
const port = 4780;
const publicPath = path.join(__dirname, '..', 'build');

app.use(compression());

app.use((req, res, next) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.use(express.static(publicPath, { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const privateKey = fs.readFileSync('sslcert/key.pem', 'utf8');
const certificate = fs.readFileSync('sslcert/cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}!`);
});
