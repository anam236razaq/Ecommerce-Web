
//For Menu
const bar = document.getElementById('bar');
const nav = document.querySelector('.navbar');
const close = document.getElementById('close');


if (bar) {
    bar.addEventListener('click', function () {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', function () {
        nav.classList.remove('active');
    })
}

//For image Replacement
const mainImg = document.getElementById('main-img');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}