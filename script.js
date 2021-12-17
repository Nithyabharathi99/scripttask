// var a=30;
// var a=40;
// console.log(a);

// let a1=30;
// let a1=50;
// console.log(a1);

// const b2=30;
// const b2=60;
// console.log(a2);

const btn=document.createElement("button");
btn.innerHTML="new button";
document.body.appendChild(btn);

// arithematic operators
var a=30;
var b=70;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
// assign operators
console.log(a**b)
console.log(a+=b)
console.log(a&=b)

// string operators
var firstname= "nithya";
var nextname="bharathi";
var fullname;
fullname=firstname+nextname;
firstname+=nextname;
console.log(fullname);

// comparision operators
var newval1=50;
var newval2=50;
var check=newval1==newval2
console.log(check)

// conditional operators
var check1=newval1==40?`same value`:`different value`
console.log(check1);

// logical operators
var check2=newval1==50 || newval2==80?`right`:`wrong`
console.log(check2);

// instance of operators
let myDate = new Date();
myDate instanceof Date;
myDate instanceof Object;
myDate instanceof String;
// var myfruits=["apple","orange"];
//  myfruits instanceof string;
console.log(myDate instanceof String);
console.log(myDate instanceof Object);
console.log(myDate instanceof Array);

// typeof operator
var movies = "john"
console.log(typeof movies);
