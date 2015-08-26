var limitChars = function(limit, counterElement){
	// Limit text to limit argument characters
	var $target = $(this);
	$target.val($target.val().slice(0, limit));
	counterElement.text(countChars($target.val().length, limit));
}

var countChars = function(length, limit){
	if (limit - length === limit){
		return "";
	} else {
		return limit - length;
	}
}

var compareFields = function(field_1, field_2){
	if (field_2.val().length == 0) return ""

	if (field_1.val() != field_2.val()){
		return "passwords do not match"
	} else {
		return ""
	}
}

var validate = function(){
	validateLength($("#textfield"), 4, 32);
	validateLength($("#myarea"), 4, 140);
	validateLength($("#passwordfield"), 6, 16);
	validateLength($("#passwordconfirmfield"), 6, 16);
}

var validateLength = function(el, min, max){
	if (el.val().length < min) {
		el.addClass("errors");
		$("#" + el[0].id+"errors").text("Too Short");
	} else if (el.val().length > max){
		el.addClass("errors");
		$("#" +_el[0].id+"errors").text("Too Long");
	}
	else {
		el.removeClass("errors");
		$("#" + el[0].id+"errors").text("");
	}
}




$("#textfield").keyup(function(){
	limitChars.call(this, 32, $("#textfieldctr"));
});

$("#myarea").keyup(function(){
	limitChars.call(this, 140, $("#myareactr"));
});

$("#passwordfield").keyup(function(){
	limitChars.call(this, 16, $("#passwordctr"));
	$("#matchpassword").text(compareFields($("#passwordfield"), $("#passwordconfirmfield")))

});

$("#passwordconfirmfield").keyup(function(){
	limitChars.call(this, 16, $("#passwordconfirmctr"));
	$("#matchpassword").text(compareFields($("#passwordfield"), $("#passwordconfirmfield")))
});

$("#submitbtn").click(function(){
	validate();
})
