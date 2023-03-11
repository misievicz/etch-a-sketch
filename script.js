const main = document.querySelector('.main-container');
let number = 20;
let gridBasis = 700 / number;
let gridBasisString = gridBasis.toString();
gridBasisString += "px";
document.documentElement.style.setProperty("--basis", gridBasisString);

function addGrid() {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    main.appendChild(grid);
}

for (let i = 0; i < number * number; i++) {
    addGrid();
}

let cell = main.children; 

for (let i = 0; i < number * number; i++) {
    cell[i].addEventListener("mouseover", function () {
        cell[i].style.backgroundColor = red();
  });
}

function red() {
    return (
      "rgb(" + Math.floor(Math.random() * 256) + "," + 56 + "," + 220 + ")"
    );
}