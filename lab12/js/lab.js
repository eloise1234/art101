/**
 * Author: Eloise Shevin and Ashwin Gupta
 * Created:   2.22.2021
 * License: Public Domain
 **/


function sortingHat(str) {
        len= str.length;
        mod= len % 4;
        if (mod==0){
          return "HUFFLEPUFF"
        }
        else if (mod==1){
          return "RAVENCLAW"
        }
        else if (mod==2){
          return "SLYTHERIN"
        }
        else if (mod==3){
          return "GRYFFINDOR"
        }
}

 var myButton = document.getElementById('button');
 myButton.addEventListener("click", function() {
         console.log("Submitted");
         var username = document.getElementById('input').value;
         var house = sortingHat(username);
         newText="<p> The sorting hat has sorted you into " + house + "</p>";
         document.getElementById("output").innerHTML=newText;
       })
