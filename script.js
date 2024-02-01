$(document).ready(function(){
    // Fixed Action Button init
    $('.fixed-action-btn').floatingActionButton({
        direction: 'left',
        hoverEnabled: false
    });

    // Sidenav init
    $('.sidenav').sidenav();

    // Slider init
    $('.slider').slider({
        height: 800
    });

    // Collapsible init
    $('.collapsible').collapsible();
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .dates, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .overview-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .overview-content', { origin: 'right' });

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100)
}