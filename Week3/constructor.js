"use strict";
class Student {
    myName;
    age;
    year;
    college;
    constructor(myName, age, year, college) {
        this.myName = myName ?? "Pavani";
        this.age = age ?? 19;
        this.year = year ?? 3;
        this.college = college ?? "Shri Vishnu Engineering College for Women";
    }
    displayDetails() {
        console.log(`Student Details:`);
        console.log(`Student:${this.myName}`);
        console.log(`Age:${this.age}`);
        console.log(`College:${this.college}`);
    }
}
const s1 = new Student("Geetha", 18, 2, "Bits");
const s2 = new Student(undefined, 26, 4, undefined);
s1.displayDetails();
s2.displayDetails();
