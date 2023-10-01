document.body.onload = function() {

    const items = document.querySelectorAll(".item");

    console.log(items);
    document.addEventListener("scroll", (event) => {
        items.forEach(item => {
            if (item.offsetTop - window.scrollY < 350) {
                item.classList.add("active");

            }
        });

    })

    const button = document.querySelectorAll(".boxdieuhuong")[0];
    const header = document.querySelectorAll(".header")[0];


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

}