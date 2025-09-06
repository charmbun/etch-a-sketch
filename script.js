/* ===============================
   1. Variables and Flags
================================= */

let gridSize = 16; 
let cellSize = 500 / gridSize;
let isMouseDown = false;
let eraserOn = false;
let brushColor = "black";

const grid = document.querySelector(".grid");
const sizeSetter = document.querySelector("#sizeSetter")
const clearBtn = document.querySelector(".clearBtn")
const brushBtn = document.querySelector(".brushBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const colorPicker = document.querySelector("#colorPicker");

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

        cell.addEventListener("mousedown", () => {
            isMouseDown = true;
            color(cell);
        })
        cell.addEventListener("mouseover", () => {
            if (isMouseDown === true) color(cell);
        })
        cell.addEventListener("mouseup", () => {
            isMouseDown = false;
        })

        grid.appendChild(cell);
    }
}

function color(cell) {
    if (eraserOn === true){
        cell.style.backgroundColor = "";
    } else {
        cell.style.backgroundColor = brushColor;
    }
}

/* ===============================
   3. Event Listeners
================================= */

sizeSetter.addEventListener("input", () => {
    gridSize = sizeSetter.value;
    createGrid(gridSize);
})

clearBtn.addEventListener("click", () => {
    const cells= grid.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "");
})

eraserBtn.addEventListener("click", () => {
    eraserOn = true;
})

brushBtn.addEventListener("click", () => {
    eraserOn = false;
})

colorPicker.addEventListener("input", () => {
    brushColor = colorPicker.value;
})

/* ===============================
   4. On StartUp
================================= */

createGrid(gridSize);