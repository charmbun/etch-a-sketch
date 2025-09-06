/* ===============================
   1. Variables 
================================= */

let gridSize = 4; 
let cellSize = 500 / gridSize;

const grid = document.querySelector(".grid");
const setSizeBtn = document.querySelector(".setSizeBtn");

/* ===============================
   2. Functions
================================= */

function createGrid(gridSize) {

    cellSize = 500 / gridSize;
    grid.innerHTML = '';
    for (let i = 0; i < gridSize*gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.appendChild(cell);
    }
}

/* ===============================
   3. Event Listeners
================================= */

setSizeBtn.addEventListener("click", () => {
    const input = prompt("Enter the size of the grid");
    newSize = Number(input);

    if (!input || isNaN(newSize)) {
        alert("Please enter a valid number.")
        return;
    }

    if (newSize <= 0 || newSize > 100){
        alert("Only enter numbers between 1 and 100.");
        return;
    }
    
    gridSize = newSize;
    createGrid(gridSize);
});

/* ===============================
   4. On StartUp
================================= */

createGrid(gridSize);
