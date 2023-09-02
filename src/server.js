import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
viewEngine(app);
initWebRoutes(app);

// Port Undefined  => port = 6969
let port = process.env.PORT || 6969;


app.listen(port, ()=>{
    //callback
    console.log("Backend Nodejs Running  on the port:"+port);
});