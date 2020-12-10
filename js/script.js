menu.onclick = function(){
	let x = document.getElementById('myTopnav');

	if (x.className === "navi") {
		x.className += " responsive";
		x.style.display = "block";
		x.style.animationPlayState = "running";
	}
	else {
		x.className = "navi";
		x.style.display = "none";
	}
}