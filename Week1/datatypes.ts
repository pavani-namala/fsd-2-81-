let Name:string="Pavani";
let age:number=20;
let active:boolean=true;
console.log("Name datatype:"+typeof Name);
console.log("age datatype:"+typeof age);
console.log("active datatype:"+typeof active);

function display(name:string,age:number,active:boolean):void{
    console.log(`User:${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active?"Active":"Unactive"}`);
}

display(Name,age,active);