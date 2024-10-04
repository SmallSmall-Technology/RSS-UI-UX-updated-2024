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

// function showApartments(apartmentIndex) {
//   // Remove active class from all slides, apartments, and dashes
//   apartmentsSlide.forEach((apartment) => apartment.classList.remove("active"));
//   dash.forEach((dot) => dot.classList.remove("active"));

//   // Set active class to the current slide and corresponding dot
//   apartmentsSlide[apartmentIndex].classList.add("active");
//   dot[apartmentIndex].classList.add("active");
// }

// // Initial display of the first slide
// showApartments(currentApartment);

// // Add click event to each dot for pagination control
// dot.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     currentApartment = index;
//     showApartments(currentApartment);
//   });
// });

// // Auto-slide functionality (every 5 seconds)
// setInterval(() => {
//   currentApartment = (currentApartment + 1) % apartmentsSlide.length;
//   showApartments(currentApartment);
// }, 5000); // Change slide every 5 seconds

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

const toggleAccordionBtns = document.querySelectorAll(".faq-toggle");

toggleAccordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqAnswerId = btn.getAttribute("aria-controls");
    const faqAnswer = document.getElementById(faqAnswerId);
    const isExpanded = btn.getAttribute("aria-expanded") === "true";

    toggleAccordionBtns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        const otherFaqAnswerId = otherBtn.getAttribute("aria-controls");
        const otherFaqAnswer = document.getElementById(otherFaqAnswerId);

        otherFaqAnswer.hidden = true;
        otherBtn.setAttribute("aria-expanded", "false");
        otherBtn.querySelector(".open-icon").hidden = false;
        otherBtn.querySelector(".close-icon").hidden = true;
        otherBtn.querySelector(".sr-only").textContent = "Expand question";
      }
    });

    // Toggle the answer visibility
    faqAnswer.hidden = isExpanded;
    btn.setAttribute("aria-expanded", !isExpanded);

    // Toggle icons
    btn.querySelector(".open-icon").hidden = !isExpanded;
    btn.querySelector(".close-icon").hidden = isExpanded;
    btn.querySelector(".sr-only").textContent = isExpanded
      ? "Expand question"
      : "Collapse question";
  });
});
