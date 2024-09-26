

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(CustomEase);

    CustomEase.create(
       "hop",
       "M0,C0.354,0 0.464,0.133 0.498,0.502 0.532,0.872 0.651,1 1,1"
    );

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    const socialLinks = document.querySelectorAll(".socials p");
    let isAnimating = false;

    
   


})