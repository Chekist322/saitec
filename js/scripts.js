
function kek() {
	var a = document.getElementById('top_kek').value;
	alert(a)
}

function showSignInFrame() {
	var signInFrame = document.getElementById('signInFrame');
	var signUpFrame = document.getElementById('signUpFrame');
	 if (signUpFrame.style.visibility !== 'visible') {
		if (signInFrame.style.visibility === 'visible') {
			signInFrame.style.visibility = 'hidden';
		} else {
			signInFrame.style.visibility = 'visible';
		}
	}
}

function showSignUpFrame() {
	var signUpFrame = document.getElementById('signUpFrame');
	var signInFrame = document.getElementById('signInFrame');
	if (signInFrame.style.visibility !== 'visible') {
		if (signUpFrame.style.visibility === 'visible') {
			signUpFrame.style.visibility = 'hidden';
		} else {
			signUpFrame.style.visibility = 'visible';
		}
	}

}