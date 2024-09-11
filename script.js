    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let slideInterval;

    // Show the current slide by adjusting the transform property
    function showSlide(index) {
      const slider = document.getElementById('slider');
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // Start automatic slide change with a smooth transition
    function startAutoSlide() {
      slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }, 3000); // Change slide every 3 seconds
    }

    // Stop automatic slide change
    function stopAutoSlide() {
      clearInterval(slideInterval);
    }

    // Next Slide
    document.getElementById('nextBtn').addEventListener('click', () => {
      stopAutoSlide(); // Stop auto slide when user clicks
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    //   startAutoSlide(); // Restart auto slide
    });

    // Previous Slide
    document.getElementById('prevBtn').addEventListener('click', () => {
      stopAutoSlide(); // Stop auto slide when user clicks
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    //   startAutoSlide(); // Restart auto slide
    });

    // Initialize slider
    showSlide(currentIndex);
    startAutoSlide(); // Start automatic sliding
  