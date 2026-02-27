// Portfolio filter
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.cat .filter-btn');
    const portfolioItems = document.querySelectorAll('.pix .pix-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // update active button style
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // filter items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonial carousel
  const slides = document.querySelectorAll('.feed-back-slider .feed-back');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevArrow = document.querySelector('.feed-back-slider .slider-arrow.prev');
  const nextArrow = document.querySelector('.feed-back-slider .slider-arrow.next');
    let currentSlide = 0;
    const slideInterval = 4000; // 4 seconds
    let autoPlayId;

    function showSlide(index) {
        if (!slides.length) return;

        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayId = setInterval(nextSlide, slideInterval);
    }

    function stopAutoPlay() {
        if (autoPlayId) {
            clearInterval(autoPlayId);
            autoPlayId = null;
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'), 10);
            showSlide(index);
            startAutoPlay(); // reset timer on manual selection
        });
    });

  if (nextArrow) {
    nextArrow.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevArrow) {
    prevArrow.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

    // initialize
    showSlide(0);
    startAutoPlay();
});


