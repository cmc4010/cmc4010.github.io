function englify(){
	// NAV BAR
	document.getElementById("pageTitle").innerHTML = "DISCOVERY";
	document.getElementById("pageTitle").style.fontSize = "30px";
	document.getElementById("myName").innerHTML = "<small>Chao-Ming Chang</small>";
	$(".specialHold0").height($("#myNav").height() + 2);

	// FOOTER
	document.getElementById("footLink1").innerHTML = "Portfolio";
	document.getElementById("footLink2").innerHTML = "Discovery";
	document.getElementById("footLink3").innerHTML = "Tools";
	document.getElementById("footLink4").innerHTML = "Test Site";

	langMode = 0;
	// langHandle();
	window.location.href = "index.html";
}

function chinafy(){
	// NAV BAR
	document.getElementById("pageTitle").innerHTML = "新發現";
	document.getElementById("pageTitle").style.fontSize = "35px";
	document.getElementById("myName").innerHTML = "<small>張晁銘</small>";
	$(".specialHold0").height($("#myNav").height() + 2);

	// FOOTER
	document.getElementById("footLink1").innerHTML = "作品集";
	document.getElementById("footLink2").innerHTML = "新發現";
	document.getElementById("footLink3").innerHTML = "工具箱";
	document.getElementById("footLink4").innerHTML = "實驗網";

	langMode = 1;
	langHandle();
	if(grabURL() != "cn") window.location.href += "?cn";
}