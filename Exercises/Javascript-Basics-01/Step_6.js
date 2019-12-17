function displayR() {
  var x = document.getElementById("first_number");
  var y = document.getElementById("second_number");
  var message = "The remainder of the division is :" + (x.value % y.value);
  alert(message);
}
