document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const closeBtn = document.getElementById('close');
    const overlay = document.createElement('div');

    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    };

    hamburger.addEventListener('click', () => {
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        closeBtn.classList.add('active');
        overlay.classList.add('active');
        disableScroll();
    });

    closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        closeBtn.classList.remove('active');
        overlay.classList.remove('active');
        enableScroll();
    });

    overlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        closeBtn.classList.remove('active');
        overlay.classList.remove('active');
        enableScroll();
    });
});


// Scroll To Top Section
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}
  
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}