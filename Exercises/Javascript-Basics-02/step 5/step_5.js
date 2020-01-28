function setNewImage() 
  {
    var x = event.target.id;
    document.querySelector("#"+x).src="images/"+x+"_2.jpg";
  }
