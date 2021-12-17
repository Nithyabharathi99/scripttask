/* type of function 
named function
anonymous function
immediately invoked function
*/
// named function with parameter
function addition(a,b) {
    return a+b
}
console.log(addition(7,3))
// without parameter
function nithyabharathi() {
    var display = 'power'
    var greet = 'club'
    console.log(`welcome to ${display} ${greet}`)
}nithyabharathi() 

// anonymous function
var multiply = function(a,b) {
    return a*b
}
console.log(multiply(56,90))

// invoked function
var multiply = (function(a,b) {
    return a*b
})(4,5)
console.log(multiply)

// callback
function ctc() {
    setTimeout(() => {
        tcs();
    }, 4000);
    wipro()
    console.log('welcome to ctc')
}
function wipro() {
    console.log('welcome to wipro')
}
function tcs() {
    console.log('welcome to tcs')
}
ctc()

// ifcondition
var name2='nits'
if (name2 ==  'nis') {
    console.log(`my name is ${name2}`)
}
else if (name2 == 'nits') {
    console.log(`my name is ${name2}`)
}
else {
    console.log(`given name is does n't match`)
}

// switch case
var val1=40;
var val2=50;
 var sign = `+`
switch (sign) {
    case `+`:
        console.log(`sum of ${val1} and ${val2}  is ${val1+val2}`)
        break;
    default:
        console.log(`not available`)
        break;
}
