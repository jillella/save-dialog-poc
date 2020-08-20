const express = require('express');
var cors = require('cors')
var path = require('path')
var app = express();
app.use(cors())
app.use(express.static(
    path.join(__dirname, "public"),
    {
        setHeaders: (res) => {
            res.setHeader('Content-Disposition', "attachment")
            res.setHeader('filename', "sample.txt")
        }
    }
));

app.listen(3000, () => {
    console.log('server started');
});