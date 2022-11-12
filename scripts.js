
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
    const arr = [...children];
    for (let j = 0; j < 256; j++) {
        let block = arr[j];
        block.addEventListener("mouseover", changeColor);
    }
}

// Add event-listener with changeColor to each children of container.
addEventToChildren(container);

