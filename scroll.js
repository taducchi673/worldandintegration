

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