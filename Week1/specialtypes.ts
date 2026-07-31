//any datatype
let flexibleValue:any=23456;
flexibleValue="I can also use String";
flexibleValue=false;

//unknown variable
let mysteryValue:unknown="Hello pavani";
if(typeof mysteryValue==="string"){
    console.log("Length:"+mysteryValue.length);
}

//node variable
function notification(message:string):void{
    console.log("Alert:"+message);
}
notification("All is Well");