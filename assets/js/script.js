const navMobile = document.querySelector('#navMobile');
const navMobileIdle = document.querySelector('#navMobile-idle');
const navMenu = document.querySelector('#navMenu');
const navLink = document.querySelector('#navLink');

function toggleMenu(){
    navMobile.classList.toggle('active');
    navMobileIdle.classList.toggle('invisivel2');
    navMenu.classList.toggle('invisivel');
    navLink.classList.toggle('invisivel2');
}

navMobile.addEventListener('click', () => {
    toggleMenu();
});

document.addEventListener('scroll', () => {
    if(navMobile.classList.contains('active')){
        toggleMenu();
    }
});