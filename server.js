var http = require("http");
var fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hello Node!!!!</h1>\n");
  res.end();
});
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.err("error");
  }
  console.log("Data written successfully!");
  fs.readFile("welcome.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
server.listen(3000, "localhost", () => {
  console.log("server running at http://localhost:3000/");
});
