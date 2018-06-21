
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

function englify(){
	// NAV BAR
	document.getElementById("pageTitle").innerHTML = "PORTFOLIO";
	document.getElementById("pageTitle").style.fontSize = "30px";
	document.getElementById("myName").innerHTML = "<small>Chao-Ming Chang</small>";
	document.getElementById("recentWorkText").innerHTML = "Recent Work";
	document.getElementById("workInProgress").innerHTML = "Work in progress <span id=\"dotDotDot\">...</span>";
	$(".specialHold0").height($("#myNav").height() + 2);
	dotAnim();

	// FOOTER
	document.getElementById("footLink1").innerHTML = "Portfolio";
	document.getElementById("footLink2").innerHTML = "Discovery";
	document.getElementById("footLink3").innerHTML = "Tools";
	document.getElementById("footLink4").innerHTML = "Test Site";

	langMode = 0;
	window.location.href = "index.html";
	// langHandle();
}

function chinafy(){
	// NAV BAR
	document.getElementById("pageTitle").innerHTML = "作品集";
	document.getElementById("pageTitle").style.fontSize = "35px";
	document.getElementById("myName").innerHTML = "<small>張晁銘</small>";
	document.getElementById("recentWorkText").innerHTML = "進期作品";
	document.getElementById("workInProgress").innerHTML = "網站開發中 <span id=\"dotDotDot\">...</span>";
	$(".specialHold0").height($("#myNav").height() + 2);
	dotAnim();

	// FOOTER
	document.getElementById("footLink1").innerHTML = "作品集";
	document.getElementById("footLink2").innerHTML = "新發現";
	document.getElementById("footLink3").innerHTML = "工具箱";
	document.getElementById("footLink4").innerHTML = "實驗網";

	langMode = 1;
	langHandle();
	if(grabURL() != "cn") window.location.href += "?cn";
}

$( document ).ready( function(){
	dotAnim();
});

$(".item img").hover(
	function(){
		$(this).animate({opacity:0.7}, 400);
	},
	function(){
		$(this).animate({opacity:1.0}, 400);
	}
);