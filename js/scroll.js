// Get elements
const scrollContainer = document.getElementById('scroll-container');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

// Scroll left function
scrollLeftBtn.addEventListener('click', function() {
    scrollContainer.scrollBy({
        left: -scrollContainer.clientWidth, // Scroll by the width of one service item
        behavior: 'smooth'
    });
});

// Scroll right function
scrollRightBtn.addEventListener('click', function() {
    scrollContainer.scrollBy({
        left: scrollContainer.clientWidth, // Scroll by the width of one service item
        behavior: 'smooth'
    });
});

// Auto-scroll function
function autoScroll() {
    scrollContainer.scrollBy({
        left: scrollContainer.clientWidth, // Scroll by the width of one service item
        behavior: 'smooth'
    });

    // If reached the end of the container, scroll back to the start
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

// Set interval for auto-scrolling (adjust time as needed, e.g., 3000ms = 3 seconds)
let autoScrollInterval = setInterval(autoScroll, 3000);

// Stop auto-scroll when user clicks on the buttons
scrollLeftBtn.addEventListener('click', () => clearInterval(autoScrollInterval));
scrollRightBtn.addEventListener('click', () => clearInterval(autoScrollInterval));

// Optional: Restart auto-scroll after user interaction
scrollContainer.addEventListener('scroll', () => {
    clearInterval(autoScrollInterval); // Clear existing interval on scroll
    autoScrollInterval = setInterval(autoScroll, 2000); // Restart auto-scroll
});


const teamContainer = document.getElementById('team');
let teamAutoScrollInterval = setInterval(function() {
    teamContainer.scrollBy({ left: teamContainer.clientWidth, behavior: 'smooth' });
}, 3000);


// navbar script


  const hamburger = document.getElementById('hamburger');
  const closeIcon = document.getElementById('close-icon');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', function() {
    navbar.classList.add('menu-open'); // Opens the menu
  });

  closeIcon.addEventListener('click', function() {
    navbar.classList.remove('menu-open'); // Closes the menu
  });

  // Change navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



