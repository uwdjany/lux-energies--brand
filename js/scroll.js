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
