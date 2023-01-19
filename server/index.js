const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to our project</h1>');
});

app.listen(7000, () => {
  console.log('server is running on port http://localhost:' + 7000);
});
