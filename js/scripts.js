let name;
let surname;
let email;
let password;
let confirmPassword;
let signInFrame;
let signUpFrame;
let cross;
let users = [];

let cSharpAnswersRight = [3, 2, 1, 1, 2, 4, 3, 3, 2, 2, 1, 3, 2, 4, 1];
let cSharpAnswers = [];

let marketingAnswersRight = [2, 2, 3, 4, 3, 2, 3, 2, 3, 3, 4, 2, 3, 2];
let marketingAnswers = [];

let automatizationAnswersRight = [3, 2, 1, 3, 2, 1, 1, 3, 2, 1, 3, 2, 1, 3, 1];
let automatizationAnswers = [];

let electrotechnikaAnswersRight = [1, 3, 3, 2, 2, 3, 1, 3, 2, 1, 3, 2, 1, 1, 2];
let electrotechnikaAnswers = [];

let economicAnswersRight = [4, 1, 1, 3, 2, 3, 3, 2, 2, 4, 2, 2, 2, 3, 1];
let economicAnswers = [];


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
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].mEmail) {
            if (password === users[i].mPassword) {
                localStorage.name = users[i].mName;
                localStorage.surname = users[i].mSurname;
                parent.window.location = '../content/automatization/content.html';
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
    confirmPassword = document.getElementById('passwordConfirmSignUp').value;
    let checked = true;
    if (name === "") {
        checked = false;
    }
    if (surname === "") {
        checked = false;
    }
    if (email === "") {
        checked = false;
    }
    if (confirmPassword === "") {
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
        if (password === confirmPassword) {
            users[users.length] = new User(name, surname, email, password);
            localStorage.setItem('myUsers', JSON.stringify(users));
            closeSelf();
        } else {
            alert('Неправильное подтверждение пароля!');
        }
    } else {
        alert('Ошибка! Поля оставлены пустыми или пользователь с таким email уже зарегистрирован.');
    }
}

function receiveMessage(event) {
    if (event.data == "removetheiframe") {
        var element = document.getElementById('signUpFrame');
        element.parentNode.removeChild(element);
    }
}

window.addEventListener("message", receiveMessage, false);

function closeSelf() {
    parent.window.postMessage("removetheiframe", "*");
}

function onLoadUser() {
    if (localStorage.name !== undefined) {
        document.getElementById('userName').innerHTML = localStorage.name + " " + localStorage.surname;
    } else {
        document.getElementById('userName').innerHTML = "";
    }
}

function nextQuestion(theme, nextFrame) {
    let form = document.getElementById('radio');
    let answer = form.elements['answer'].value;
    let first;
    switch (theme) {
        case 'automatization':
            first = localStorage.getItem('first');
            if (first === 'true') {
                first = false;
                localStorage.setItem('first', first);
            } else {
                automatizationAnswers = JSON.parse(localStorage.getItem('arr'));
            }
            automatizationAnswers.push(answer);
            localStorage.setItem('arr', JSON.stringify(automatizationAnswers));
            break;
        case 'cSharp':
            first = localStorage.getItem('first');
            if (first === 'true') {
                first = false;
                localStorage.setItem('first', first);
            } else {
                cSharpAnswers = JSON.parse(localStorage.getItem('arr'));
            }
            cSharpAnswers.push(answer);
            localStorage.setItem('arr', JSON.stringify(cSharpAnswers));
            break;
        case 'economic' :
            first = localStorage.getItem('first');
            if (first === 'true') {
                first = false;
                localStorage.setItem('first', first);
            } else {
                economicAnswers = JSON.parse(localStorage.getItem('arr'));
            }
            economicAnswers.push(answer);
            localStorage.setItem('arr', JSON.stringify(economicAnswers));
            break;
        case 'electrotechnika':
            first = localStorage.getItem('first');
            if (first === 'true') {
                first = false;
                localStorage.setItem('first', first);
            } else {
                electrotechnikaAnswers = JSON.parse(localStorage.getItem('arr'));
            }
            electrotechnikaAnswers.push(answer);
            localStorage.setItem('arr', JSON.stringify(electrotechnikaAnswers));
            break;
        case 'marketing':
            first = localStorage.getItem('first');
            if (first === 'true') {
                first = false;
                localStorage.setItem('first', first);
            } else {
                marketingAnswers = JSON.parse(localStorage.getItem('arr'));
            }
            marketingAnswers.push(answer);
            localStorage.setItem('arr', JSON.stringify(marketingAnswers));
            break;
    }
    if (nextFrame === 'result') {
        showResult(theme);
    } else {
        window.location = nextFrame;
    }
}

function showResult(theme) {
    let counter = 0;
    let first = localStorage.getItem('first');
    switch (theme) {
        case 'automatization':
            if (first === 'true') {
            } else {
                automatizationAnswers = JSON.parse(localStorage.getItem('arr'));
                if (automatizationAnswers !== 0) {
                    automatizationAnswers = JSON.parse(localStorage.getItem('arr'));
                    for (let i = 0; i < automatizationAnswers.length; i++) {
                        if (automatizationAnswers[i] === automatizationAnswersRight[i].toString()) {
                            counter++;
                        }
                    }
                }
            }
            break;
        case 'cSharp':
            if (first === 'true') {
            } else {
                cSharpAnswers = JSON.parse(localStorage.getItem('arr'));
                if (cSharpAnswers !== 0) {
                    cSharpAnswers = JSON.parse(localStorage.getItem('arr'));
                    for (let i = 0; i < cSharpAnswers.length; i++) {
                        if (cSharpAnswers[i] === cSharpAnswersRight[i].toString()) {
                            counter++;
                        }
                    }
                }
            }
            break;
        case 'economic' :
            if (first === 'true') {
            } else {
                economicAnswers = JSON.parse(localStorage.getItem('arr'));
                if (economicAnswers !== 0) {
                    economicAnswers = JSON.parse(localStorage.getItem('arr'));
                    for (let i = 0; i < economicAnswers.length; i++) {
                        if (economicAnswers[i] === economicAnswersRight[i].toString()) {
                            counter++;
                        }
                    }
                }
            }
            break;
        case 'electrotechnika':
            if (first === 'true') {
            } else {
                electrotechnikaAnswers = JSON.parse(localStorage.getItem('arr'));
                if (electrotechnikaAnswers !== 0) {
                    electrotechnikaAnswers = JSON.parse(localStorage.getItem('arr'));
                    for (let i = 0; i < electrotechnikaAnswers.length; i++) {
                        if (electrotechnikaAnswers[i] === electrotechnikaAnswersRight[i].toString()) {
                            counter++;
                        }
                    }
                }
            }
            break;
        case 'marketing':
            if (first === 'true') {
            } else {
                marketingAnswers = JSON.parse(localStorage.getItem('arr'));
                if (marketingAnswers !== 0) {
                    marketingAnswers = JSON.parse(localStorage.getItem('arr'));
                    for (let i = 0; i < marketingAnswers.length; i++) {
                        if (marketingAnswers[i] === marketingAnswersRight[i].toString()) {
                            counter++;
                        }
                    }
                }
            }
            break;
    }
    localStorage.setItem('counter', JSON.stringify(counter));
    window.location = 'result.html';
}

function onLoadResult() {
    let right = JSON.parse(localStorage.getItem('counter'));
    let result = document.getElementById('result').innerHTML = "Ваш результат: " + right + "/15";
}


class User {
    constructor(aName, aSurname, aEmail, aPassword) {
        this.mName = aName;
        this.mSurname = aSurname;
        this.mEmail = aEmail;
        this.mPassword = aPassword;
    }
}