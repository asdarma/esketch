const gridContainer = document.querySelector(".grid-container");
const buttonReset = document.querySelector(".btn-reset");
const buttonSize = document.querySelector(".btn-size");

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for ( let i = 0; i < size*size; i++ ) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black';
            console.log("mouseover");
        });
    gridContainer.appendChild(square);
    };
};

createGrid(16);

buttonSize.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    let size = prompt("TYPE THE SIZE OF THE GRID (1-50)");
    if (size < 1 || size > 50)
        return alert("ENTER ONLY 1-50");
    else {
        return createGrid(size);
    };
});

buttonReset.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    createGrid(16);
});