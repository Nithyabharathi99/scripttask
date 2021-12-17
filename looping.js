var proglog = [`java`,`python`,`javascript`]
console.log(proglog.length)

var show = ''

// for loop

// for (var i of  proglog) {
//     console.log(i);
//     show += i<"<br />";
// }

// while loop
var i=0;
while(i < proglog.length) {
    show += proglog[i]+"<br />"
    i++
}
// var i=0;
// do {
//     show += proglog[i]+"<br />"
//     i++
// } while (i < proglog.length);

document.querySelector(`.displaylag`).innerHTML = show