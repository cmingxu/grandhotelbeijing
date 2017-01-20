function setfoc(id){
	document.getElementById("focpic").src = picarry[id];
	$("#foctxt").html(ttlarry[id]);
	document.getElementById("foclnk").href = lnkarry[id];
	focpic.style.visibility = "hidden";
	if(window.attachEvent){
		focpic.filters[0].Apply();
		if (focpic.style.visibility == "visible"){
			focpic.style.visibility = "hidden";
			focpic.filters.revealTrans.transition=12;
		}else{
			focpic.style.visibility = "visible";focpic.filters[0].transition=12;
		}
		focpic.filters[0].Play();
	}
	else{
		if (focpic.style.visibility == "visible"){
			focpic.style.visibility = "hidden";
		}else{
			focpic.style.visibility = "visible";
		}	
	}
}
