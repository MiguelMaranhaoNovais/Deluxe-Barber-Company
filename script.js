const header = document.querySelector("#header");
const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");
const year = document.querySelector("#year");


// ano atual

if (year) {
    year.textContent = new Date().getFullYear();
}


// header ao rolar

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// menu mobile

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const active = nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            active
        );

    });


    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}