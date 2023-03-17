document.getElementById("yo").onclick= function(){
	console.log("capturamos el evento click");
document.getElementById("Hecho").innerHTML="Florencia Rangugni. Estudiante de programación. Email: florenciarangugni@gmail.com";
}
document.getElementById("Nombre").onmouseover = function() {mouseOver()};
document.getElementById("Nombre").onmouseout = function() {mouseOut()};
function mouseOver() {
  document.getElementById("Nombre").style.color = "#a7223b";
}
function mouseOut() {
  document.getElementById("Nombre").style.color = "#6a4343";
}

function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}
function normalImg(x) {
  x.style.height = "128px";
  x.style.width = "128px";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("mas");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer mas"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer menos"; 
    moreText.style.display = "inline";
  }
}

document.getElementById("ref").onclick= function(){
	console.log("capturamos el evento click");
document.getElementById("Referencias").innerHTML="RRHH.LeaBla@gmail.com";
}