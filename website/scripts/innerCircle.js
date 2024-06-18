let slideIndex = 1;
const slides = document.querySelectorAll(".slideContainer");
const dots = document.querySelectorAll(".dot");
show(slideIndex);

function addSlide(n) {
    show(slideIndex += n);
}

function currentSlide(n) {
    show(slideIndex = n);
}

function show(n) {
    let i;

    if (n < 1) {
        slideIndex = slides.length;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}