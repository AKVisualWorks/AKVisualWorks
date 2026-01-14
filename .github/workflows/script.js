// List your YouTube video IDs here
const videos = [
  { id: "YOUR_VIDEO_ID1", title: "Project 1" },
  { id: "YOUR_VIDEO_ID2", title: "Project 2" },
  { id: "YOUR_VIDEO_ID3", title: "Project 3" }
];

// Grab the gallery container
const gallery = document.getElementById("video-gallery");

// Dynamically add videos
videos.forEach(video => {
  const card = document.createElement("div");
  card.classList.add("video-card");

  card.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></iframe>
    <p>${video.title}</p>
  `;

  gallery.appendChild(card);
});
