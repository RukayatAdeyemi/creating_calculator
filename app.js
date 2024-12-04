const textValidation = document.getElementById("validateText")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const subtract = document.getElementById("subtractionBtn")
const add = document.getElementById("additionBtn")
const resultDisplay = document.getElementById("resultDisplay")

subtract.addEventListener("click", (event) => {
    event.preventDefault();
    const num1Value = parseFloat(num1.value);
    const num2Value = parseFloat(num2.value);
    if  (num1.value === "" || num2.value === ""){
        textValidation.textContent = "Please enter a valid number";
        textValidation.className = "text-red-600 text-center font-bold mb-4"
    }
    else if (isNaN(num1Value) || isNaN(num2Value)) {
        textValidation.textContent = "Please enter valid numbers, not strings or symbols.";
        textValidation.className = "text-red-600 text-center font-bold mb-4";
    }
    else {
        textValidation.textContent = "";
        const result = (num1Value - num2Value)
        resultDisplay.innerHTML = "";
        const myNewSpan = document.createElement("span");
        myNewSpan.textContent = result;
        const myStyle = [
            "w-20",
            "h-10",
            "flex",
            "justify-center",
            "items-center",
            "border-2",
            "border-green-600",
            "text-center",
            "text-2xl",
            "font-bold",
            "text-white",
            "bg-green-500",
            "rounded"
        ]
        myNewSpan.classList.add(...myStyle);
        resultDisplay.appendChild(myNewSpan);
    }
})
