$(document).ready(function(){
  


$(".green").click(function(){

	$(".book_red_body").height("0px");


});

$(".red_green").click(function(){

	$(".book_red_body").height("328px");


});

$(".red").click(function(){

	$(".book_red_body").height("675px");


});


$("#order").click(function(){
$(".or_book").toggleClass("widthful");
$(".m_trade").removeClass("widthful");



});

$("#trade").click(function(){
$(".m_trade").toggleClass("widthful");
$(".or_book").removeClass("widthful");




});


});

