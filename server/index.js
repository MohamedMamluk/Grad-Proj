const express = require('express');
const app = express();

app.listen(7000, () => {
  console.log('server is running on port http://localhost:' + 7000);
});
