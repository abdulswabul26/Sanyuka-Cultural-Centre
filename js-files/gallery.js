// ---------------------SCROLLING EFFECTS------------------------
// inline-navbar background
document.addEventListener("scroll", function() {
    // Calculate the scroll position
    var scrollPosition = window.scrollY;

    // Set a threshold value to determine when to change the background visibility
    var threshold = 595;  

    // Change background visibility based on scroll position
    if (scrollPosition > threshold) {
      document.querySelector('.inline-navbar').style.backgroundColor = 'rgba(255, 255, 255, 1)';
      document.querySelector('.inline-navbar').style.backdropFilter = 'blur(7px)';
    } else {
      document.querySelector('.inline-navbar').style.backgroundColor = 'rgba(255, 255, 255, 0)';
      document.querySelector('.inline-navbar').style.backgroundColor = 'blur(0px)';
    }
  });
  // Inline-navbar color
  document.addEventListener("scroll", function() {
    // Calculate the scroll position
    var scrollPosition = window.scrollY;
  
    // Set a threshold value to determine when to change the background visibility
    var threshold = 595;
  
    // Change background visibility based on scroll position
    if (scrollPosition > threshold) {
      document.querySelector('.inline-navbar').style.backgroundColor = 'rgba(0, 0, 0, .4)';
    } else {
      document.querySelector('.inline-navbar').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
  });

// ---------------------------BACK TO TOP----------------

  document.addEventListener("DOMContentLoaded", function() {
    // Get the Back to Top button element
    var backToTopBtn = document.getElementById('backToTopBtn');
  
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });
  
    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener('click', function() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
  });
  
