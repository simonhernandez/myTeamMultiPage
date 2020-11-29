// Variables
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const title = document.getElementById('title');
const text = document.getElementById('text');
const errorMessage = document.querySelectorAll('message');

// Main
form.addEventListener('submit', e => {
    e.preventDefault();

    // TODO: call checkInput function
    checkInputs();
});

// Functions
function checkInputs(){
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let companyValue = company.value.trim();
    let titleValue = title.value.trim();
    let textValue = text.value.trim();

    if (nameValue === ''){
        setErrorFor(name, 'Name cannot be blank');
    } else {
        nameValue = '';
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isValid(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        emailValue = '';
    }

    if (companyValue === ''){
        setErrorFor(company, 'Company cannot be blank');
    } else {
        companyValue = '';
    }

    if (titleValue === ''){
        setErrorFor(title, 'Title cannot be blank');
    } else {
        titleValue = '';
    }

    if (textValue === ''){
        setErrorFor(text, 'Text cannot be blank');
    } else {
        textValue = '';
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = 'block';
    small.innerText = message;
}

function isValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}