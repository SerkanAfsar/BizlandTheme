import AOS from 'aos';
const loader = document.getElementById("preloader");
const headerTop = document.getElementById("headerTop");
const header = document.querySelector("header");
window.onload = () => {
    setTimeout(() => {
        loader.classList.add("disabled");
    }, 1500);
}
window.onscroll = (e) => {
    if (window.scrollY >= headerTop.clientHeight) {
        header.classList.add("sticky");
        header.classList.add("shadow");
    }
    else {
        header.classList.remove("sticky");
    }
}

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});