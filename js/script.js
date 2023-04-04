/*Togle Icon Navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*Typed js*/
const typed = new Typed('.multiple-text', {
    strings: ['Smoked Cheeses', 'Smoked Spices', 'Other'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});