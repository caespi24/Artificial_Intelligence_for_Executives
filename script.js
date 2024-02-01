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

