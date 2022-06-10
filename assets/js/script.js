import AOS from 'aos';
const loader = document.getElementById("preloader");
window.onload = () => {
    setTimeout(() => {
        loader.style.display = "none"
    }, 200);
}

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});