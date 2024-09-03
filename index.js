let userInput = document.querySelector("#userInput");
let btn = document.querySelector("#mybutton");
let numberOfGrids = 256;
const grid = document.querySelector(".container");

btn.addEventListener("click", () => {
    let gridSize = userInput.value;
    if(gridSize < 1){
        gridSize = 1;
    }else if(gridSize > 100){
        gridSize = 100;
    }
    generateGrid(gridSize);
});

generateGrid(16);

function generateGrid(size) {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 0; i < size*size; i++) {
        const sq = document.createElement("div");
        sq.style.flex = `0 0 ${100/size}%`;
        sq.classList.add("square");
        grid.appendChild(sq);

        sq.addEventListener("mouseenter", () => {
            sq.style.background = 'white';
        });
       

        
    }
}




