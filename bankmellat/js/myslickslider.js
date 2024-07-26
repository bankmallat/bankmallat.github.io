
$(document).ready(function () {

});
$('.responsive').slick({
    dots: false,
    infinite: true,
    Speed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 1000,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 487,
            settings: {

                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 355,
            settings: {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 270,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }


    ]
});