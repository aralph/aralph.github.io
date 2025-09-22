class ProjectCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.slides = this.container.querySelectorAll('.carousel-slide');
    this.dots = this.container.querySelectorAll('.carousel-dot');
    this.slidesContainer = this.container.querySelector('.carousel-slides');
    this.slideIndex = 0;
    this.autoAdvanceInterval = null;

    this.init();
  }

  init() {
    // Bind event listeners
    const prevBtn = this.container.querySelector('.carousel-arrow.prev');
    const nextBtn = this.container.querySelector('.carousel-arrow.next');

    if (prevBtn) prevBtn.addEventListener('click', () => this.previousSlide());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

    // Bind dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.currentSlide(index + 1));
    });

    // Start auto-advance
    this.startAutoAdvance();

    // Pause on hover
    this.container.addEventListener('mouseenter', () => this.pauseAutoAdvance());
    this.container.addEventListener('mouseleave', () => this.startAutoAdvance());
  }

  showSlide(n) {
    if (n >= this.slides.length) this.slideIndex = 0;
    if (n < 0) this.slideIndex = this.slides.length - 1;

    this.slidesContainer.style.transform = `translateX(-${this.slideIndex * 100}%)`;

    // Update dots
    this.dots.forEach(dot => dot.classList.remove('active'));
    if (this.dots[this.slideIndex]) {
      this.dots[this.slideIndex].classList.add('active');
    }
  }

  nextSlide() {
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }

  previousSlide() {
    this.slideIndex--;
    this.showSlide(this.slideIndex);
  }

  currentSlide(n) {
    this.slideIndex = n - 1;
    this.showSlide(this.slideIndex);
  }

  startAutoAdvance() {
    this.pauseAutoAdvance(); // Clear any existing interval
    this.autoAdvanceInterval = setInterval(() => this.nextSlide(), 5000);
  }

  pauseAutoAdvance() {
    if (this.autoAdvanceInterval) {
      clearInterval(this.autoAdvanceInterval);
      this.autoAdvanceInterval = null;
    }
  }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Find all carousel containers and initialize them
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach((carousel, index) => {
    // Ensure each carousel has an ID
    if (!carousel.id) {
      carousel.id = `carousel-${index}`;
    }
    new ProjectCarousel(carousel.id);
  });
});