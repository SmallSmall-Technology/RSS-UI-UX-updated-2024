const rangeInput = document.getElementById("customRange1");
const rangeLabel = document.getElementById("rangeLabel");

const updateLabel = () => {
  const percentage = (rangeInput.value / rangeInput.max) * 100;
  rangeLabel.textContent = `${percentage}%`;
};
rangeInput.addEventListener("input", updateLabel);

updateLabel();
