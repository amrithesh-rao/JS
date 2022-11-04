var net = require('net');

const options = {
    port: 8080
};

var client = net.createConnection( options, () =>{
    client.write("Hi server");
});

client.on('data', (data) => {
   console.log(data.toString());
    client.end();
});

client.on('end', () => {
    console.log('disconnected from server');
});
