const getToKnowButton = document.getElementById("getToKnowButton");
const linksContainer = document.getElementById("linksContainer");

getToKnowButton.addEventListener("click", () => {
  getToKnowButton.style.display = "none";
  linksContainer.style.display = "block";
});

window.addEventListener("mousemove", (event) => {
  const mouseTracker = document.getElementById("mouse-tracker");
  mouseTracker.style.left = `${event.clientX}px`;
  mouseTracker.style.top = `${event.clientY}px`;
});
