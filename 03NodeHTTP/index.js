// HTTP Module in Node.js is used to create an HTTP server that listens to server ports and gives a response back to the client.
// We can include the HTTP module by using the require() method.
//

const http = require('http');

// Create a server
const server = http.createServer((req,res)=>{
    res.write('<h1>Hello World</h1>'); // Write a response to the client
    res.end("<h2>Hello World</h2>"); // End the response
})

server.listen(3000, 'localhost', ()=>{
    console.log('Server is running on http://localhost:3000');
})