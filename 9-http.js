const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to Home Page");
    } else if (req.url === "/about") {
        res.end("Welcome to about page");
    } else {
        res.end(`
            <h1>Oops, the page was not found</h1>
            <p>You might have not created the page</p>
            <a href="/">Go back</a>
        `);
    }
});

server.listen(5000);
