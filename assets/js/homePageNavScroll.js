const nav = document.querySelector(".cabecalho__navegacao");
const navList = document.querySelector(".navegacao__lista");

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
        
        for(var i = 0; i < 9; i++){
            if((i % 2) == 0){
                navList.children[i].classList.remove("link");
            }
        }
    }else{
        nav.classList.remove("nav-scroll");
        nav.classList.remove('nav-scroll-opacity');

        for(var i = 0; i < 9; i++){
            if((i % 2) == 0){
                navList.children[i].classList.add("link");
            }
        }
    }
};

document.addEventListener ('scroll', onScroll);
nav.addEventListener ('mouseover', hoverOn);
nav.addEventListener('mouseout', hoverOff);