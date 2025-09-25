// FOOTER
const footerYear = document.querySelector("[data-year]");

const currentYear = new Date().getFullYear();

if (footerYear) {
  footerYear.textContent = currentYear;
}

// MOBILE MENU
const hamburger = document.querySelector("[data-btn-hamburger]");
const menu = document.querySelector("[data-mobile-menu]");

hamburger.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    // If the menu is currently active, add the slide-up class to hide it
    menu.classList.add("slide-up");
    menu.classList.remove("active");

    setTimeout(() => {
      // After the slide-up animation ends, hide the menu
      menu.classList.add("hidden");
      menu.classList.remove("slide-up");
    }, 300); // Wait for the transition to complete
  } else {
    // If the menu is hidden, show it by toggling the active class
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.add("active");
    }, 10); // Small delay to ensure transition works correctly
  }
});

// FAQ SCRIPT
const questions = document.querySelectorAll("[data-frequent-question]");

if (questions) {
  questions.forEach(question => {
    question.querySelector("button").addEventListener("click", () => {
      question.querySelector(".question").classList.toggle("bg-custom");
      question.querySelector(".plus").classList.toggle("hidden");
      question.querySelector(".minus").classList.toggle("hidden");
      question.querySelector("dd").classList.toggle("hidden");
    });
  });
}

// MOBILE MENU DROPDOWNS
const btnService = document.querySelector("[data-btn-services]");
const servicesIcon = document.querySelector("[data-services-icon]");
const serviceLinks = document.querySelectorAll(".service-link");
const btnServiceAreas = document.querySelector("[data-btn-service-areas]");
const serviceAreasIcon = document.querySelector("[data-service-areas-icon]");
const serviceAreasLinks = document.querySelectorAll(".service-areas-link");


btnService.addEventListener("click", () => {
  servicesIcon.classList.toggle("rotate-180");
  serviceLinks.forEach(link => {
    link.classList.toggle("hidden");
    link.classList.toggle("block");
  });
});

btnServiceAreas.addEventListener("click", () => {
  serviceAreasIcon.classList.toggle("rotate-180");
  serviceAreasLinks.forEach(link => {
    link.classList.toggle("hidden");
    link.classList.toggle("block");
  });
});

/*
const btnLocation = document.querySelector("[data-btn-locations]");
const locationIcon = document.querySelector("[data-locations-icon]");
const locationLinks = document.querySelectorAll(".location-link");

btnLocation.addEventListener("click", () => {
  locationIcon.classList.toggle("rotate-180");
  locationLinks.forEach(link => {
    link.classList.toggle("hidden");
    link.classList.toggle("block");
  });
});
*/

// MODAL JS
const myModal = document.querySelector("[data-modal-popup]");
const heroForm = document.querySelector("[data-hero-form]");
const btnCloseModal = document.querySelector("[data-btn-close-modal]");
const btnModal = document.querySelectorAll(".btn-modal");
const modalBg = document.querySelector("[data-modal-bg]");

if (myModal) {
  btnModal.forEach(btn => {
    btn.addEventListener("click", () => {
      myModal.classList.toggle("hidden");
      heroForm.classList.toggle("hidden");
    });
  });

  btnCloseModal.addEventListener("click", () => {
    myModal.classList.toggle("hidden");
    heroForm.classList.toggle("hidden");
  });

  modalBg.addEventListener("click", () => {
    myModal.classList.toggle("hidden");
    heroForm.classList.toggle("hidden");
  });
}
