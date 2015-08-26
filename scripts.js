var limitChars = function(limit, counterElement){
	// Limit text to limit argument characters
	console.log(this);
	var $target = $(this);
	console.log($target.val());
	console.log($target.val().slice(0, limit));
	$target.val($target.val().slice(0, limit));
	counterElement.text(countChars($target.val().length));
}

var countChars = function(target){
	if (target < 1){
		return "";
	} else {
		return target;
	}
}


$("#textfield").keyup(function(){
	limitChars.call(this, 32, $("#textfieldctr"));
});

$("#myarea").keyup(function(){
	limitChars.call(this, 140, $("#myareactr"));
});

