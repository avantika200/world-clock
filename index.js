function clock()
{
// alert("clock");
d= new Date();
// console.log(d);
var ind=d.toLocaleTimeString('en-US',{
    timeZone:'Asia/Kolkata',
})
console.log(ind)
document.querySelector('#india h1').innerHTML=ind;

var ame=d.toLocaleTimeString('en-US',{
    timeZone:'America/New_York',
})
console.log(ame)
document.querySelector('#America h1').innerHTML=ame;

var chi=d.toLocaleTimeString('en-US',{
    timeZone:'Asia/Shanghai',
})
console.log(chi)
document.querySelector('#China h1').innerHTML=chi;
// arr=ind.split(' ');
// indTime=(arr[1]+" "+arr[2]);
// console.log(indTime)

}
clock();
setInterval(clock,1000);