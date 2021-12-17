// date function
checkDate =  new Date();
y = checkDate.getFullYear();
m = checkDate.getMonth() + 1;
d = checkDate.getDate();
document.querySelector(".displayDate").innerHTML = m + "/" + d + "/" + y;


// time function 
// console.log(checkDate.getHours())
// console.log(checkDate.getMinutes())
setInterval(() => {
    var checkDate = new Date()
    var myTime = checkDate.toLocaleTimeString()
    document.querySelector('.displayTime').innerHTML = myTime
}, 1000)
