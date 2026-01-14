document.addEventListener("DOMContentLoaded", function() {
  const videos = [
    "https://www.youtube.com/embed/j4_-xOXHhSk",
    "https://www.youtube.com/embed/6H1cMmWg4gM",
    "https://www.youtube.com/embed/cwPZJVsMyc4",
    "https://www.youtube.com/embed/Q74PUc7Q37E",
    "https://www.youtube.com/embed/JU-fP_vyJSI"
  ];

  const gallery = document.getElementById("video-gallery");

  videos.forEach(url => {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    gallery.appendChild(iframe);
  });
});
