$(document).ready(function() {
    $(".exit__menu").click(function() {
        $(".mb__navbar").toggle();
    });

    $(".menu__navbar").click(function() {
        $(".mb__navbar").toggle();
    })

    $(".mb__navbar>div>ul>li").click(function() {
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

        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
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

    // var header = document.getElementsByClassName("header")[0];
    // header.style["background-color"] = "#EA906C";
    // var exitmenu = document.querySelectorAll(".exit__menu")[0];



    // $(".header").style["background-color"] = "#EA906C";



    const button = document.querySelectorAll(".boxdieuhuong")[0];
    const header = document.querySelectorAll(".header")[0];
    console.log(button);


    function runOnScroll() {
        var height = document.body.scrollTop;
        var header = document.getElementsByClassName("header")[0];
        if (height >= 150) {
            button.style.display = "block";
            header.style.display = "none";
        } else if (height < 150) {
            button.style.display = "none";

            header.style.display = "flex";

        }
    };
    document.addEventListener("scroll", (event) => {

        runOnScroll();
    })



});