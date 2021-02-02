/**
 * Author: Ashwin Gupta and Eloise Shevin
 * Created:   2.1.2021
 * License: Public Domain
 **/
 var myTransport = ["car", "bus", "bike", "plane", "boat"];
 var myMainRide =  {
   make: "toyota",
   model: "prius",
   color: "green",
   year: "2020",
   age: "1",
 };
 document.writeln("Getting around: " + myTransport + "<br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
