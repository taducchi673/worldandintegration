document.onload = function() {
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
        var header = document.getElementsByClassName("header")[0];
        header.style["background-color"] = "#EA906C";
}