function getAjax(){
  $.ajax({
    url:"data/data.txt",
    type: "GET",
    DataType:"text",
    success:successFun,
    error:errorFun,
    complete: function (xhr, status){
      console.log ("request is complete");
    }
  });
}

function successFun(result){
  console.log(result);
  //$("#ajax_text").html(result.getElementsByTagName("note")[0]);
}
function errorFun(xhr,status,strErr){
  console.log("error");
}
$("#click_ajax").click(getAjax);
