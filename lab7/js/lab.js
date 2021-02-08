/**
 * Author: Eloise Shevin and Ashwin Gupta
 * Created:   2.03.2021
 * License: Public Domain
 **/

 function sortName(uName) {

   console.log("Username =", uName);
   var nameArray = uName.split('');
   console.log("nameArray=", nameArray);
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort= ", nameArraySort);
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
}

var userName = window.prompt ("Please Enter Your Name");
document.writeln("I've fixed your name: ", sortName(userName), "</br>");
