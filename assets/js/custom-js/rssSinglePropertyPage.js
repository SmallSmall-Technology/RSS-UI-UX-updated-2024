const rangeInput = document.getElementById("customRange1");
const rangeLabel = document.getElementById("rangeLabel");

const updateLabel = () => {
  const percentage = (rangeInput.value / rangeInput.max) * 100;
  rangeLabel.textContent = `${percentage}%`;
};
rangeInput.addEventListener("input", updateLabel);

updateLabel();

gsap.registerPlugin(ScrollTrigger);

// Select each element with a `zoom-up` class
gsap.utils.toArray(".zoom-up").forEach((element) => {
  gsap.from(element, {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.5,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });
});
