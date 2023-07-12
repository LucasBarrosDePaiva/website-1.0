function showSlides(n) {
    let dots = document.getElementsByClassName("pointer");
    let bannerSliders = document.getElementsByClassName("a sliders");
    let teamSliders = document.getElementsByClassName("b sliders");
    let reviewSliders = document.getElementsByClassName("c sliders");

    if (n == 1) {
        bannerSliders[0].style.left = "0";
        dots[0].classList.add("active");
        dots[1].classList.remove("active");
        dots[2].classList.remove("active");
    } else if (n == 2) {
        bannerSliders[0].style.left = "-100vw";
        dots[0].classList.remove("active");
        dots[1].classList.add("active");
        dots[2].classList.remove("active");
    } else if (n == 3) {
        bannerSliders[0].style.left = "-200vw";
        dots[0].classList.remove("active");
        dots[1].classList.remove("active");
        dots[2].classList.add("active");
    } else if (n == 4) {
        teamSliders[0].style.left = "0";
        dots[3].classList.add("active");
        dots[4].classList.remove("active");
        dots[5].classList.remove("active");
    } else if (n == 5) {
        teamSliders[0].style.left = "-100vw";
        dots[3].classList.remove("active");
        dots[4].classList.add("active");
        dots[5].classList.remove("active");
    } else if (n == 6) {
        teamSliders[0].style.left = "-200vw";
        dots[3].classList.remove("active");
        dots[4].classList.remove("active");
        dots[5].classList.add("active");
    } else if (n == 7) {
        reviewSliders[0].style.left = "0";
        dots[6].classList.add("active");
        dots[7].classList.remove("active");
        dots[8].classList.remove("active");
    } else if (n == 8) {
        reviewSliders[0].style.left = "-88rem";
        dots[6].classList.remove("active");
        dots[7].classList.add("active");
        dots[8].classList.remove("active");
    } else if (n == 9) {
        reviewSliders[0].style.left = "-176rem";
        dots[6].classList.remove("active");
        dots[7].classList.remove("active");
        dots[8].classList.add("active");
    }
}
