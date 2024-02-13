//Downloading CV
document.querySelector('.cv').addEventListener('click',()=>{
    let link =document.createElement('a');
    link.href='./images/CV.pdf';
    link.target='_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
//Ham burger menu
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    hamburgerMenu.addEventListener("click", function () {
        // Toggle the visibility of the navigation bar
        navbar.classList.toggle("show-navbar");

        // Toggle the appearance of the hamburger menu icon
        hamburgerMenu.classList.toggle("active");
    });
});