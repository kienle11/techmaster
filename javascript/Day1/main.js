console.log("Hello world");
let age=20;
let email="letrungkien@gmai.com";
const pi=3.14;
//Template string
let name="Kieen"
let year =1998;
console.log(`My name is ${name}. I'm ${2023-year} years old`);

//function
function sum(a,b){
    return a+b
}
console.log(sum(3,4));

//function expression
const sum2= function(a,b){
    return a+b;
}
console.log(sum2(3,2));

//arrow function 
const sum3=(a,b) => {
    return a+b;
}
console.log(sum3(6,5))

//if-else (Lab2)
function rank(mark){
if(mark>=85){console.log("A")}
else if( mark>=70 && mark<85) { console.log("B")}
else if (mark>=40 && mark <70){console.log("C")}
else console.log("D")}
console.log(rank(50))

function max(a,b){
    return Math.max(a,b);
}
console.log(max(6,8));

//switch-case lab3 
function week(day){
switch(day){
    case 0: {console.log("Sunday"); break}
    case 1: {console.log("Monday");break;}
    case 2: {console.log("Tuesday");break}
    case 3: {console.log("Wednesday"); break}
    case 4: {console.log("Thusrday"); break}
    case 5: {console.log("Friday");break}
    case 6: {console.log("Satuday");break}
    default: {console.log("Invalid value");break}
}
}
console.log(week(0))

//vong lap for 
function repeatString(a){
    let repeatString='';
    for(let i=1; i<11; i++){
       repeatString+=a+"-"
    }
    return repeatString;
}
console.log(repeatString("a"))
