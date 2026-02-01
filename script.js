// Intro screen removal
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  setTimeout(() => {
    intro.remove();
  }, 3200);
});


// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Sword slash trigger on scroll
const sections = document.querySelectorAll(".section");
const slashLeft = document.querySelector(".slash-left");
const slashRight = document.querySelector(".slash-right");

const triggerSlash = () => {
  slashLeft.classList.add("active");
  slashRight.classList.add("active");

  setTimeout(() => {
    slashLeft.classList.remove("active");
    slashRight.classList.remove("active");
  }, 700);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        triggerSlash();
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => observer.observe(section));

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#dc2626";
      valid = false;
    } else {
      input.style.borderColor = "#7f1d1d";
    }
  });

  if (!valid) {
    e.preventDefault();
    alert("⚠️ Please fill in all fields before sending.");
  }
});
