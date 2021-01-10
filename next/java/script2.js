var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1800);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("l_main").style.display = "block";
  document.getElementByclass("ball").style.display = "block";
}
