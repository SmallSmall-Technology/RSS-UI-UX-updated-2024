const slides = document.querySelectorAll(".rss-single-slider");
const apartmentsSlide = document.querySelectorAll(
  ".explore-our-homes-apartments"
);
const dash = document.querySelectorAll(".dash");
const dot = document.querySelectorAll(".dot");
let currentSlide = 0;

// Function handling the Carousel
function showSlide(slideIndex) {
  // Remove active class from all slides, apartments, and dashes

  slides.forEach((slide) => slide.classList.remove("active"));
  dash.forEach((dash) => dash.classList.remove("active"));

  // Set active class to the current slide and corresponding dash

  slides[slideIndex].classList.add("active");
  dash[slideIndex].classList.add("active");
}

// Initial display of the first slide
showSlide(currentSlide);

// Add click event to each dash for pagination control
dash.forEach((dash, index) => {
  dash.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Auto-slide functionality (every 5 seconds)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

// Function handling the Apartment Carousel
// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(
//     ".explore-our-homes-apartments .carousel-item"
//   );
//   const dots = document.querySelectorAll(".carousel-pagination .dot");
//   let currentSlide = 0;
//   const slideInterval = 3000;

//   // Function to show the current slide
//   function showSlide(index) {
//     // Hide all slides
//     slides.forEach((slide) => (slide.style.display = "none"));
//     // Remove active class from all dots
//     dots.forEach((dot) => dot.classList.remove("active"));

//     // Show the selected slide
//     slides[index].style.display = "flex";
//     // Add active class to the corresponding dot
//     dots[index].classList.add("active");
//   }

//   // Add click event to each dot
//   dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       currentSlide = index;
//       showSlide(currentSlide);
//     });
//   });

//   //Function to go to the next slide
//   function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
//   }

//   // Initialize by showing the first slide
//   showSlide(currentSlide);

//   let autoSlide = setInterval(nextSlide, slideInterval);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const homesSection = document.querySelector(".explore-our-homes-apartments");

//   // Function to add the animation class when the container is in view
//   function handleIntersection(entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         homesSection.classList.add("animate-container-slide-in");
//       }
//     });
//   }

//   const observer = new IntersectionObserver(handleIntersection, {
//     threshold: 0.2, // Trigger when 20% of the section is visible
//   });

//   observer.observe(homesSection);
// });

// Function handling the Find a neighbourhood dropdown

const toggleApartmentBtns = document.querySelectorAll(
  ".apartment-dropdown-btn"
);

toggleApartmentBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click");

    const apartmentDropdownMenu = document.getElementById(
      "apartment-dropdown-menu"
    );

    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isExpanded);

    const openIcon = btn.querySelector(".open-icon");
    const closeIcon = btn.querySelector(".close-icon");

    openIcon.classList.toggle("hidden", !isExpanded);
    closeIcon.classList.toggle("hidden", isExpanded);

    if (apartmentDropdownMenu) {
      apartmentDropdownMenu.classList.toggle("hidden", !isExpanded);
    }
  });
});

// Function handling the FAQs Accordion

const faqItems = document.querySelectorAll(".single-faq");

// Function to toggle the accordion for the clicked item
function toggleAccordion(faqItem, toggleBtn) {
  const faqAnswerId = toggleBtn.getAttribute("aria-controls");
  const faqAnswer = document.getElementById(faqAnswerId);
  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

  // Close other FAQs
  faqItems.forEach((otherFaqItem) => {
    if (otherFaqItem !== faqItem) {
      const otherToggleBtn = otherFaqItem.querySelector(".faq-toggle");
      const otherFaqAnswerId = otherToggleBtn.getAttribute("aria-controls");
      const otherFaqAnswer = document.getElementById(otherFaqAnswerId);

      otherFaqAnswer.hidden = true;
      otherToggleBtn.setAttribute("aria-expanded", "false");
      otherToggleBtn.querySelector(".open-icon").hidden = false;
      otherToggleBtn.querySelector(".close-icon").hidden = true;
      otherToggleBtn.querySelector(".sr-only").textContent = "Expand question";
    }
  });

  // Toggle the answer visibility for the clicked item
  faqAnswer.hidden = isExpanded;
  toggleBtn.setAttribute("aria-expanded", !isExpanded);

  // Toggle icons
  toggleBtn.querySelector(".open-icon").hidden = !isExpanded;
  toggleBtn.querySelector(".close-icon").hidden = isExpanded;
  toggleBtn.querySelector(".sr-only").textContent = isExpanded
    ? "Expand question"
    : "Collapse question";
}

// Add click event listener to each FAQ box and button
faqItems.forEach((faqItem) => {
  const toggleBtn = faqItem.querySelector(".faq-toggle");

  // Click event for the entire box
  faqItem.addEventListener("click", (event) => {
    // Only toggle when the click is not directly on the button
    if (!event.target.closest("button")) {
      toggleAccordion(faqItem, toggleBtn);
    }
  });

  // Click event for the button
  toggleBtn.addEventListener("click", (event) => {
    // Prevent the event from propagating to the box click handler
    event.stopPropagation();
    toggleAccordion(faqItem, toggleBtn);
  });
});
