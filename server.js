"use strict";

// 모듈
const express = require('express');
const app = express();



// 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

// app.use("/css", express.static(__dirname + '/css'));
// app.use("/assets", express.static(__dirname + '/assets'));
// app.use("/js", express.static(__dirname + '/js'));

module.exports = app;

