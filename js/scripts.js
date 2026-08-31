// ---- Sun by day, moon by night ----------------------------------------
// Background stays light either way; only the sky body changes.
// ?time=day or ?time=night forces one (handy for testing).
function pickTimeOfDay(hour) {
  return hour >= 6 && hour < 18 ? "day" : "night";
}

const override = new URLSearchParams(location.search).get("time");
const time =
  override === "day" || override === "night"
    ? override
    : pickTimeOfDay(new Date().getHours());

document.body.dataset.time = time;

// ---- Gentle cursor parallax -------------------------------------------
// Applied to the wrapper so the SVG's own "sway" keeps running.
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
