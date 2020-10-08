var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// Declaring necessary variables to the cursor class and navlinks
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.navlinks li');

// Event listener
window.addEventListener('mousemove', cursor);

// cursor function
// pageX and pageY give the realtime mouse coordinates on screen 
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
}

Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    })

    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    })
});