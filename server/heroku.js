const path = require('path');
const express = require('express');
const sslRedirect = require('heroku-ssl-redirect').default;

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'build');

app.use(sslRedirect());

app.use((req, res, next) => {
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up on port ${port}!`);
});
