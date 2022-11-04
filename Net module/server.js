var net = require('net');
var server = net.createServer();

server.on('connection',(socket)=>{
    console.log("client got connected");
    socket.write("Hi client");
    socket.on('data',data =>{
        console.log(data);
    });
    socket.on('end', () =>{
        console.log("client disconnected");
    })
});

server.listen(8080, function() { 
   console.log('server is listening');
});
