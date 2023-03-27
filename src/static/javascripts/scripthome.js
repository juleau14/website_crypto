const nav = document.querySelector("nav");
const closeNavButton = document.querySelector(".close_nav");
const openNavButton = document.querySelector(".open_nav_button");
const backTopButton = document.querySelector(".back_top");
const homeButton = document.querySelector(".home_button");
const aboutUsButton = document.querySelector(".about_us_button");
const tokenomicsButton = document.querySelector(".tokenomics_button");
const aboutUsDiv = document.querySelector(".about_us_div");
const tokenomicsDiv = document.querySelector(".tokenomics_div");


const closeNav = () => {
    nav.style.marginLeft = "-120vw";
}


const openNav = () => {
    nav.style.marginLeft = "0";
}


const scrollToTop = () => {
    window.scrollTo(0, 0);
}


const scrollToAboutUs = () => {
    window.scrollBy(0, aboutUsDiv.getBoundingClientRect().top);
}


const scrollToTokenomics = () => {
    window.scrollBy(0, tokenomicsDiv.getBoundingClientRect().top);
}


const start = () => {

    openNavButton.addEventListener("click", () => {
        openNav();
    });

    closeNavButton.addEventListener("click", () => {
        closeNav();
    });

    homeButton.addEventListener("click", () => {
        closeNav();
        scrollToTop();
    });

    aboutUsButton.addEventListener("click", () => {
        closeNav();
        scrollToAboutUs();
    });

    tokenomicsButton.addEventListener("click", () => {
        closeNav();
        scrollToTokenomics();
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            backTopButton.style.marginRight = "10px";
        } else {
            backTopButton.style.marginRight = "-100px";
        }
    });

    backTopButton.addEventListener("click", scrollToTop);
}


start();