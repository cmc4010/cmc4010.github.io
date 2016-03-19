$(".item img").hover(
	function(){
		$(this).animate({opacity:0.7}, 400);
	},
	function(){
		$(this).animate({opacity:1.0}, 400);
	}
);

$( document ).ready(
	function(){
		$(".specialHold0").height($("#myNav").height() + 2);
		dotAnim();
	}
);

$( window ).resize(
	function(){
		$(".specialHold0").height($("#myNav").height() + 2);		
	}
);

function englify(){
	document.getElementById("pageTitle").innerHTML = "PORTFOLIO";
	document.getElementById("pageTitle").style.fontSize = "30px";
	document.getElementById("myName").innerHTML = "<small>Chao-Ming Chang</small>";
	document.getElementById("recentWorkText").innerHTML = "Recent Work";
	document.getElementById("workInProgress").innerHTML = "Work in progress ...";
	$(".specialHold0").height($("#myNav").height() + 2);
}

function chinafy(){
	// $("pageTitle").html("作品集");
	// $("myName").html( "<small>張晁銘</small>" );
	document.getElementById("pageTitle").innerHTML = "作品集";
	document.getElementById("pageTitle").style.fontSize = "35px";
	document.getElementById("myName").innerHTML = "<small>張晁銘</small>";
	document.getElementById("recentWorkText").innerHTML = "進期作品";
	document.getElementById("workInProgress").innerHTML = "網站開發中 ...";
	$(".specialHold0").height($("#myNav").height() + 2);
}

function dotAnim(){
	var stuff = document.getElementById("dotDotDot");
	var dotCount = 0;
	setInterval(dotAction, 1000);
	function dotAction(){
		switch(dotCount) {
			case 0:
				stuff.innerHTML = "";
				dotCount++; 
				break;
			case 1:
				stuff.innerHTML = ".";
				dotCount++;
				break;
			case 2:
				stuff.innerHTML = "..";
				dotCount++;
				break;
			case 3:
				stuff.innerHTML = "...";
				dotCount = 0;
				break;
			default:
				dotCount = 0;
		}
	}
}