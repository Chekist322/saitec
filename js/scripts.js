
function kek() {
	var a = document.getElementById('top_kek').value;
	alert(a)
}

function showSignInFrame() {
	var frame = document.getElementById('signInFrame');
	
	if (frame.style.visibility === 'visible') {
		frame.style.visibility = 'hidden';
	} else {
		frame.style.visibility = 'visible';
	}
}

function showSignUpFrame() {
	var frame = document.getElementById('signUpFrame');

	if (frame.style.visibility = 'visible') {
		frame.style.visibility = 'hidden';
	}
}