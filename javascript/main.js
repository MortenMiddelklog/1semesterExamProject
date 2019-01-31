// JavaScript Document

// https://codepen.io/g13nn/pen/eHGEF
$( document ).ready(function() {

$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var flying = document.getElementById("cta");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
	flying.classList.add("cta-sticky");
  } else {
    navbar.classList.remove("sticky");
	flying.classList.remove("cta-sticky");
  }
}
