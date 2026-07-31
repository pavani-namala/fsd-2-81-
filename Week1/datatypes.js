"use strict";
let Name = "Pavani";
let age = 20;
let active = true;
console.log("Name datatype:" + typeof Name);
console.log("age datatype:" + typeof age);
console.log("active datatype:" + typeof active);
function display(name, age, active) {
    console.log(`User:${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active ? "Active" : "Unactive"}`);
}
display(Name, age, active);
