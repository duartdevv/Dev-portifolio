// spotlight effect - bug em display menores !!
const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove", (e) => {
    spotlight.style.background = `radial-gradient(
    circle 150px at ${e.clientX}px ${e.clientY}px,
    rgba(0, 62, 177, 0.43),
    transparent 70%
    )`;
});

const text = "< / Duarte Dev >";
const h1 = document.querySelector("header h1");
h1.innerText = "";
let i = 0;
// typewriter effect
function typeWriter() {
  if (i < text.length) {
    h1.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();
// smooth-scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
