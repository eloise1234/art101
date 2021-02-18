/**
 * Author: Ashwin Gupta and Eloise Shevin
 * Created:   2.17.2021
 *
 **/

var ch = $('<input/>').attr({ type: 'button', name:'btn1', value:'Challenges' });
$("#challenge").append(ch);
var pr = $('<input/>').attr({ type: 'button', name:'btn2', value:'Problems' });
$("#problems").append(pr);
var res = $('<input/>').attr({ type: 'button', name:'btn3', value:'Results' });
$("#results").append(res);

$( "#challenge" ).click(function() {
  alert( "this is for challenges" );
});
$( "#problems" ).click(function() {
  alert( "this is for problems" );
});
$( "#results" ).click(function() {
  alert( "this is for results" );
});

$("button.red").click(function(){
  $("#target").removeClass("blue");
	$("#target").toggleClass("red")
});
$("button.blue").click(function(){
  $("#target").removeClass("red");
	$("#target").toggleClass("blue");
});
