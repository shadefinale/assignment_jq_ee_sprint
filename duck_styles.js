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

function killDuck(target){
  console.log("clicked duck!");
  console.log(target);
  target.stop();
  target.fadeOut(100);
}

function generateDuck(){
  console.log("new duck!");
  var newDuck = document.createElement("DIV");
  newDuck.className = 'duck';
  newDuck = $(newDuck);
  newDuck.attr("draggable", "false");

  newDuck.click(function(){
    killDuck(newDuck);
  });

  newDuck.css("top", Math.floor(Math.random() * 500));
  $("body").append(newDuck);
  newDuck.animate({left: $(window).last().width()+50}, Math.floor(Math.random() * 5500) + 2500  , "linear");
  setTimeout(function(){
    newDuck.remove();
  }, 8000);
}

generateDuck();
setInterval(generateDuck, Math.floor(Math.random() * 3500) + 1500);
