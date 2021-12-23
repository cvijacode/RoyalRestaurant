const form = document.querySelector('#sign-in');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const title = document.querySelector('#title');
const message = document.querySelector('#message');
const submit = document.querySelector('#submit');

const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isRequire(data) {
	return (data === '') ? false : true;
}

function isValidEmail(data) {
	return patternEmail.test(data);
}

function showError(input, message) {
	const formItem = input.parentElement;

	formItem.classList.add('error');
	formItem.classList.remove('success');

	formItem.querySelector('small').textContent = message;
}

function showSuccess(input) {
	const formItem = input.parentElement;

	formItem.classList.remove('error');
	formItem.classList.add('success');

	if (input != submit) {
		formItem.querySelector('small').textContent = '';
	} else {
		formItem.querySelector('small').textContent = 'Uspešno ste poslali poruku!';
        formItem.querySelector('small').style.color = 'white';
	}
}

function checkName() {
	valid = false;
	const usernameData = username.value.trim();

	if (!isRequire(usernameData)) {
		showError(username, 'Ovo polje je obavezno!');
	} else {
		showSuccess(username);
		valid = true;
	}
	return valid;
}

function checkEmail() {
	valid = false;
	const emailData = email.value.trim();

	if (!isRequire(emailData)) {
		showError(email, 'Ovo polje je obavezno!');
	} else if (!isValidEmail(emailData)) {
		showError(email, 'Unesite validnu Email adresu!');
	} else {
		showSuccess(email);
		valid = true;
	}
	return valid;
}

function checkTitle() {
	valid = false;
	const titleData = title.value.trim();

	if (!isRequire(titleData)) {
		document.querySelector('textarea').style.borderColor = 'red';
		showError(title, 'Ovo polje je obavezno!');
	} else {
		document.querySelector('textarea').style.borderColor = 'green';
		showSuccess(title);
		valid = true;
	}
	return valid;
}

function checkMessage() {
	valid = false;
	const messageData = message.value.trim();

	if (!isRequire(messageData)) {
		showError(message, 'Ovo polje je obavezno!');
	} else {
		showSuccess(message);
		valid = true;
	}
	return valid;
}

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let usernameValid = checkName();
	let emailValid = checkEmail();
	let titleValid = checkTitle();
	let messageValid = checkMessage();

	let formValid = usernameValid && emailValid && titleValid && messageValid;

	if (formValid) {
		showSuccess(submit);
	}
})
