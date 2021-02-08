/**
 * Author: Eloise Shevin and Ashwin Gupta
 * Created:   2.08.2021
 * License: Public Domain
 **/

 function firstThing(test){
   console.log("1st Function ran:"+test);
 }

 function secondThing(test){
   console.log("2nd Function ran:"+test);
 }

 function thirdThing(test){
   console.log("3rd Function ran:"+test);
 }

var TEST="TEST 1";
 firstThing(TEST);
 secondThing(TEST);
 thirdThing(TEST);

setTimeout(function() {firstThing("TEST 2");},0);
setTimeout(function() {secondThing("TEST 2");},0);
setTimeout(function() {thirdThing("TEST 2");},0);

setTimeout(function() {firstThing("TEST 3");},3000);
setTimeout(function() {secondThing("TEST 3");},1000);
setTimeout(function() {thirdThing("TEST 3");},2000);
