const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.taget.classList.add("show");
        }
    })
})

const textElements = document.querySelectorAll(".text");
hiddenElements.forEach((el) => observer.observe(el));