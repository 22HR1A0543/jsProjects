var myBirthDate=new Date("Jun 13,2026 00:00:00").getTime();
var x=setInterval(function(){
    var today=new Date().getTime();
    var difference= myBirthDate-today;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML=minutes ;

    document.getElementById("seconds").innerHTML= seconds;

},1000);
function details() {
  const days = document.getElementById("days").innerText;
  const hours = document.getElementById("hours").innerText;
  const minutes = document.getElementById("minutes").innerText;
  const seconds = document.getElementById("seconds").innerText;

  alert(` My Birthday is on June 13! 
 Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);
}
