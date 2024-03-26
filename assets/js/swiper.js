document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data for the slides
  fetch("slides.json")
    .then(response => response.json())
    .then(slidesData => {
      // Generate HTML for each slide and append to swiper wrapper
      const swiperWrapper = document.getElementById("swiper-wrapper");
      if (swiperWrapper) {
        slidesData.forEach(slide => {
          const slideHtml = `<div class="swiper-slide"><img src="${slide}" alt="Slide Image" /></div>`;
          swiperWrapper.innerHTML += slideHtml;
        });
      } else {
        throw new Error('swiperWrapper element not found');
      }

      // Initialize Swiper
      var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
    })
    .catch(error => console.error("Error fetching slide data:", error));
});
