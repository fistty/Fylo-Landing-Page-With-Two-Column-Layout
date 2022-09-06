const link = document.querySelector(".main-link");
const svg = document.querySelector(".svg-fill");
const headerForm = document.querySelector(".header-form");
const sectionForm = document.querySelector(".section-form");

const headerEmail = document.querySelector(".header-email-input");
const sectionEmail = document.querySelector(".section-email-input");

const headerSubmit = document.querySelector(".header-submit");
const sectionSubmit = document.querySelector(".section-submit");

const headerEmailContainer = document.querySelector(
  ".header-email-input-container"
);
const sectionEmailContainer = document.querySelector(
  ".section-email-input-container"
);

const successMessage = document.querySelector(".success-message");
const successMessageSection = document.querySelector(
  ".success-message-section"
);

let checkEmail = "Please check your email";
let existingEmail = "Email already exists";
let enterEmail = "Enter an email";

const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let emailArray = [];

/* TO PREVENT PAGE REFRESH */
headerForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

sectionForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
/* -------- */

/* HEADER EMAIL VALIDATOR */
headerSubmit.addEventListener("click", () => {
  /* CHECKS FOR EMPTY VALUE */
  if (headerEmail.value === "") {
    headerEmailContainer.dataset.error = enterEmail;
    return;
  }

  /* CHECKS FOR INVALIDE EMAIL */
  if (!headerEmail.value.match(regex)) {
    headerEmailContainer.dataset.error = checkEmail;
    return;
  }

  /* IF EMAIL IS VALIDATED */
  if (headerEmail.value.match(regex)) {
    let idx = emailArray.findIndex((num) => num === headerEmail.value);

    /* CHECKS FOR ALREADY ENTERED EMAIL */
    if (idx >= 0) {
      headerEmailContainer.dataset.error = existingEmail;
      return;
    }
    emailArray.push(headerEmail.value);

    /* DISPLAYS SUCCESS MESSAGE WITH DELAY */
    setTimeout(() => {
      successMessage.style.opacity = 1;
      successMessage.style.visibility = "visible";
    }, 500);
    setTimeout(() => {
      successMessage.style.opacity = 0;
      successMessage.style.visibility = "hidden";
    }, 3000);
  }
});

/* SECTION EMAIL VALIDATOR */
sectionSubmit.addEventListener("click", () => {
  /* CHECKS FOR EMPTY VALUE */
  if (sectionEmail.value === "") {
    sectionEmailContainer.dataset.error = enterEmail;

    return;
  }

  /* CHECKS FOR INVALIDE EMAIL */
  if (!sectionEmail.value.match(regex)) {
    sectionEmailContainer.dataset.error = checkEmail;

    return;
  }

  /* IF EMAIL IS VALIDATED */
  if (sectionEmail.value.match(regex)) {
    let idx = emailArray.findIndex((num) => num === sectionEmail.value);

    /* CHECKS FOR ALREADY ENTERED EMAIL */
    if (idx >= 0) {
      sectionEmailContainer.dataset.error = existingEmail;

      return;
    }
    emailArray.push(sectionEmail.value);

    /* DISPLAYS SUCCESS MESSAGE WITH DELAY */
    setTimeout(() => {
      successMessageSection.style.opacity = 1;
      successMessageSection.style.visibility = "visible";
    }, 500);
    setTimeout(() => {
      successMessageSection.style.opacity = 0;
      successMessageSection.style.visibility = "hidden";
    }, 3000);
  }
});

/* TO CLEAR ERROR MESSAGES WHEN USER INPUTS EMAIL */
const clearError = () => {
  headerEmailContainer.dataset.error = "";
  sectionEmailContainer.dataset.error = "";
};

/* HOVER EFFECT ON SECTION LINK --- MOVING IMAGE */
link.addEventListener("mouseover", () => {
  svg.attributes[1].textContent = "rgb(112, 220, 192)";
});

link.addEventListener("mouseout", () => {
  svg.attributes[1].textContent = "#3DA08F";
});
