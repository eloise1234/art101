for(var index=0; index<10;index++){
  console.log(index);
}

varboxEl=document.createElement("div");
boxEl.classname="box";
boxEl.id="box_id_"+(index+1);
document.getElementById("container").appendChild(boxEl);
console.log(index);

//var counter=0;
//while(counter<10){
//  console.log(counter);
//counter+=1;
//}
