let open = document.querySelector('.burger');
let close = document.querySelector('.close');
let menu = document.querySelector('.menu');
open.addEventListener('click', function () {
    menu.style.display = 'flex';
})
close.addEventListener('click', function () {
    menu.style.display = 'none';
})