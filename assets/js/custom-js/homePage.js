const slides = document.querySelectorAll(".rss-single-slider");

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
// showSlide(currentSlide);

// Add click event to each dash for pagination control
// dash.forEach((dash, index) => {
//   dash.addEventListener("click", () => {
//     currentSlide = index;
//     showSlide(currentSlide);
//   });
// });

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

//   function handleIntersection(entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         homesSection.classList.add("animate-container-slide-in");
//       }
//     });
//   }

//   const observer = new IntersectionObserver(handleIntersection, {
//     threshold: 0.2,
//   });

//   observer.observe(homesSection);
// });

// Function handling the Find a neighbourhood dropdown

// const toggleApartmentBtns = document.querySelectorAll(
//   ".apartment-dropdown-btn"
// );

// toggleApartmentBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("click");

//     const apartmentDropdownMenu = document.getElementById(
//       "apartment-dropdown-menu"
//     );

//     const isExpanded = btn.getAttribute("aria-expanded") === "true";
//     btn.setAttribute("aria-expanded", !isExpanded);

//     const openIcon = btn.querySelector(".open-icon");
//     const closeIcon = btn.querySelector(".close-icon");

//     openIcon.classList.toggle("hidden", !isExpanded);
//     closeIcon.classList.toggle("hidden", isExpanded);

//     if (apartmentDropdownMenu) {
//       apartmentDropdownMenu.classList.toggle("hidden", !isExpanded);
//     }
//   });
// });

document.querySelectorAll(".location-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Get the text of the clicked button
    const location = this.innerText.trim();

    // Update the span inside the h1 with the selected location
    document.getElementById("selected-location").textContent = location;

    // Hide all neighborhood sections
    document.querySelectorAll(".dropdown-menu section").forEach((section) => {
      section.style.display = "none";
    });

    // Show the section corresponding to the selected location
    if (location === "Lagos") {
      document.querySelector(".lagos-neighbourhood-apartments").style.display =
        "block";
    } else if (location === "Abuja") {
      document.querySelector(".abuja-neighbourhood-apartments").style.display =
        "block";
    }
  });
});

// Prevent dropdown from opening if no location is selected
document
  .getElementById("apartmentDropdown")
  .addEventListener("click", function () {
    const selectedLocation = document
      .getElementById("selected-location")
      .textContent.trim();

    // dropdown-menu apartment-dropdown-menu

    // If no location is selected, prevent the dropdown from opening
    // const clearmenu = document.querySelector(".dropdown-menu.show");
    if (!selectedLocation) {
      alert("Please choose a location before proceeding.");
      document.querySelector(".lagos-neighbourhood-apartments").style.display =
        "none";
      document.querySelector(".abuja-neighbourhood-apartments").style.display =
        "none";
      dropdownMenu.style.display = "none";
      return; // Stop the dropdown from opening
    }

    // Toggle the dropdown menu if a location is selected
    const dropdownMenu = document.getElementById("apartment-dropdown-menu");
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded and dropdown visibility
    this.setAttribute("aria-expanded", !isExpanded);
    dropdownMenu.classList.toggle("hidden", isExpanded);
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

// Adding animations

// Load GSAP first, then apply this script
document.addEventListener("DOMContentLoaded", () => {
  const headlines = document.querySelectorAll(".headline");

  headlines.forEach((headline) => {
    const letters = headline.innerText.split("");
    headline.innerText = "";

    // Create a span for each letter to animate individually
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.innerText = letter;
      headline.appendChild(span);
    });

    // Animate each span (letter) smoothly
    gsap.fromTo(
      ".headline span",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.4,
        scrollTrigger: {
          trigger: headline,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});

gsap.registerPlugin(ScrollTrigger);

// Select each element with a `zoom-up` class
gsap.utils.toArray(".zoom-up").forEach((element) => {
  gsap.from(element, {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.5,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });
});
