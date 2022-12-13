// Changes the picture in the sidebar menu when user moves their mouse

// Assigns portraits to a variable
let portrait1 = document.getElementById('portrait1');
let portrait2 = document.getElementById('portrait2');
let portrait3 = document.getElementById('portrait3');
let portrait4 = document.getElementById('portrait4');
let portrait6 = document.getElementById('portrait6');
let portrait7 = document.getElementById('portrait7');
let portrait8 = document.getElementById('portrait8');
let portrait9 = document.getElementById('portrait9');

// Hides the portraits to see only one at a time
portrait1.style.display = 'none';
portrait2.style.display = 'none';
portrait3.style.display = 'none';
portrait4.style.display = 'none';
portrait6.style.display = 'none';
portrait7.style.display = 'none';
portrait8.style.display = 'none';
portrait9.style.display = 'show';

// Runs through the different portraits on mouse move
portrait9.onmousemove = function() {
   portrait1.style.display = 'block';
   portrait9.style.display = 'none';
}

portrait1.onmousemove = function() {
    portrait2.style.display = 'block';
    portrait1.style.display = 'none';
}

portrait2.onmousemove = function() {
    portrait3.style.display = 'block';
    portrait2.style.display = 'none';
}

portrait3.onmousemove = function() {
    portrait4.style.display = 'block';
    portrait3.style.display = 'none';
}

portrait4.onmousemove = function() {
    portrait6.style.display = 'block';
    portrait4.style.display = 'none';
}

portrait6.onmousemove = function() {
    portrait7.style.display = 'block';
    portrait6.style.display = 'none';
}

portrait7.onmousemove = function() {
    portrait8.style.display = 'block';
    portrait7.style.display = 'none';
}

portrait8.onmousemove = function() {
    portrait9.style.display = 'block';
    portrait8.style.display = 'none';
}

// Allows the user to change the view between light and dark mode (work in progress)

/*let darkMode = document.getElementById(darkMode);
let lightModev = document.getElementById(lightMode);

//Changes from dark mode to light mode

function changeMode() {
    let element = document.body;
    element.classList.toggle("light-mode");
}*/

// Hides the side menu

let sidebar = document.getElementById('mainMenu');
let hidebar = document.getElementById('hideMenu');

sidebar.style.display = 'none';

hidebar.onmouseover = function() {
    sidebar.style.display = 'block';
    hidebar.style.display = 'none';
}

sidebar.onmouseleave = function() {
    hidebar.style.display = 'block';
    sidebar.style.display = 'none';
}