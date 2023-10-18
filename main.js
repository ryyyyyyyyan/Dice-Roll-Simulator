// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById("output");

// Menu Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Process Selection
  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "roll-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL ONCE</h3>";

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 5 TIMES</h3>";

  for (let i = 1; i < 6; i++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
  let n = prompt("Please enter the times of dice rolls: ");
  for (let i = 1; i <= n; i++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL UNTIL SNAKE EYES</h3>";

  let total = 0;
  let i = 0;

  while (total != 2) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);

    i++;
  }
  let pEl = document.createElement("p");
  pEl.innerHTML = `SNAKE EYES! It took ${i} rolls to get snake eyes.`;
  outputEl.appendChild(pEl);
}
