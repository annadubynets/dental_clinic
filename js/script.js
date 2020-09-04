$('.services-section .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.articles-section .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});