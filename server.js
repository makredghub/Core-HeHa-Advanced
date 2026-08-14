const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((request, response) => {

    let filePath;

    if (request.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
    } else {
        filePath = path.join(__dirname, "public", request.url);
    }

    fs.readFile(filePath, (error, content) => {

        if (error) {

            response.writeHead(404, {
                "Content-Type": "text/plain"
            });

            response.end("404 - Page not found");

            return;
        }

        let contentType = "text/html";

        if (filePath.endsWith(".css")) {
            contentType = "text/css";
        }

        if (filePath.endsWith(".js")) {
            contentType = "text/javascript";
        }

        response.writeHead(200, {
            "Content-Type": contentType
        });

        response.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});