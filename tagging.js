$("#taggable").mouseover(function(){
  if (!($("#potentialTag")[0] || $("#tagInProgress")[0])) {
    $("#img-container").append("<div id='potentialTag' class='tag'></div>")
  };
})

$("#img-container").mousemove(function(e){
  var yCoord, xCoord;
  yCoord = Math.min(Math.max(e.pageY - 50, 0), $("#taggable").height() - 100)
  xCoord = Math.min(Math.max(e.pageX - 50, 0), $("#taggable").width() - 100)


  $("#potentialTag").offset({top: yCoord, left: xCoord})


})

$("#img-container").click(function(){
  console.log("click")
  $("#potentialTag").attr("id", "tagInProgress")
})


