let name = document.querySelector('.name');
let email = document.querySelector('.email');
let errName = document.querySelector('.errorName');
let errEmail = document.querySelector('.errorEmail');
let formBtn = document.querySelector('.formBtn');
let em = email.value;
formBtn.addEventListener('click', function () {
    if (name.value.length == 0) {
        errName.style.opacity = 1;
        errName.innerHTML = 'Ничего не введено!';
    } else {
        errName.style.opacity = 0;
    }
    if (email.value.length == 0) {
        errEmail.style.opacity = 1;
        errEmail.innerHTML = 'Ничего не введено!';
    } else {
        errEmail.style.opacity = 0;
    }
})