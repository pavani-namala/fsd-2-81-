// Program 1 : Export Variable
export let college = "SVECW";
console.log(college);
// Program 2 : Export Function
export function greet(name) {
    console.log("Welcome " + name);
}
greet("Pavani");
// Program 3 : Export Class
export class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student:", this.name);
    }
}
let s = new Student("Kommina Hansika");
s.display();
