const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    let filePath = req.url === "/" ? "index.html" : req.url.substring(1);

    // Resolve the requested file path
    const fullPath = path.join(__dirname, filePath);

    // Check if the file exists
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
        } else {
            let contentType = "text/html";

            if (filePath.endsWith(".js")) contentType = "application/javascript";
            if (filePath.endsWith(".css")) contentType = "text/css";

            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
