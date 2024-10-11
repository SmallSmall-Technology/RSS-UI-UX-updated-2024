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
