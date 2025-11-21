console.log("JavaScript is working!");
//active class for links in nav bar
const nav_links = document.querySelectorAll("nav ul li a");
nav_links.forEach(function(element){
    element.onclick=function(e){
        // e.preventDefault();
        nav_links.forEach(function(el){
            el.classList.remove("active");
        });
        this.classList.add("active");
};
});

// navbar scroll
let nav_scroll = document.querySelector("nav");
window.onscroll = function(){
    if(window.scrollY > 0)
        nav_scroll.classList.add("scroll");
    else
        nav_scroll.classList.remove("scroll");
}

//navbar toggler
let nav_toggler = document.querySelector(".nav-toggler");
let nav_links2 = document.querySelector(".nav-links");
nav_toggler.onclick = function() {
    nav_links2.classList.toggle("active");
    nav_toggler.classList.toggle("active"); // Optional: for toggler animation
};

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav_links2.classList.remove("active"); // close menu
        nav_toggler.classList.remove("active"); // reset toggler icon
    });
});
