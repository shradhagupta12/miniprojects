const wrapper = document.querySelector(".wrapper"),
    generateBtn = wrapper.querySelector(".form button"),
    qrInput = wrapper.querySelector(".form input"),
    qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return; // Empty value is not allowed 

    generateBtn.innerHTML = "Generating QR Code....";

    //QR Code API 
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    wrapper.classList.add("active");
    generateBtn.innerHTML = "Generator QR Code";
});