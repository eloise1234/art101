/**
 * Author: Eloise Shevin and Ashwin Gupta
 * Created:   2.10.2021
 * License: Public Domain
 **/

//var outputEl=

var outputEl=document.getElementById("output");    //Get element ID from HTML file and assign to a variable
var new1El=document.createElement("p");            //Create a new element and assign to a variable
new1El.setAttribute("p", "Hello");                 //Add attribute to element
var new2El=document.createElement("p");
new2El.setAttribute("p", "results");
outputEl.appendChild(new1El);                      //Append element to the bottom of outputEl
outputEl.appendChild(new2El);
new1El.innerHTML="This is our lab 9";              
new2El.innerHTML="We worked hard on it"
new1El.style.fontSize="30pt";                      //Change Style attributes
new2El.style.color="rebeccapurple";
new2El.style.fontSize="30pt";
