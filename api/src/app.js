require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3001
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port, () => {
    console.log('server started on ' + process.env.DOMAIN + ':' + port);
});