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


// Counting number animation
const counters = document.querySelectorAll('.counter');
const speed = 400; // Animation speed

counters.forEach(counter => {
  const target = counter.querySelector('.number').dataset.target;
  const number = counter.querySelector('.number');
  let count = 0;

  const updateCount = () => {
    const increment = Math.ceil(target / speed);
    count += increment;

    number.textContent = count;

    if (count < target) {
      setTimeout(updateCount, speed);
    } else {
      number.textContent = target;
    }
  };

  updateCount();
});


// Video play button animation
 function playVideo() {
    var video = document.getElementById('video');
    var waveButton = document.querySelector('.wave-button');
    var videoImage = document.querySelector('.video-image');

    videoImage.style.display = 'none';
    waveButton.style.display = 'none';
    video.style.display = 'block';
    video.play();
}