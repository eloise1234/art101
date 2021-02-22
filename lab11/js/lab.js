/**
 * Author: Ashwin Gupta and Eloise Shevin
 * Created:   2.17.2021
 *
 **/

$("#challenge").append("<button id='c-button'>Button</button>");
$("#problems").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");



$('#c-button').click(function(){
  $(this).parent().toggleClass("special");
});
$('#p-button').click(function(){
  $(this).parent().toggleClass("special");
});
$('#r-button').click(function(){
  $(this).parent().toggleClass("special");
});
