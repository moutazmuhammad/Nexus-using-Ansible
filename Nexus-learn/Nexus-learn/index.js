const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// https://blog.sonatype.com/custom-node-module-management-using-private-npm-registry-configured-in-nexus-repository