function display1() {
  var n = document.getElementById("name");
  var s = document.getElementById("surname");
  var c = document.getElementById("city");
  var message = "Hello, " + n.value + " " + s.value + " from " + c.value;
  alert(message);
}
/*
function display1()
{var x = document.querySelector("input#name");
var y = document.querySelector("input#surname");
var z = document.querySelector("input#city");
var message = "Hello, "+x.value+" "+y.value+" from "+z.value;
alert (message);}
*/
