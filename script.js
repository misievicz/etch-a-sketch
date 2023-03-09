const main = document.querySelector('.main-container');

let number = 10;
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
cell[55].style.backgroundColor = "white";
 

for (i = 0; i < number * number - 1; i++) {
    cell[i].addEventListener("mouseover", function () {
        console.log('hi');
    });
}