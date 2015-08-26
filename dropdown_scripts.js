$(document).ready(function(){
  $("#menu h3").click(function(){
    //slide up all the link lists
    $("#menu ul ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  })
})

$(".dropdown ul li").click(function(e){
  console.log(this.innerText);
  $("#current-val").text(this.innerText);
  $("#menu ul ul").slideUp();
})
