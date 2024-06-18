let descIndex = 1;
showSlide(descIndex);

function showSlide(n){
    let desc = document.querySelectorAll(".description");
    let dot = document.querySelectorAll("ul.nav li");
    let i;

    for (i = 0; i < desc.length; i++){
        desc[i].style.display = "none";
        dot[i].classList.remove("active");
    }

    desc[descIndex - 1].style.display = "flex"
    dot[descIndex - 1].classList.add("active");
}

function showDesc(n){
    showSlide(descIndex = n);
}