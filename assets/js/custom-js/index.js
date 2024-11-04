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

// Auto-slide functionality (every 5 seconds)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds

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

    // If no location is selected, prevent the dropdown from opening
    if (!selectedLocation) {
      alert("Please choose a location before proceeding.");
      document.querySelector(".lagos-neighbourhood-apartments").style.display =
        "none";
      document.querySelector(".abuja-neighbourhood-apartments").style.display =
        "none";
      return;
    }

    // Toggle the dropdown menu if a location is selected
    const dropdownMenu = document.getElementById("apartment-dropdown-menu");
    const isExpanded = this.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded and dropdown visibility
    this.setAttribute("aria-expanded", !isExpanded);
    dropdownMenu.classList.toggle("hidden", isExpanded);
  });

// Function handling the FAQs Accordion
$(document).ready(function () {
  $(".custom-btn-acc").each(function () {
    $(this).on("click", function () {
      $(this).parent().parent().toggleClass("tertiary-color");

      //icon element within the button
      const iconElement = $(this).find("i");

      // Toggle the Font Awesome icon classes
      if (iconElement.hasClass("fa-plus")) {
        iconElement.removeClass("fa-plus").addClass("fa-minus");
      } else if (iconElement.hasClass("fa-minus")) {
        iconElement.removeClass("fa-minus").addClass("fa-plus");
      }
    });
  });

  $(".custom-btn-acc-faq").each(function () {
    $(this).on("click", function () {
      //icon element within the button
      const iconElement = $(this).find("i");

      // Toggle the Font Awesome icon classes
      if (iconElement.hasClass("fa-plus")) {
        iconElement.removeClass("fa-plus").addClass("fa-minus");
      } else if (iconElement.hasClass("fa-minus")) {
        iconElement.removeClass("fa-minus").addClass("fa-plus");
      }
    });
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
