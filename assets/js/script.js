'use strict'; //strict mode for e.g. undeclared variables won't be accepted.

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

// Navbar Variables
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navToggleBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener('click', function(){
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

// header sticky
const header = document.querySelector("[data-header]");
let lastScrollPosition = 0;
window.addEventListener("scroll", function(){
    let scrollPosition = window.pageYOffset;// returns the number of pixels the document is currently scrolled along the vertical axis
    if(scrollPosition>lastScrollPosition){
        header.classList.remove("active");
    }
    else{
        header.classList.add("active");
    }
    lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
});

// Form Validation
const input = document.querySelector("[data-input]");
const submitBtn = document.querySelector("[data-submit]");

input.addEventListener("input", function() {
    //Checking if the input value consists of something@something
    if(input.checkValidity()){
        submitBtn.removeAttribute("disabled");
    }
    else{
        submitBtn.setAttribute("disabled","");
    }
});

// GO TOP
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    window.scrollY >= 200 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});