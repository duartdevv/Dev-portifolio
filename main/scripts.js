const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
    spotlight.style.background = `radial-gradient(
    circle 150px at ${e.clientX}px ${e.clientY}px,
    rgba(0, 62, 177, 0.43),
    transparent 70%
    )`;
});