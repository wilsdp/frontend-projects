(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Sidebar toggle
   */
  if (select(".toggle-sidebar-btn")) {
    on("click", ".toggle-sidebar-btn", function (e) {
      select("body").classList.toggle("toggle-sidebar");
    });
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Navbar Underline
   */
  document.addEventListener("DOMContentLoaded", function () {
    var currentPath = window.location.pathname.split("/").pop();

    // Find all dropdown items and their parent links
    var dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // This assumes your dropdown-item href correctly points to the target page
        var targetPage = this.getAttribute("href").split("/").pop();

        // Compare target page with current page
        if (targetPage === currentPath) {
          // Activate parent dropdown link
          this.closest(".wrapper")
            .querySelector(".nav-link")
            .classList.add("active");
        }
      });
    });

    // On page load, check if the current page belongs to any dropdown and activate the parent link
    dropdownItems.forEach(function (item) {
      var itemPage = item.getAttribute("href").split("/").pop();

      if (itemPage === currentPath) {
        // Activate parent dropdown link
        item
          .closest(".wrapper")
          .querySelector(".nav-link")
          .classList.add("active");
      }
    });
  });

  /**
   * Navbar GMT+9
   */
  document.addEventListener("DOMContentLoaded", function () {
    // Select all dropdown items with the class 'timezone-option'
    document
      .querySelectorAll(".dropdown-item.timezone-option")
      .forEach((item) => {
        // Attach a click event listener to each item
        item.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent the default link behavior

          // Get the timezone and flag from the clicked item's data attributes
          const timezone = item.getAttribute("data-timezone");
          const flagSrc = item.getAttribute("data-flag");

          // Update the display elements with the selected timezone and flag
          document.getElementById("timezone-text").textContent = timezone;
          document.getElementById("current-flag").src = flagSrc;
        });
      });
  });
  /**
   * Breadcrumb Date
   */
  document.addEventListener("DOMContentLoaded", (event) => {
    const dateDropdownButton = document.getElementById("dateDropdownButton");
    const selectedDate = document.getElementById("selectedDate");

    document.querySelectorAll(".date-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const date = item.getAttribute("data-date");
        selectedDate.textContent = date;
        dateDropdownButton.textContent = date;
      });
    });
  });

  /**
   * Breadcrumb MATCH
   */
  document.addEventListener("DOMContentLoaded", function () {
    var dropdownItems = document.querySelectorAll(".drop-match");

    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var fullMatchButton = document.getElementById("dropdownMatchLink");
        fullMatchButton.innerHTML =
          this.innerHTML + ' <i class="ri-arrow-down-s-line"></i>';
      });
    });
  });

  /**
   * Minigames Check Box
   */
  document.addEventListener("DOMContentLoaded", function () {
    // Toggle icon-active class and color for all icons when the th icon is clicked
    document.querySelector(".check-all").addEventListener("click", function () {
      // This toggles the state for the th icon itself
      this.classList.toggle("icon-active");

      // Get the current state after the toggle
      var isActive = this.classList.contains("icon-active");

      // Query all check-one icons
      var allTdIcons = document.querySelectorAll(".check-one");
      allTdIcons.forEach((icon) => {
        // Apply or remove 'icon-active' based on the th icon's state
        if (isActive) {
          icon.classList.add("icon-active");
        } else {
          icon.classList.remove("icon-active");
        }
      });
    });

    // Individual td icons toggle their own state independently
    document.querySelectorAll(".check-one").forEach(function (tdIcon) {
      tdIcon.addEventListener("click", function () {
        this.classList.toggle("icon-active");
      });
    });
  });
})();
