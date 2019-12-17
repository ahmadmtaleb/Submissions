function display1() {
  var x = document.getElementById("shoe_size");
  var y = document.getElementById("year");
  var z = (x.value * 2 + 5) * 50 - y.value + 1766;
  var message = "The result is :" + z;
  alert(message);
}
