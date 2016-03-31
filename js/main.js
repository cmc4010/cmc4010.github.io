
var langMode = 0;

function langHandle(){ // only manages the links, does not change actual language
	var myLinks = document.getElementById("myFooter").getElementsByTagName("a");
	var numLinks = myLinks.length;
	if(langMode == 1){
		if(myLinks[0].href.indexOf("?") == -1){
			for(var i=0; i<numLinks; i++){
				myLinks[i].href += "?cn";
			}
		}
	}
	else {
		if(myLinks[0].href.indexOf("?") != -1){
			for(var i=0; i<numLinks; i++){
				myLinks[i].href = myLinks[i].href.replace("?cn", "");
			}
		}
	}
}

function grabURL(){
	var locate = window.location;
	document.langForm.langURL.value = locate;
	var text = document.langForm.langURL.value;
	var langChar1 = text.indexOf("?") + 1;
	var langChar2 = text.indexOf("?") + 3;
	var langText = text.substring(langChar1, langChar2);
	return langText;
}

$( document ).ready(
	function(){
		// load NAVBAR and FOOTER format
		document.getElementById("pageTitle").innerHTML = document.title.toUpperCase();
		$(".specialHold0").height($("#myNav").height() + 2);
		// dotAnim();
		$(".specialHold1").height($("#myFooter").height() + 50);

		// language detect
		var langText = grabURL();
		if(langText == "cn"){
			langMode = 1;
			chinafy();
		}
		else {
			langMode = 0;
			//englify();
		}

		langHandle();
	}
);

$( window ).resize(
	function(){
		$(".specialHold0").height($("#myNav").height() + 2);		
	}
);