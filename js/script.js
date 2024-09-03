$(document).ready(function () {
  var banner = $("#banner");
  var features = $("#featuresSlider");
  var testimonials = $("#testimonialsSlider");
  var currentSpecialsPages = $("#currentSpecialsPages");

  banner.owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    // smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });

  features.owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    mouseDrag: false,
    // margin:10,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
  testimonials.owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    mouseDrag: false,
    // margin:10,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
  currentSpecialsPages.owlCarousel({
    loop: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
    ],
    mouseDrag: false,
    // margin:10,
    autoplay: false,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });

});


// <!-- =============================== Navbar active on click =============================== --> //
document.addEventListener("DOMContentLoaded", function() {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const dropdown = document.querySelector(".nav-link.dropdown-toggle");
  const menuItems = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPage = window.location.href;
  function updateActiveMenuItems() {
      menuItems.forEach(menuItem => {
          if (menuItem.href === currentPage) {
              menuItem.classList.add('active');
          } else {
              menuItem.classList.remove('active');
          }
      });
  }
  function checkCurrentPage() {
      let isDropdownActive = false;
      dropdownItems.forEach(item => {
          if (currentPage.includes(item.getAttribute("href"))) {
              isDropdownActive = true;
          }
      });

      if (isDropdownActive) {
          dropdown.classList.add("active");
      } else {
          dropdown.classList.remove("active");
      }
  }
  const observer = new IntersectionObserver((entries) => {
      let anyItemInView = false;

      entries.forEach(entry => {
          if (entry.isIntersecting) {
              anyItemInView = true;
          }
      });

      if (anyItemInView) {
          dropdown.classList.add("active");
      } else {
          checkCurrentPage();
      }
  }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
  });
  dropdownItems.forEach(item => {
      observer.observe(item);
  });
  updateActiveMenuItems();
  checkCurrentPage();
  menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', function() {
          menuItems.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
      });
  });

  dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
          dropdown.classList.add('active');
          menuItems.forEach(item => item.classList.remove('active'));
      });
  });
});