document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll(".link");
    
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        
        if (menu.classList.contains("active")) {
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.classList.add("show");
                }, index * 100); // Delay based on index
            });
        } else {
            links.forEach((link) => {
                link.classList.remove("show");
            });
        }
    });
});


const scrollContainer = document.querySelector('.containerproject');

scrollContainer.addEventListener('scroll', () => {
    // Calcola il valore di scroll orizzontale in base allo scroll verticale
    const scrollTop = scrollContainer.scrollTop;
    scrollContainer.scrollLeft = scrollTop; // Sincronizza scroll orizzontale
});