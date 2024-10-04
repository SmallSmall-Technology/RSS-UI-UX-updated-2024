//  Function handling the Rent dropdown
const rentDropdownBtn = document.getElementById("rent-dropdown-btn");
const rentMenu = document.getElementById("rent-menu");
const hamburgerDiv = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menu-icon");
const cancelIcon = document.querySelector(".cancel-icon");
const dropdownMenu = document.getElementById("dropdown-menu");
const lagosBtn = document.getElementById("lagos");
const abujaBtn = document.getElementById("abuja");
const lagosApartments = document.querySelector(".lagos-apartments");
const abujaApartments = document.querySelector(".abuja-apartments");
const paginationLine = document.getElementById("pagination-line");
const searchIconEl = document.getElementById("search-icon");
const getStartedBtn = document.getElementById("grid-line");
const getStartedEl = document.getElementById("get-started-dropdown");
const howItWorksBtn = document.getElementById("how-it-works");
const howItWorksEl = document.getElementById("how-it-works-dropdown-menu");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("input-search-icon");
const openIcon = btn.querySelector(".open-icon");
const closeIcon = btn.querySelector(".close-icon");

// // Toggle dropdown visibility on rent click
rentDropdownBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Toggle the visibility of the rentMenu
  const isExpanded = rentDropdownBtn.getAttribute("aria-expanded") === "true";

  // Set aria-expanded and toggle the hidden class
  rentDropdownBtn.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
  rentMenu.classList.toggle("hidden");

  openIcon.classList.toggle("hidden", !isExpanded);
  closeIcon.classList.toggle("hidden", isExpanded);

  // Show or hide based on the class
  rentMenu.style.display = rentMenu.classList.contains("hidden")
    ? "none"
    : "block";
});

// Close the dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!rentDropdownBtn.contains(e.target) && !rentMenu.contains(e.target)) {
    rentDropdownBtn.setAttribute("aria-expanded", "false");

    // Hide the rentMenu and ensure the 'hidden' class is applied
    rentMenu.classList.add("hidden");
    rentMenu.style.display = "none";
  }
});

// Close the dropdown when clicking outside

// Function to update pagination line
function updatePagination(progressPercentage) {
  paginationLine.style.width = progressPercentage + "%";
}

// Show Lagos apartments when clicking on "Lagos" and update pagination to 20%
lagosBtn.addEventListener("click", (e) => {
  e.preventDefault();
  lagosApartments.style.display = "block";
  abujaApartments.style.display = "none";
  updatePagination(50);
});

// Show Abuja apartments when clicking on "Abuja"
abujaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  abujaApartments.style.display = "block";
  lagosApartments.style.display = "none";
  updatePagination(40);
});

//  Function handling the Search dropdown
searchIconEl.addEventListener("click", function (e) {
  e.preventDefault();

  // Toggle the visibility
  searchContainer.classList.toggle("active");
  searchIconEl.classList.toggle("hidden");

  // Automatically focus on the input field when activated
  if (searchContainer.classList.contains("active")) {
    searchInput.focus();
  } else {
    searchInput.value = "";
  }
});

searchIcon.addEventListener("click", () => {
  searchInput.value = "";
});

// Handle Enter key to close the search input
// const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // Close the search input when Enter is pressed
    const searchContainer = document.querySelector(".search-container");
    searchContainer.classList.remove("active");
    searchIconEl.classList.remove("hidden");
    searchInput.value = "";
  }
});

//  Function handling the Hamburger dropdown
hamburgerDiv.addEventListener("click", () => {
  if (dropdownMenu.style.display === "none") {
    menuIcon.style.display = "none";
    cancelIcon.style.display = "block";
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
    menuIcon.style.display = "block";
    cancelIcon.style.display = "none";
  }
});

function adjustContentPadding() {
  const navBar = document.querySelector(".nav-bar"); // Or .small-screen-nav if applicable
  if (navBar) {
    const navBarHeight = navBar.offsetHeight;
    document.body.style.paddingTop = `${navBarHeight}px`;
  }
}
// Adjust padding on initial load
window.addEventListener("load", adjustContentPadding);

// Adjust padding on window resize (in case the header size changes dynamically)
window.addEventListener("resize", adjustContentPadding);

// Function handling the How it works dropdown menu
howItWorksBtn.addEventListener("click", () => {
  if (
    howItWorksEl.style.display === "none" ||
    howItWorksEl.style.display === ""
  ) {
    howItWorksEl.style.display = "block";
  } else {
    howItWorksEl.style.display = "none";
  }
});

// Close the dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!howItWorksBtn.contains(e.target) && !howItWorksEl.contains(e.target)) {
    howItWorksEl.setAttribute("aria-expanded", "false");
    howItWorksEl.style.display = "none";
  }
});

// Function handling the getstarted dropdown menu
getStartedBtn.addEventListener("click", () => {
  if (
    getStartedEl.style.display === "none" ||
    getStartedEl.style.display === ""
  ) {
    getStartedEl.style.display = "block";
  } else {
    getStartedEl.style.display = "none";
  }
});
// Close the dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!getStartedBtn.contains(e.target) && !getStartedEl.contains(e.target)) {
    getStartedEl.setAttribute("aria-expanded", "false");
    getStartedEl.style.display = "none";
  }
});
