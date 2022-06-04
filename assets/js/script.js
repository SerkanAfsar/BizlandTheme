import AOS from 'aos';
const loader = document.getElementById("loading");
window.onload = () => {
    setTimeout(() => {
        loader.classList.add("disabled");
    }, 200);
}

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});