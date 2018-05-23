var express= require('express');
var path= require('path')
var fs = require('fs')
var app = express()
var bodyParser=require('body-parser')

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.get('/subs.html',function(req, resp){
console.log("receiving connection")
resp.sendFile('subs.html',{root:__dirname})


})
app.get('/subs.html', function(req, res){ 

res.sendFile('index.css',{root:__dirname})

res.end();
});
app.post('/subs.html',function(req, resp){

console.log(JSON.stringify(req.body))




resp.writeHead(200, { 'Content-Type': 'text/plain' });

console.log(JSON.stringify(req.body))

resp.end()

})
app.listen(port,function(){

  console.log("Listening!")
})
