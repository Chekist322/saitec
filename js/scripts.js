
var name = sample;
var surname = sample;
var signInFrame;
var signUpFrame;
var cross;

function init() {
	name = 'sample';
	surname = 'sample';
	cross = document.getElementById('cross');
	signInFrame = document.getElementById('signInFrame');
	signUpFrame = document.getElementById('signUpFrame');
}

function showSignInFrame() {
	signInFrame.style.visibility = 'visible';
	cross.style.visibility = 'visible';
	
}

function closeIframe() {
	signInFrame.style.visibility = 'hidden';
	signUpFrame.style.visibility = 'hidden';
	cross.style.visibility = 'hidden';
}

function showSignUpFrame() {
	cross = document.getElementById('cross');
	signUpFrame.style.visibility = 'visible';
	cross.style.visibility = 'visible';
}