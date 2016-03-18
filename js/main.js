$(".item img").hover(
	function(){
		$(this).animate({opacity:0.7}, 400);
	},
	function(){
		$(this).animate({opacity:1.0}, 400);
	}
);