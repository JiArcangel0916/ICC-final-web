function toggleNavBar(){
    let navBar = document.querySelector(".navbar");
    let hamburger = document.querySelector(".hamburger");

    navBar.classList.toggle("active");
    hamburger.classList.toggle("active");

        if(navBar.style.display === "flex"){
            navBar.style.display = "none";
            resetHamburger();
        }
        else{
            navBar.style.display = "flex";
            animateHamburger();
        }
}


function animateHamburger(){
    document.getElementById("burger1").style.transform = "rotate(45deg) translate(7.5px, 6px)";
    document.getElementById("burger2").style.opacity = "0";
    document.getElementById("burger3").style.transform = "rotate(-45deg) translate(8px, -8px)";
}

function resetHamburger(){
    document.getElementById("burger1").style.transform = "none";
    document.getElementById("burger2").style.opacity = "1";
    document.getElementById("burger3").style.transform = "none";
}