// create duck div at top: 100px, left: -50px
// create interval to move duck from left: -50px to offscreen
//
//
// setInterval( duckFly, 1000 );


// var duckFly = function(){
//   distance = $(".duck").css("left")
//   $(".duck").animate({left: "+=100px"});)
// }
//
  $(".duck").animate({left: $(window).last().width()+50}, 3000);