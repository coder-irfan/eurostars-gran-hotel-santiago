const navMenu = document.getElementById("menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close"),
      navOverlay = document.getElementById("nav-overlay");

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
        navOverlay.classList.add("show-overlay");
    });
};

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
        navOverlay.classList.remove("show-overlay");    
    });
};

if(navOverlay) {
    navOverlay.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navOverlay.classList.remove('show-overlay');
    });
};