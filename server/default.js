const fs = require('fs');
const path = require('path');
const express = require('express');
const spdy = require('spdy');
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

app.use(express.static(publicPath, {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
      return;
    }

    if (filePath.endsWith('manifest.json')) {
      res.setHeader('Cache-Control', 'public, max-age=0');
      return;
    }

    if (filePath.includes('favicon')) {
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return;
    }

    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const options = {
  key: fs.readFileSync('sslcert/key.pem', 'utf8'),
  cert: fs.readFileSync('sslcert/cert.pem', 'utf8'),
};

const server = spdy.createServer(options, app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}!`);
});
