const navToggle = document.querySelector('.nav-toggle');
const btn = document.querySelector('.btn');
const navLinks = document.querySelectorAll('.nav__link');
const socialListLinks = document.querySelectorAll('.social-list');

//Cursor Feature
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
}

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});

btn.addEventListener('mouseover',() => {
        innerCursor.classList.add('grow');
});

btn.addEventListener('mouseleave',() => {
    innerCursor.classList.remove('grow');
});

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        document.body.classList.remove('nav-open');
    });
    link.addEventListener('mouseover',() => {
        innerCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave',() => {
        innerCursor.classList.remove('grow');
    });
});

socialListLinks.forEach(link => {
    link.addEventListener('mouseover',() => {
        innerCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave',() => {
        innerCursor.classList.remove('grow');
    });
});