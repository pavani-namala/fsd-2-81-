"use strict";
//any datatype
let flexibleValue = 23456;
flexibleValue = "I can also use String";
flexibleValue = false;
//unknown variable
let mysteryValue = "Hello pavani";
if (typeof mysteryValue === "string") {
    console.log("Length:" + mysteryValue.length);
}
//node variable
function notification(message) {
    console.log("Alert:" + message);
}
notification("All is Well");
