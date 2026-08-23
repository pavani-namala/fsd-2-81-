const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// Users route
app.get("/users", (req, res) => {
    res.send("Users page");
});

// Route parameter
app.get("/users/:id", (req, res) => {
    res.send(`User ID is ${req.params.id}`);
});

// Query parameter
app.get("/search", (req, res) => {
    res.send(`Searching for ${req.query.name}`);
});

// Multiple query parameters
app.get("/products", (req, res) => {
    res.send(
        `Product: ${req.query.name}, Category: ${req.query.category}`
    );
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
