$(document).ready(function () {
  $('.search-icon-btn').click(function () {
    $(this).addClass('d-none'); // Hide icon
    $(this).parent().addClass('d-none'); // Hide icon
    $('.search').removeClass('d-none').focus(); // Show input container
    $('.search-input').focus().css("outline", "0.5px solid #007DC1"); // Show input and focus
  });

  $('.search-input').on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      $(".search").addClass('d-none'); // Hide input and clear value
      $(".search-icon-btn").removeClass("d-none")// show the search icon back
      $(".search-icon-btn").parent().removeClass("d-none")// show the search icon back
    }
  });
});




// STICKY HEADER
document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

    // DOMContentLoaded  end