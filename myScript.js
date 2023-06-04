`use strict`;

function getDateTime(){
var now = new Date();
var year =now.getFullYear();
var month = now.getMonth()+1;
var day = now.getDate();
var hour = now.getHours();
var minite = now.getMinutes();
var second = now.getSeconds();

if(month.toString().length==1){
month='0'+month;
}
if(day.toString().length==1){
    day = '0'+day;
}
if(hour.toString().length==1){
hour = '0'+hour;
}
if(minite.toString().length==1){
    minite = '0'+minite;
}
if(second.toString().length==1){
    second = '0'+second;
}

var dateTime = year+ '/'+month+'/'+day+' '+hour+':'+minite+':'+second;
return dateTime;
}

setInterval(function(){
currentTime =getDateTime();
document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);