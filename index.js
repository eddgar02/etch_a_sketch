let numberOfGrids = 256;
const grid  = document.querySelector(".container");

for(let i = 0;i<numberOfGrids;i++){
    const sq = document.createElement("div");
    sq.classList.add("square");

    sq.addEventListener("mouseenter", () =>{
        sq.style.background = 'white';
    });
    
    grid.appendChild(sq);
}



