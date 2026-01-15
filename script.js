// Language toggle
let currentLang = "jp";

const toggle = document.getElementById("langToggle");
const elements = document.querySelectorAll("[data-jp]");

function updateLang() {
  elements.forEach(el => {
    el.textContent = el.dataset[currentLang];
  });
}

toggle.addEventListener("click", () => {
  currentLang = currentLang === "jp" ? "en" : "jp";
  toggle.textContent = currentLang === "jp" ? "EN" : "JP";
  updateLang();
});

updateLang();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

reveals.forEach(r => observer.observe(r));
