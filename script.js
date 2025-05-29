document.addEventListener("DOMContentLoaded", function () {
  const words = ["RECORDING", "EDITING", "DESIGN"];
  let index = 0;
  const changingText = document.getElementById("changing-text");

  function updateText() {
    changingText.textContent = words[index];
    index = (index + 1) % words.length; // Cycle through the array
  }

  updateText(); // Initialise the first word
  setInterval(updateText, 1500); // Change every 3 seconds
});
