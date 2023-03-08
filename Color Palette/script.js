const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 12;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container

    for (let i = 0; i < maxPaletteBoxes; i++) {


        // generating a random hex color value
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;



        //creating a new li elements and inserting it  to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background : ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span> `;

        // adding  click event to copy the hexa number 
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color);
    }

}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerHTML = "Copied";
        setTimeout(() => colorElement.innerHTML = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color"))
}

refreshBtn.addEventListener("click", generatePalette)