document.addEventListener('DOMContentLoaded',function(){
    const navbar=document.querySelector('nav');
    const hamburgerMenu=document.getElementById('hamburger-menu');

    document.addEventListener('click',function(){
        navbar.classList.toggle('show-navbar');
        hamburgerMenu.classList.toggle('active');
    })
})