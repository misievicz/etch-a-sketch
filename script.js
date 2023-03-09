const main = document.querySelector('.main-container');

let number = 6;
let gridBasis = 700 / number;
let gridBasisString = gridBasis.toString();
gridBasisString += "px";

document.documentElement.style.setProperty("--basis", gridBasisString);

for (let i = 0; i < number * number; i++) {
    const grid = document.createElement("div");
    grid.classList.add('grid');
    main.appendChild(grid);
}

