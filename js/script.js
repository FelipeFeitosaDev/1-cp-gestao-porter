//menu hamburguer

let menuButton = document.querySelector(".menu-button");
let navUlElement = document.querySelector("nav").querySelector("ul");
let navAElement = navUlElement.querySelectorAll("a");

menuButton.addEventListener("click", function () {
    if (navUlElement.classList.contains('top-nav-responsive')) {
        navUlElement.classList.remove("top-nav-responsive");
        document.body.style.overflowY = "scroll";
    } else {
        navUlElement.classList.add("top-nav-responsive");
        document.body.style.overflow = 'hidden';
    }
});

console.log(navAElement)
navAElement.forEach(function (element) {
    element.addEventListener("click", function () {
        navUlElement.classList.remove("top-nav-responsive");
        document.body.style.overflowY = "scroll";
    });
});



window.addEventListener('load', (event) => {
    document.getElementsByClassName("home-illustration")[0].classList.add("illustration-visible");
    document.getElementsByClassName("txt")[0].classList.add("txt-animation");
});

const fadeElems = document.querySelectorAll('.txt');
const windowHeight = window.innerHeight;

function checkPosition() {
    for (let i = 0; i < fadeElems.length; i++) {
        const fadeElem = fadeElems[i];
        const positionFromTop = fadeElem.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            fadeElem.classList.add('show');
        }
    }
}

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', checkPosition);

checkPosition();

// window.onorientationchange = function() { 
//        let orientation = window.orientation; 
//             switch(orientation) { 
//                 case 0: window.location.reload(); 
//                 break; 
//                 case 90: window.location.reload(); 
//                 break; 
//                 case -90: window.location.reload(); 
//                 break; 
//             } 
//     };