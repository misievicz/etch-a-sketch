const main = document.querySelector('.main-container');

const number = 24;

for (let i = 0; i < 24 * 24; i++) {
    const grid = document.createElement("div");
    grid.classList.add('grid');
    main.appendChild(grid);
}

