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
  if (color === "white") {
    for (let i = 0; i < cell.length; i++) {
      cell[i].addEventListener("mouseover", function () {
        cell[i].style.backgroundColor = color;
      });
    }
    changeMode(color);
  } else if (color === "synth") {
    for (let i = 0; i < cell.length; i++) {
      cell[i].addEventListener("mouseover", function () {
        cell[i].style.backgroundColor =
          "rgb(" + Math.floor(Math.random() * 256) + "," + 56 + "," + 220 + ")";
      });
    }
    changeMode(color);
  }
}
function reset() {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
}
document.getElementById("b16").addEventListener("click", function (event) {
  reset();
  makeGrid(16);
  changeSize(16);
  makeColor(currentColor);
});
document.getElementById("b48").addEventListener("click", function (event) {
  reset();
  makeGrid(48);
  changeSize(48);
  makeColor(currentColor);
});
document.getElementById("btns1").addEventListener("click", function (event) {
    makeColor("synth");
    btns1.classList.add('btns1active');
    btns2.classList.remove('btns2active');
    
});
document.getElementById("btns2").addEventListener("click", function (event) {
    makeColor("white");
    btns2.classList.add('btns2active');
    btns1.classList.remove('btns1active');
});
document.getElementById("btns3").addEventListener("click", function (event) {
  reset();
  makeGrid(newSize);
  makeColor(currentColor);
});
(window.onload = makeGrid(16)),
  changeSize(16),
  makeColor("white"),
  btns2.classList.add("btns2active");
