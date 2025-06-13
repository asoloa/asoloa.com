new Splide('.testimonials-splide', {
    type      : 'loop',
    perPage   : 2,
    gap       : '0.75rem',
    drag      : 'free',
    snap      : false,
    autoScroll: {
        speed: 0.75,
    },
    arrows: false,
    pagination: false,
}).mount(window.splide.Extensions);