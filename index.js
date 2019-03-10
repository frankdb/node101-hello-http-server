// write your code here
const http = require("http");

const server = http.createServer((request, response) => {
  console.log(`Received ${request.method} request for: ${request.url}`);
  response.end("<h1>Hello World</h1>");
});

server.listen(8080, () => {
  console.log("Server is listening on localhost:8080");
});
