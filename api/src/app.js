require('dotenv').config({ path: '../.env'});

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const domain = process.env.DOMAIN;
 
app.get('/', (req, res) => {
  res.send('Hello World');
});
 
app.listen(port, () => {
    console.log('server started on ' + domain + ':' + port);
});