var name;
var surname;
var email;
var password;
var confirmpassword;
var signInFrame;
var signUpFrame;
var cross;
var users = [];


function init() {
    cross = document.getElementById('cross');
    signInFrame = document.getElementById('signInFrame');
    signUpFrame = document.getElementById('signUpFrame');
    users = localStorage.getItem('users');
}

function showSignInFrame() {
    signInFrame.style.visibility = 'visible';
    cross.style.visibility = 'visible';
}

function closeIFrame() {
    signInFrame.style.visibility = 'hidden';
    signUpFrame.style.visibility = 'hidden';
    cross.style.visibility = 'hidden';
}

function showSignUpFrame() {
    cross = document.getElementById('cross');
    signUpFrame.style.visibility = 'visible';
    cross.style.visibility = 'visible';
}

function logIn() {
    users = JSON.parse(localStorage.getItem('myUsers'));
    alert(users.length);
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].mEmail) {
            if (password === users[i].mPassword) {
                localStorage.setItem('name', users[i].mName);
                localStorage.setItem('surname', users[i].mSurname);
                parent.window.location = '../content/content.html';
                break;
            }
        }
    }

}

function register() {
    name = document.getElementById('nameSignUp').value;
    surname = document.getElementById('surnameSignUp').value;
    email = document.getElementById('emailSignUp').value;
    password = document.getElementById('passwordSignUp').value;
    confirmpassword = document.getElementById('passwordConfirmSignUp').value;
    var checked = true;
    if (name === "") {
        checked = false;
    }
    if (surname === "") {
        checked = false;
    }
    if (email === "") {
        checked = false;
    }
    if (confirmpassword === "") {
        checked = false;
    }
    if (password === "") {
        checked = false;
    }
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].mEmail) {
            checked = false;
        }
    }
    if (checked) {
        if (password === confirmpassword) {
            users[users.length] = new User(name, surname, email, password);
            localStorage.setItem('myUsers', JSON.stringify(users));
            parent.closeIFrame();
        } else {
            alert('Неправильное подтверждение пароля!');
        }
    } else {
        alert('Ошибка! Поля оставлены пустыми или пользователь с таким email уже зарегистрирован.');
    }
}

function onLoadContent() {
    name = localStorage.getItem('name');
    surname = localStorage.getItem('surname');
    alert(name);
    document.getElementById('userName').innerHTML = name + " " + surname;
}


class User {
    constructor(aName, aSurname, aEmail, aPassword) {
        this.mName = aName;
        this.mSurname = aSurname;
        this.mEmail = aEmail;
        this.mPassword = aPassword;
    }
}