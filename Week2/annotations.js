"use strict";
let userName = "Pavani";
let grade = 9.48;
let isActive = true;
function studentDetails(userName, grade) {
    return `${userName} has cgpa ${grade}`;
}
let studyPlaces = ["Little flower", "Bhashyam", "Tirumala", "Shri Vishnu"];
let result = studentDetails(userName, grade);
console.log(result);
console.log(`SchoolName:${studyPlaces.join(",")}`);
