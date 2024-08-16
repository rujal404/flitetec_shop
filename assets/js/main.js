window.onload = function() {
    // Get the popup and main content elements
    var popup = document.getElementById("popup");
    var mainContent = document.getElementById("mainContent");
    var closePopupBtn = document.getElementById("closePopupBtn");

    // Show the popup immediately on page load
    popup.style.display = "flex";

    // Close the popup and show the main content when the close button is clicked
    closePopupBtn.onclick = function() {
        popup.style.display = "none";
        mainContent.style.display = "block";
    };

    // Automatically close the popup after 3 seconds
    setTimeout(function() {
        if (popup.style.display !== "none") {
            popup.style.display = "none";
            mainContent.style.display = "block";
        }
    }, 20000); // Adjust the timing as needed
};

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// aabout container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// product contaainer
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

// article contaainer
ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});
