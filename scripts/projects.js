let pageIndex = 1;
showPage(pageIndex);



function currentPage(n) {
    showPage(pageIndex = n);
}

function showPage(n) {
    let section = document.querySelectorAll("section");
    let head = document.querySelectorAll(".subheading");
    for (let i = 0; i < section.length; i++) {
        section[i].style.display = "none";
        head[i].classList.remove("active");
    }
    section[pageIndex - 1].style.display = "block";
    head[pageIndex - 1].classList.add("active");
}
