function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("body").style.marginLeft = "250px";
  document.getElementById("openbtn").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("body").style.marginLeft= "0";
  document.getElementById("openbtn").style.visibility = "visible";
}