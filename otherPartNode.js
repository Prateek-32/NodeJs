var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/index_1.html',function(req,res){
    res.sendFile(__dirname+"/index_1.html");
});
app.post('/Details',urlencodedParser,function(req,res){
    response={
        fname:req.body.fname,
        lname:req.body.lname
    }
    console.log(response);
    res.send(JSON.stringify(response));
});

var server=app.listen(3000,function(){
    console.log("server is on");
});