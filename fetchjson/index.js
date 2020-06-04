"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var url = "https://jsonplaceholder.typicode.com/todos/1";
node_fetch_1["default"](url)
    .then(function (res) { return res.json(); })
    .then(function (result) {
    console.log(result);
});
