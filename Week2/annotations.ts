let userName:string="Pavani";
let grade:number=9.48;
let isActive:boolean=true;

function studentDetails(userName:string,grade:number):string{
    return `${userName} has cgpa ${grade}`;
}

let studyPlaces:string[]=["Little flower","Bhashyam","Tirumala","Shri Vishnu"];
let result:string=studentDetails(userName,grade);
console.log(result);

console.log(`SchoolName:${studyPlaces.join(",")}`);