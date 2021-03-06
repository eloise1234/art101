
var Button = document.getElementById('activate');
Button.addEventListener("click", function API(){
  $.ajax({
    url:"http://numbersapi.com/42",
    data: { },
    type: "GET",
  })
    .done(function(data){
      $("#output").html(data);
      console.log ("success:", data);
  })
    .fail(function(xhr, status, errorThrown){
      $("#output").html(errorThrown+ "status:"+ status);
      //console.log(errorThrown+ "status:" + status);
  })
})
