const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mysql = require("mysql");
const app = express();
const route = require("./routes/index");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")
var check =  function(req , res ,next)
{
    console.log("working");
    next();
}

//middleware
var corsOptions = {
    origin : "*",
    methods : "GET , HEAD , PUT , PATCH , POST , DELETE , OPTIONS",
    preflightContinue : false,
    optionsSuccessStatus : 204,
    allowedHeader : "Content-Type , X-Requested-with , authorization, accesstoken , sessionid"
}

app.use(morgan('dav'));
app.use(cors(corsOptions));
app.use(express.json());


//main route
app.use("/mtf_unloading/v1" , check , route);

/*
var definition = {
    info : {
        title : "MTF Vessel Unloading Services",
        version : "v1",
        description : "Api documentation for MTF Vessel Unloading Services"
    },
    basePath : "/"
}
var options = {
    swaggerDefinition : definition,
    apis : ["./routes/mtfRoutes.js"]
}
var swaggerSpac = swaggerJSDoc(options)
app.get("/swagger.json" , function(req , res){
    res.setHeader("Content-Type" , "application/json");
    res.send(swaggerSpac)
})
app.get("/",(req , res ,next )=>{
    res.redirect("/api-docs");
})*/

var options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : "h1",
            version : '1.0.0',
            description : "desc",
            servers : ["http://localhost:3000"]
        },
    },
    apis : ["./routes/mtfRoutes.js"]
}
const swaggerDocs = swaggerJSDoc(options)
app.use('/api-docs',swaggerUI.serve , swaggerUI.setup(swaggerDocs))




const port = 3000
app.listen( port , (err)=>{
    console.log(`server is running on port number 3000`);
})