const express = require("express");
const app = express();
const mtfRoute = require("./mtfRoutes");

app.use("/mtf/" , mtfRoute)

module.exports = app;