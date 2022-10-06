const express = require('express');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",(request,response)=>{
	response.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
	var x = Number(req.body.first);
	var y = Number(req.body.second);
	res.send( "The bmi is: " + x/(y*y));
});

app.listen(3000,()=>console.log("server is running"));
