function red() {
  return "rgb(" + Math.floor(Math.random() * 256) + "," + 56 + "," + 220 + ")";
}

const main = document.querySelector(".main-container");
let cell = main.children;

function changeSize(size) {
  return (newSize = size);
}
function changeMode(color) {
  return (currentColor = color);
}
function makeGrid(number) {
  let gridBasis = 700 / number;
  let gridBasisString = gridBasis.toString();
  gridBasisString += "px";
  document.documentElement.style.setProperty("--basis", gridBasisString);
  for (let i = 0; i < number * number; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    main.appendChild(grid);
  }
}
function makeColor(color) {
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("mouseover", function () {
      cell[i].style.backgroundColor = color;
    });
  }
  changeMode(color);
}

function reset() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}

document.querySelector("button").addEventListener("click", function (event) {
  reset();
  makeGrid(16);
  changeSize(16);
  makeColor(currentColor);
});

document.getElementById("#btns1").addEventListener("click", function (event) {
  reset();
  makeGrid(64);
  changeSize(64);
  makeColor(currentColor);
});

let b2 = document.getElementById("#btns2");
b2.addEventListener("click", function (e) {
  reset();
  makeGrid(16);
  makeColor(currentColor);
});

let b3 = document.getElementById("#btns3");
b3.addEventListener("click", function (e) {
  makeColor("white");
  changeMode("white");
});

window.onload = makeGrid(16), makeColor("white");
