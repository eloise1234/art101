/**
 * Author: Eloise Shevin and Ashwin Gupta
 * Created:   2.03.2021
 * License: Public Domain
 **/

 function sortName() {
   var userName = window.prompt ("Please Enter Your Name");
   console.log("Username =", userName);
   var nameArray = userName.split('');
   console.log("nameArray=", nameArray);
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort= ", nameArraySort);
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
 }
document.writeln("I've fixed your name: ", sortName(), "</br>");
