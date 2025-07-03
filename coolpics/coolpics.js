const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");


menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

const gallery = document.querySelector(".gallery");
const viewer = document.createElement("dialog");
viewer.classList.add("viewer");
viewer.innerHTML = `
  <div class="viewer-box">
    <button class="close-viewer">X</button>
    <img src="" alt="">
  </div>
`;


document.body.appendChild(viewer);
const closeButton = viewer.querySelector(".close-viewer");
const viewerImage = viewer.querySelector("img");
closeButton.addEventListener("click", () => {
  viewer.close();
});
viewer.addEventListener("cancel", (e) => e.preventDefault());
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    e.stopPropagation();
  }
});


gallery.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName.toLowerCase() !== "img") return;
  const src = target.getAttribute("src");
  const alt = target.getAttribute("alt");
  const fullSrc = src.split("-")[0] + "-full.jpeg";
  viewerImage.src = fullSrc;
  viewerImage.alt = alt;
  viewer.showModal();
});
