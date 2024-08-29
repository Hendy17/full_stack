"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var tasks_1 = require("./routes/tasks");
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/api/tasks', tasks_1.default);
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
