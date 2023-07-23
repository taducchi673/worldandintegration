







$(document).ready(function () {
    $(".exit__menu").click(function () {
        $(".mb__navbar").toggle();
    });

    $(".menu__navbar").click(function () {
        $(".mb__navbar").toggle();
    })

    $(".mb__navbar>div>ul>li").click(function () {
        $(".mb__navbar").hide();
    })

    $('.ulthuctrang').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
        nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var header = document.getElementsByClassName("header")[0];
    header.style["background-color"] = "#EA906C";
    var exitmenu = document.querySelectorAll(".exit__menu")[0];


    $(".exit__menu").click(function () {
        $(".mb__navbar").toggle();
    });

    $(".menu__navbar").click(function () {
        $(".mb__navbar").toggle();
    })

    $(".mb__navbar>div>ul>li").click(function () {
        $(".mb__navbar").hide();
    })
    $(".header").style["background-color"] = "#EA906C";
    });