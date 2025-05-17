const container = document.querySelector("div");
function getSquares() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div")
        square.classList.add("grid-square")
        container.appendChild(square)
    };
};

getSquares()