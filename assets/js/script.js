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
        console.log('sa')
    }
});

// 
const nav = document.querySelector(".cabecalho__navegacao");

const hoverOn = () => {
    nav.classList.remove('nav-scroll-opacity');
}

const hoverOff = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 10) {
        nav.classList.add('nav-scroll-opacity');
    }
}

const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 10) {
        nav.classList.add("nav-scroll");
        nav.classList.add("nav-scroll-opacity");
    }else{
        nav.classList.remove("nav-scroll");
        nav.classList.remove('nav-scroll-opacity');
    }
};

document.addEventListener ('scroll', onScroll);
nav.addEventListener ('mouseover', hoverOn);
nav.addEventListener('mouseout', hoverOff);