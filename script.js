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
});