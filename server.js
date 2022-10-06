const express = require('express');

const app = express();

app.listen(3000,()=>console.log("App listening on port 3000"));

app.get("/",(request,response)=>{
		console.log(request);
		response.send("<h2>Hello</h2>");
	}
);

app.get("/about",(request,response)=>{
		response.send("<h2>This is me.</h2>");
	}
);
