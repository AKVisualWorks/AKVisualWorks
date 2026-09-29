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

// Before/After sliders
document.querySelectorAll(".ba-slider-frame").forEach(frame => {
  const wrap = frame.querySelector(".ba-before-wrap");
  const beforeImg = frame.querySelector(".ba-img-before");
  const handle = frame.querySelector(".ba-handle");

  function syncBeforeWidth() {
    beforeImg.style.width = frame.offsetWidth + "px";
  }

  function setPct(pct) {
    pct = Math.max(0, Math.min(100, pct));
    wrap.style.width = pct + "%";
    handle.style.left = pct + "%";
  }

  function pctFromEvent(clientX) {
    const rect = frame.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  syncBeforeWidth();
  setPct(50);
  window.addEventListener("resize", syncBeforeWidth);

  let dragging = false;

  frame.addEventListener("pointerdown", e => {
    dragging = true;
    frame.setPointerCapture(e.pointerId);
    setPct(pctFromEvent(e.clientX));
  });

  frame.addEventListener("pointermove", e => {
    if (!dragging) return;
    setPct(pctFromEvent(e.clientX));
  });

  frame.addEventListener("pointerup", () => {
    dragging = false;
  });

  frame.addEventListener("pointercancel", () => {
    dragging = false;
  });
});
