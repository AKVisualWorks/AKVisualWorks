// Language toggle
const jpBtn = document.getElementById("jpBtn");
const enBtn = document.getElementById("enBtn");

jpBtn.onclick = () => switchLang("jp");
enBtn.onclick = () => switchLang("en");

function switchLang(lang) {
  document.querySelectorAll(".jp").forEach(e => e.classList.toggle("hidden", lang !== "jp"));
  document.querySelectorAll(".en").forEach(e => e.classList.toggle("hidden", lang !== "en"));

  jpBtn.classList.toggle("active", lang === "jp");
  enBtn.classList.toggle("active", lang === "en");
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
