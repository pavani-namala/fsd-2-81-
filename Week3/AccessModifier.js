"use strict";
// Program 1 : Public Access Modifier
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name:", this.name);
    }
}
let s1 = new Student("Pavani");
console.log("Accessing Public Variable:", s1.name);
s1.display();
// Program 2 : Private Access Modifier
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    showBalance() {
        console.log("Balance:", this.balance);
    }
}
let account = new BankAccount(5000);
account.showBalance();
// Program 3 : Protected Access Modifier
class Employee {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(salary) {
        super(salary);
    }
    display() {
        console.log("Manager Salary:", this.salary);
    }
}
let manager = new Manager(75000);
manager.display();
