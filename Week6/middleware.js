const express = require("express");

const app = express();
const PORT = 3002;

// Custom Logging Middleware
const logger = (req, res, next) => {
    console.log("----- Request Received -----");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Time:", new Date().toLocaleString());
    console.log("----------------------------");

    next();
};

// Use the middleware
app.use(logger);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Custom middleware is working",
        status: "success"
    });
});

// Students route
app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Pavani"
        },
        {
            id: 2,
            name: "Rahul"
        }
    ]);
});

// About route
app.get("/about", (req, res) => {
    res.json({
        message: "This is the About page"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});