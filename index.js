

document.body.onload = function () {

    const items = document.querySelectorAll(".item");
   
    console.log(items);
    document.addEventListener("scroll", (event) => {
        items.forEach(item => {
            if (item.offsetTop - window.scrollY < 350) {
                item.classList.add("active");
                
            }
        })
            ;

    })

    const button = document.querySelectorAll(".totopbutton")[0];
    
    function runOnScroll() {
        var height = document.body.scrollTop;
        var header = document.getElementsByClassName("header")[0];
        if (height >= 150) {
            header.style["background-color"] = "#EA906C";
            button.style.display = "block";
        }
        else if (height < 150) {
            header.style["background-color"] = "transparent";
            button.style.display = "none";

        }
    };


    window.addEventListener("scroll", runOnScroll);

    var exitmenu = document.querySelectorAll(".exit__menu")[0];
   

   
}







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
                    dots: true
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
    });