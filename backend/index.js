const express = require('express');
const path = require('path');

const app = express();

app.use('/',express.static('./../frontend/build'));
app.get('/*',function (req,res) {
    res.sendFile(path.join(__dirname,'./../frontend/build/index.html'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
    })
    
const port = process.env.PORT || 8080;
app.listen(port);

console.log('App is listening on port ' + port);
