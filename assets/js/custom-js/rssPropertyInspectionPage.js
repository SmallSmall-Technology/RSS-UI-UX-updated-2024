const filterApartmentBtn = document.getElementById(
  "rss-apartments-settings-apartment-dropdown-btn"
);
const filterApartmentMenu = document.getElementById(
  "rss-apartments-settings-apartment-dropdown-menu"
);
const filterApartmentCloseBtn = document.getElementById(
  "rss-apartments-settings-apartment-dropdown-menu-close"
);

filterApartmentBtn.addEventListener("click", () => {
  if (filterApartmentMenu.hasAttribute("hidden")) {
    filterApartmentMenu.removeAttribute("hidden");
  } else {
    filterApartmentMenu.setAttribute("hidden", "hidden");
  }
});

// Close the dropdown when the close Icon is clicked
filterApartmentCloseBtn.addEventListener("click", () => {
  filterApartmentMenu.setAttribute("hidden", "hidden");
});

// function for filtering apartments
document.addEventListener("DOMContentLoaded", () => {
  const bedroomButtons = document.querySelectorAll(
    ".single-section-btn-wrapper .bedroom"
  );
  const bathroomButtons = document.querySelectorAll(
    ".single-section-btn-wrapper .bathroom"
  );
  const furnishingButtons = document.querySelectorAll(".btn-wrapper button");
  const filterButtons = document.getElementById("filter-btn");

  let filters = {
    location: "Any location",
    bedrooms: "Any",
    bathrooms: "Any",
    furnishing: "Unfurnished",
    budget: "Any",
  };

  bedroomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filters.bedrooms = button.textContent.trim();
      // console.log("Selected Bedroom:", filters.bedrooms);
    });
  });

  bathroomButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filters.bathrooms = button.textContent.trim();
      // console.log("Selected Bathroom:", filters.bathrooms);
    });
  });

  furnishingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filters.furnishing = button.textContent.trim();
      // console.log("Selected Furnishing:", filters.furnishing);
    });
  });

  document.querySelector(".location-filter").addEventListener("change", (e) => {
    filters.location = e.target.value;
    // console.log("Selected Location:", filters.location);
  });

  filterButtons.addEventListener("click", () => {
    // console.log("Applied Filters:", filters);
    applyFilters(filters);
  });

  const applyFilters = (filters) => {
    filterApartmentCloseBtn.forEach((apartment) => {
      const apartmentName = apartment.querySelector(
        ".single-apartment-name"
      ).textContent;
      const apartmentLocation = apartment.querySelector(
        ".single-apartment-location"
      ).textContent;
      const bedroomCount = apartment.querySelector(
        ".single-apartment-extras li:nth-child(1)"
      ).textContent;
      const bathroomCount = apartment.querySelector(
        ".single-apartment-extras li:nth-child(2)"
      ).textContent;
      const furnishingStatus = apartment.querySelector(
        ".single-apartment-current-status p"
      ).textContent;

      const numBedrooms = bedroomCount.match(/(\d+)/)
        ? bedroomCount.match(/(\d+)/)[0]
        : "0";
      const numBathrooms = bathroomCount.match(/(\d+)/)
        ? bathroomCount.match(/(\d+)/)[0]
        : "0";

      const matchesLocation =
        filters.location === "Any location" ||
        apartmentLocation.includes(filters.location);
      const mathesBedrooms =
        filters.bedrooms === "Any" || bedroomCount.includes(filters.bedrooms);
      const mathesBathrooms =
        filters.bathrooms === "Any" ||
        bathroomCount.includes(filters.bathrooms);
      const mathesFurnishing =
        filters.furnishing === "Any" ||
        furnishingStatus.includes(filters.furnishing);

      if (
        matchesLocation &&
        mathesBedrooms &&
        mathesBathrooms &&
        mathesFurnishing
      ) {
        apartment.style.display = "block";
      } else {
        apartment.style.display = "none";
      }
    });
  };
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

const rangeInput = document.getElementById("customRange1");
const rangeLabel = document.getElementById("rangeLabel");

const updateLabel = () => {
  rangeLabel.textContent = `₦${rangeInput.value}`;
};

const updateRangeBackground = () => {
  const value =
    ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) *
    100;
  rangeInput.style.background = `linear-gradient(to right, black ${value}%, white ${value}%)`;
};

// Update both the label and background on input change
rangeInput.addEventListener("input", () => {
  updateLabel();
  updateRangeBackground();
});

// Initialize both on page load
updateLabel();
updateRangeBackground();
