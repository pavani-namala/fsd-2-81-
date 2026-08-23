const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my Week 6 Express Server");
});

app.get("/home", (req, res) => {
    res.json({
        message: "Hello from my server",
        status: "success",
        time: new Date()
    });
});

app.get("/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Pavani",
            course: "AI & ML"
        },
        {
            id: 2,
            name: "Lakshmi Sri",
            course: "CSE"
        },
        {
            id: 3,
            name: "Srivalli",
            course: "Data Science"
        }
    ];

    res.json(students);
});

app.get("/product/:id", (req, res) => {
    const productId = req.params.id;

    res.json({
        productId: productId,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 599,
        available: true
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});