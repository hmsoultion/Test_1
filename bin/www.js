"use strict";

const app = require("../server");
const PORT = 8090;

app.listen(PORT, () => {
    console.log("listening on 8090");
});