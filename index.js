var express = require('express');
var routesProduct = require('./routes/product');
var app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/product",routesProduct);

app.listen(5656,'0.0.0.0',()=>{
    console.log("Server started on port 5656");
})