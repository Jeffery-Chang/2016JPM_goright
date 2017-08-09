jQuery.MessageShow = function (msg){
    $("<div id='messagebox' class='achievement'>" + msg + "</div>").appendTo("body").hide().css(
		"top", $(window).width() / 3 * 1.3
	).css(
		"left", $(window).width() / 2
	).show().animate({
		top: $(window).width() / 5 * 1.5,
		opacity: 0},500, function () {
			$(this).remove();
    });
}


