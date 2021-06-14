$(document).ready(function(){
  






});


function init() { 
 
var price_color =document.getElementsByClassName("rate");

for (var i = 0; i < price_color.length; i++) {
  var price = price_color[i].innerText;
 if (price >= 0.0) {document.getElementsById("rate").style.color = "red";}
}}
