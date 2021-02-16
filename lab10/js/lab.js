
/**
 * Author: Eloise Shevin and Ashwin Gupta
 * Created:   2.10.2021
 * License: Public Domain
 **/


function shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex};

function sortUsername(username) {
        return username.toLowerCase().split("").sort().join("");
    }

 var submitButton = document.getElementById('submit-button');
 submitButton.addEventListener("click", function() {
         console.log("Submitted");
         var username = document.getElementById('username').value;
         var sortedName = sortUsername(username);
         var outputArea = document.getElementById('output');
         outputArea.innerText = sortedName;
})
