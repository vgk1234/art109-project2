var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
      
btn1.onclick = function() {
  modal1.style.display = "block";
}
      
btn2.onclick = function() {
  modal2.style.display = "block";
}
      
btn3.onclick = function() {
  modal3.style.display = "block";
}
      
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  
  if (event.target == modal1) {
     modal1.style.display = "none";
  }
  
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }

  else if (event.target == modal3) {
    modal3.style.display = "none";
  }

}
