const express = require("express");
const route = express.Router();

const { vesselDetailCntrl } = require("../controller/mtfDetailController")

//vessel details api's
//get api for vessel detail from sap
route.get("/vesselDetail",vesselDetailCntrl)


module.exports = route;
