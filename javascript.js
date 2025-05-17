const container = document.querySelector("div");
const chooseBtn = document.querySelector("button");

chooseBtn.addEventListener("click", () => {
    let userInput = prompt("Write a number between 1-100");
    let size = parseInt(userInput);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please choose a number between 1-100");
        return;
    }

    function createGrid() {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("grid-square")
        container.appendChild(gridSquare)
        let squareSize = 960 / size;
        gridSquare.style.height = `${squareSize}px`
        gridSquare.style.width = `${squareSize}px`

        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style["background-color"] = "black";
        });
    };
 };
 
 createGrid()

});

