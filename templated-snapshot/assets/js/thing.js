function submitBio(){
  var nameVar = document.getElementById("name").value;
  console.log(nameVar);
  var nameMessage = document.getElementById("message").value;
  console.log(nameMessage);
  var nameEmail = document.getElementById("email").value;
  console.log(nameEmail);
}
document.getElementById("bio_submit_id").addEventListener('click',submitBio);

document.getElementById("name_email_id").innerHTML= nameVar="EMAIL:"+nameEmail;
