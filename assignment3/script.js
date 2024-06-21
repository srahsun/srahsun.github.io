// This allows the user to select all the shapes and the reset button
const shapes = document.querySelectorAll(".shape");
const container = document.querySelector(".container");
const resetButton = document.getElementById("reset");

// Array to hold the initial positions of the shapes
let initialPositions = [];

// Loop through each shape to set up event listeners and initial positions
shapes.forEach((shape, index) => {
  initialPositions[index] = shape.getBoundingClientRect();
  shape.addEventListener("dragstart", dragStart);
  shape.addEventListener("dragend", dragEnd);
  shape.addEventListener("click", handleClick);
});

// Drag start
function dragStart(e) {
  setTimeout(() => {
    this.classList.add("hide"); // Add a class to hide the shape temporarily
  }, 0);
}

// Drag end
function dragEnd(e) {
  this.classList.remove("hide"); // Remove the hide class
  const x = e.clientX - 25;
  const y = e.clientY - 25;
  this.style.position = "absolute";
  this.style.left = `${x}px`;
  this.style.top = `${y}px`;
}

// Click
function handleClick(e) {
  let clicks = parseInt(this.getAttribute("data-clicks")) + 1;
  this.setAttribute("data-clicks", clicks);
  this.textContent = clicks; // Update the shape's text with the number of clicks
}

// Reset shapes and click counts
resetButton.addEventListener("click", () => {
  shapes.forEach((shape, index) => {
    shape.style.position = "static";
    shape.style.left = "initial";
    shape.style.top = "initial";
    shape.setAttribute("data-clicks", 0);
    shape.textContent = ""; // Clear the text content of the shape
  });
});

//Challenges:
//Responsiveness: Ensuring that the drag
//and drop functionality works smoothly across different devices and screen sizes.

//Accessibility: Making sure the game is accessible to all children, including
//those with motor impairments. Future improvements might include
//keyboard navigation and screen reader support.

//Potential Benefits:
//Engagement: By using colors and simple interactions, the game is
//likely to keep kids engaged longer, enhancing their learning experience.
//Feedback: Immediate visual feedback (click counts) helps kids understand
//the concept of numbers and counting.

//Overall, this prototype serves as a stepping stone.
//In a broader project, integrating more complex math concepts and
//adaptive learning paths could make this a better educational tool to
//cater to neurodivergent children of all ages.
