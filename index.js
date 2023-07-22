

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


    function runOnScroll() {
        var height = document.body.scrollTop;
        var header = document.getElementsByClassName("header")[0];
        if (height >= 150) {
            header.style["background-color"] = "#EA906C";
        }
        else if (height < 150) {
            header.style["background-color"] = "transparent";
        }
    };


    window.addEventListener("scroll", runOnScroll);

    var exitmenu = document.querySelectorAll(".exit__menu")[0];
   
}



