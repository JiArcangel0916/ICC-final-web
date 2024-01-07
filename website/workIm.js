let slideIndex = 1;
show(slideIndex);

function addSlide(n){
    show(slideIndex += n)
}

function currentSlide(n){
    show(slideIndex = n);
}

function show(n){
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot")
    let i;

    if (n > slides.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}