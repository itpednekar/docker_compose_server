var express = require('express');
var mysql = require('mysql');

var router = express();

var connection = mysql.createConnection({
    host : "172.18.4.24",
    user : "root",
    password : "root",
    database : "myapp_db",
    port : 9999
});
connection.connect();
router.use(express.json());

router.get("/",(request,response)=>{
    queryText = 'select * from product';
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
           response.send(JSON.stringify(err));
        }
    })
})
router.get("/:Id",(request,response)=>{
    queryText = `select * from product where Id = ${request.params.Id}`;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
           response.send(JSON.stringify(err));
        }
    })
})

router.post("/",(request,response)=>{
    const { id,title,description,price }= request.body;
    queryText = `insert into product values (${id},'${title}','${description}','${price}')`;
    console.log(queryText);
    connection.query(queryText,(err,result)=>{
        if(err == null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
           response.send(JSON.stringify(err));
        }
    })
})

module.exports = router;
