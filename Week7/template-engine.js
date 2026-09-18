const express = require("express");

const app = express();

// Configure EJS
app.set("view engine", "ejs");

// Read data submitted from HTML form
app.use(express.urlencoded({ extended: true }));

// Display movie form
app.get("/", (req, res) => {
    res.render("movie", {
        movie: "",
        rating: "",
        result: ""
    });
});

// Receive movie data
app.post("/movie", (req, res) => {

    const movie = req.body.movie;
    const rating = Number(req.body.rating);

    // Validation
    if (!movie || Number.isNaN(rating) || rating < 0 || rating > 10) {
        return res.send("Please enter a valid movie name and rating between 0 and 10.");
    }

    // Check movie result
    let result;

    if (rating >= 7) {
        result = "HIT";
    } else {
        result = "NOT A HIT";
    }

    // Send data to EJS
    res.render("movie", {
        movie: movie,
        rating: rating,
        result: result
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});