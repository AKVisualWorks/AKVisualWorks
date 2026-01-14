// List your videos: YouTube ID + Title + Thumbnail
const videos = [
  {
    id: "YOUR_VIDEO_ID1",
    title: "Project 1",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID1/hqdefault.jpg"
  },
  {
    id: "YOUR_VIDEO_ID2",
    title: "Project 2",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID2/hqdefault.jpg"
  },
  {
    id: "YOUR_VIDEO_ID3",
    title: "Project 3",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID3/hqdefault.jpg"
  }
];

// Gallery container
const gallery = document.getElementById("video-gallery");
const lightbox = document.getElementById("lightbox");
const lightboxIframe = lightbox.querySelector("iframe");
const lightboxClose = lightbox.querySelector(".close");

// Add video cards
videos.forEach(video => {
  const card = document.createElement("div");
  card.classList.add("video-card");
  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title}">
    <p>${video.title}</p>
  `;
  card.addEventListener("click", () => {
    lightboxIframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    lightbox.style.display = "flex";
  });
  gallery.appendChild(card);

  // Fade in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-card');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(card);
});

// Close lightbox
lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxIframe.src = "";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxIframe.src = "";
  }
});

// Page load fade-in
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Scroll progress bar + header shadow
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';

  const header = document.querySelector('header');
  if (scrollTop > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
