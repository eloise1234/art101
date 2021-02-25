for (i=1; i<=200; i++) {
  var str= "";
  if (i%3 == 0) {
    str+= "Fizz";
  }
  if (i%5 == 0) {
    str+= "Buzz";
  }
  if (i%7 == 0) {
    str+= "Boom";
  }
  if (i%8 == 0){
    str+= "Bang";
  }
  if (str == "") {str=i;}
  console.log(str)
  $("#output").append("<p>" + str + "</p>");
}
