// Scroll reveal
const reveals = document.querySelectorAll(
  ".reveal-up, .reveal-left, .reveal-scale, .reveal-slow"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(r => observer.observe(r));

// Language toggle
const jpBtn = document.getElementById("jpBtn");
const enBtn = document.getElementById("enBtn");
const translatable = document.querySelectorAll("[data-jp]");

function setLang(lang) {
  translatable.forEach(el => {
    el.textContent = el.dataset[lang];
  });
  jpBtn.classList.toggle("active", lang === "jp");
  enBtn.classList.toggle("active", lang === "en");
  document.documentElement.lang = lang;
}

jpBtn.onclick = () => setLang("jp");
enBtn.onclick = () => setLang("en");

// Default JP
setLang("jp");
