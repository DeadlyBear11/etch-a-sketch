
// Create and add 16 divs to container.
const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    container.appendChild(block);
}

// Function to change the color of a block permanently.
function changeColor(e) {
    e.path[0].classList.add("hover-color");
}

// Function to add event-listener to every block.
function addEventToChildren(element) {
    const children = element.childNodes;
    for (let j = 0; j < children.length; j++) {
        const block = children[j];
        block.addEventListener("mouseover", changeColor);
    }
}

// Add event-listener with changeColor to each children of container.
addEventToChildren(container);

// Function to change the number of blocks inside container.
// Ask the user to input the number of blocks per side desired (max. 100).
const btn = document.querySelector("#button");
btn.addEventListener("click", changeBlocksNum);

function changeBlocksNum() {
    let nBlocks = 0;

    // Deal with numbers higher than 100.
    do {
    nBlocks = +prompt("Enter the number of desired blocks per side (max. 100):");
    } while (nBlocks > 100);

    let blockSize = 512 / nBlocks;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Build the new canvas of blocks.
    for (let k = 1; k <= (nBlocks**2); k++) {
        const block = document.createElement("div");
        block.style.width = `${blockSize}px`;
        block.style.height = `${blockSize}px`;
        block.classList.add("block-new");
        block.addEventListener("mouseover", () => block.classList.add("hover-color"));
        container.appendChild(block);
    }
}
