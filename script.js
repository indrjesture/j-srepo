// Get the popup element
const popup = document.getElementById('popup');

// Show the popup initially
popup.classList.remove('hidden');

// Hide the popup after 5 seconds
setTimeout(function() {
  popup.classList.add('hidden');
}, 10000);

// Slider functionality
const slider = document.querySelector('.testimonial-slider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // Adjust scrolling speed here
  slider.scrollLeft = scrollLeft - walk;
});




// JavaScript code
window.onload = function() {
    setTimeout(function() {
      document.getElementById("popup").style.display = "block";
    }, 120000); // 2 minutes in milliseconds
  };
  
  
