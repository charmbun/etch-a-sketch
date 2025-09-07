/* ===============================
   1. Variables and Flags
================================= */

let gridSize;
let brushColor;
let cellSize = 500 / gridSize;
let isMouseDown = false;
let eraserOn = false;

const grid = document.querySelector(".grid");
const colorPicker = document.querySelector("#color-picker");
const sizeSetter = document.querySelector("#size-setter")
const sizeValue = document.querySelector("#size-value");
const clearBtn = document.querySelector(".clear-btn")
const brushBtn = document.querySelector(".brush-btn");
const eraserBtn = document.querySelector(".eraser-btn");
const saveBtn = document.querySelector(".save-btn")

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

brushBtn.addEventListener("click", () => {
    eraserOn = false;
    brushBtn.classList.add("active-tool");
    eraserBtn.classList.remove("active-tool");
})

eraserBtn.addEventListener("click", () => {
    eraserOn = true;
    eraserBtn.classList.add("active-tool");
    brushBtn.classList.remove("active-tool");
})

clearBtn.addEventListener("click", () => {
    const cells= grid.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "");
})

saveBtn.addEventListener("click", () => {
    html2canvas(grid).then(canvas => {
        const link = document.createElement("a");
        link.download = "etch-a-sketch.png";
        link.href = canvas.toDataURL();
        link.click();
    });
})

colorPicker.addEventListener("input", () => {
    brushColor = colorPicker.value;
})

sizeSetter.addEventListener("input", () => {
    gridSize = sizeSetter.value;
    sizeValue.textContent = `${gridSize}x${gridSize}`;
    createGrid(gridSize);
})

/* ===============================
   4. Initialization
================================= */

function init() {
    
    gridSize = 32;
    createGrid(gridSize);

    sizeValue.textContent = `${gridSize}x${gridSize}`;

    brushBtn.classList.add("active-tool");
    brushColor = "#FFB3CF";
}

document.addEventListener("DOMContentLoaded", init);