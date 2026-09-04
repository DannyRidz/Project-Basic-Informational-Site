const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((request, response) => {
  let fileName;
  let statusCode = 200;

  switch (request.url) {
    case "/":
      fileName = "index.html";
      break;
    case "/about":
      fileName = "about.html";
      break;
    case "/contact-me":
      fileName = "contact-me.html";
      break;
    default:
      fileName = "404.html";
      statusCode = 404;
  }

  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.end("Internal Server Error");
      return;
    }

    response.writeHead(statusCode, { "Content-Type": "text/html" });
    response.end(content);
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
