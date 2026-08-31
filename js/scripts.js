// Gentle parallax: the little house drifts ever so slightly toward the cursor.
// (Applied to the wrapper so the SVG's own "sway" animation keeps running.)
const scene = document.querySelector(".scene");

if (scene && window.matchMedia("(hover: hover)").matches) {
  const damp = 8;
  window.addEventListener("pointermove", (e) => {
    const dx = (e.clientX / window.innerWidth - 0.5) * damp;
    const dy = (e.clientY / window.innerHeight - 0.5) * damp;
    scene.style.transform = `translate(${dx}px, ${dy}px)`;
  });

  window.addEventListener("pointerleave", () => {
    scene.style.transform = "";
  });
}
