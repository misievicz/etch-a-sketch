function red() {
  return "rgb(" + Math.floor(Math.random() * 256) + "," + 56 + "," + 220 + ")";
}

const size = 16;
function changeSize(size) {
    return newSize = size;
}

const main = document.querySelector(".main-container");

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
makeGrid(size);
let cell = main.children;

function reset() {
    while (main.firstChild) {
    main.removeChild(main.lastChild);
    }
}


let b = document.querySelector('button')
b.addEventListener('click', function (e) {
    reset();
    makeGrid(16);
    changeSize(16);
});

let b1 = document.getElementById("#btns1");
b1.addEventListener("click", function (e) {
    reset();
    makeGrid(64);
    changeSize(64);
});

let b2 = document.getElementById("#btns2");
b2.addEventListener("click", function (e) {
    reset();
    makeGrid(newSize);
});

let b3 = document.getElementById("#btns3");

b3.addEventListener("click", function (e) {
    for (let i = 0; i < cell.length; i++) {
      cell[i].addEventListener("mouseover", function () {
        cell[i].style.backgroundColor = red();
      });
    }
});





