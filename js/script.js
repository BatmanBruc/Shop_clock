function push(elem){
	if(!elem.paused){
		elem.pause();
	}
	else{
		elem.play();
	}


}

function actPhoto(elem){
	var attr = elem.getAttribute('src');
	document.getElementById('big_photo').firstChild.setAttribute('src', attr);
}
