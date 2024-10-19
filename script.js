// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {

    const table = document.getElementById("grid");
    const row = document.createElement("tr");

    if (numCols === 0) {
        numCols = 1; // Set default column count to 1
    }
    
    // Add cells equal to the current number of columns
    for (let i = 0; i < numCols; i++) {
        const cell = document.createElement("td");
        cell.onclick = function() { colorCell(this); };
        row.appendChild(cell);
    }
    
    table.appendChild(row);
    numRows++;
}

// Add a column
function addC() {
    const rows = document.getElementById("grid").getElementsByTagName("tr");

    // Add a new cell to each row
    for (let i = 0; i < numRows; i++) {
        const cell = document.createElement("td");
        cell.onclick = function() { colorCell(this); };
        rows[i].appendChild(cell);
    }

    numCols++;
}

// Remove a row
function removeR() {
    if (numRows > 0) {
        const table = document.getElementById("grid");
        table.deleteRow(-1);
        numRows--;
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        const rows = document.getElementById("grid").getElementsByTagName("tr");
        
        for (let i = 0; i < numRows; i++) {
            rows[i].deleteCell(-1);
        }

        numCols--;
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}
// Color a single cell upon click
function colorCell(cell) {
    colorSelected = document.getElementById("selectedColorId").value;

    if (colorSelected !== "SELECT") {
        cell.style.backgroundColor = colorSelected;
    }
}
// Fill all uncolored cells
function fillU(){
    const rows = document.getElementById("grid").getElementsByTagName("tr");

    for (let i = 0; i < numRows; i++) {
        const cells = rows[i].getElementsByTagName("td");

        for (let j = 0; j < numCols; j++) {
            if (cells[j].style.backgroundColor === "" | cells[j].style.backgroundColor === "White") { // Check if cell is uncolored
                cells[j].style.backgroundColor = colorSelected; // Set cell to color if uncolored
            }
        }
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}