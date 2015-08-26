var dropdownList = "<ul class='options'>\
                      <div>\
                        <li>Waldo</li>\
                        <li>Not Waldo</li>\
                        <li>Totally Not Waldo</li>\
                        <li>Waldo's Cousin</li>\
                        <li>Waldo on Tuesdays</li>\
                        <li>Maybe Waldo</li>\
                      </div>\
                    </ul>";

$("#taggable").mouseover(function(){
  if (!($("#potentialTag")[0] || $("#tagInProgress")[0])) {
    $("#img-container").append("<div id='potentialTag' class='tag'></div>")
  };
})

$("#img-container").mousemove(function(e){
  moveTag(e);
})

function moveTag(e){
  var yCoord, xCoord;
  yCoord = Math.min(Math.max(e.pageY - 50, 0), $("#taggable").height() - 100)
  xCoord = Math.min(Math.max(e.pageX - 50, 0), $("#taggable").width() - 100)


  $("#potentialTag").offset({top: yCoord, left: xCoord})
}


// Clicking on a list element
$("#img-container").on("click", ".options li", function(e){
  e.stopPropagation();
  var $parent = $(this).parents("#tagInProgress");
  $parent.children().remove();
  $parent.attr("id", "finalizedTag");
  $parent.append("<div></div>")
  $parent.children().first().text(this.innerText);
})
// When we click to place a tag
// We need to remove the current on-click event and replace it with
// selecting a name and/or stop selecting
$("#img-container").click(function(e){
  if ($(".options")[0]) {
    // Go back to potentialTag
    $("#tagInProgress").children().first().children().slideUp(100);
    $("#tagInProgress").attr("id", "potentialTag");
    $("#potentialTag").children().remove();
    moveTag(e);

  } else {
    $("#potentialTag").attr("id", "tagInProgress");
    $("#tagInProgress").append(dropdownList);
    $("#tagInProgress").children().first().children().slideUp(0);
    $("#tagInProgress").children().first().children().slideDown(300);
  }
})


