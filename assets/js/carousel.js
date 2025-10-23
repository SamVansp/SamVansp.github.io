document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const carousel = document.querySelector(".carousel");
  let index = 0;
  let autoScroll;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 5000); // ← 5 seconds between slides
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  // Manual navigation
  next.addEventListener("click", () => {
    stopAutoScroll();
    nextSlide();
    startAutoScroll();
  });

  prev.addEventListener("click", () => {
    stopAutoScroll();
    prevSlide();
    startAutoScroll();
  });

  // Pause on hover
  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  // Initialize
  showSlide(index);
  startAutoScroll();
});
