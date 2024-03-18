
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksLi = document.querySelectorAll('.nav-links li');
const content = document.querySelector('.content');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    content.classList.toggle('marginInContent');
    // navLinksLi.forEach((link, index) => {
    //     // if (link.style.animation) {
    //     //     link.style.animation = '';
    //     // } else {
    //     //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    //     // }
    // });

});