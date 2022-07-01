const express = require('express');

const app = express();
const hostname = "dev.nyaser.tk";

app.get('*', (req, res) => {
  if (hostCheck(req, res)) {
    res.status(404).send("404 Not Found.");
  }
});

function hostCheck(req, res) {
  if (req.hostname != hostname) {
    res.status(303).header("Location: https://" + hostname);
    return false;
  }
  return true;
}

app.listen(3000, () => {
  console.log('server started');
});
