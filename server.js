const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/interviewDream'));
app.use(requireHTTPS);

// PathLocationStrategy
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/interviewDream/index.html'));
});

app.listen(port, () => console.log(`Running on ${port}`));

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
