const formSubmit = document.querySelector('.login-form')
const buttonForm = document.querySelector('.btn-login')
const emailLabel = document.querySelector('.email-input')
const passwordLabel = document.querySelector('.passw-input')

formSubmit.addEventListener('submit', event => {
    event.preventDefault();


const email = emailLabel.value.trim();
const password = passwordLabel.value.trim();

if (email === '' | password === '') {
    alert('Усі поля мають бути заповнені!');
    return;
}
    

const formatDt = {
    email,
    password,
}

console.log('Дані форми:', formatDt);

 formSubmit.reset();
});