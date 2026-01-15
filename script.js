const jpBtn = document.getElementById("jpBtn");
const enBtn = document.getElementById("enBtn");

function switchLang(lang) {
  document.querySelectorAll("[data-jp]").forEach(el => {
    el.textContent = lang === "jp" ? el.dataset.jp : el.dataset.en;
  });

  jpBtn.classList.toggle("active", lang === "jp");
  enBtn.classList.toggle("active", lang === "en");
}

jpBtn.onclick = () => switchLang("jp");
enBtn.onclick = () => switchLang("en");

switchLang("jp");
