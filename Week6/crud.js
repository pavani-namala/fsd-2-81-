const express = require("express");

const app = express();
const PORT = 3001;

// Middleware to receive JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "CRUD API is running",
        status: "success"
    });
});

// Temporary student data
let students = [
    {
        id: 1,
        name: "Pavani",
        age: 20
    },
    {
        id: 2,
        name: "Rahul",
        age: 21
    }
];

// GET - Get all students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET - Get student by dynamic ID
app.get("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// POST - Add a new student
app.post("/students", (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// PUT - Update an existing student
app.put("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE - Delete a student
app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});