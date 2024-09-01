var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var tasksRouter = require('./routes/tasks');
var app = express();
var port = 3232;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', tasksRouter);
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
