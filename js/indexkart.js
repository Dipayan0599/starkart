
function myFunction() {
  var txt;
  var person = prompt("Mobile Number:");
  
  
  var person = prompt("One Time Password:");
  document.getElementById("index.html").innerHTML = txt;
}


var countDownDate = new Date("Aug 15, 2020 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("deals-day-text").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("deals-day-text").innerHTML = "EXPIRED";
  }
}, 1000);
