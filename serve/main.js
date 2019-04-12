const express = require('express');
const path = require('path');
var app = express();
app.use(express.static(path.resolve(__dirname,'./public')));
app.listen(3001);