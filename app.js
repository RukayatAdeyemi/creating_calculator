const textValidation = document.getElementById("validateText")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const subtract = document.getElementById("subtractionBtn")
const add = document.getElementById("additionBtn")
const mutiply = document.getElementById("multiplicationBtn")
const resultDisplay = document.getElementById("resultDisplay")

//  For Subtraction
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
            "border-2",
            "bg-green-600",
            "border-green-600",
            "font-bold",
            "text-white",
            "text-center",
            "text-4xl",
            "rounded",
            "m-auto"
        ]
        myNewSpan.classList.add(...myStyle);
        resultDisplay.appendChild(myNewSpan);
    }
})

//  For Addition
add.addEventListener("click", (event) => {
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
        const result = (num1Value + num2Value)
        resultDisplay.innerHTML = "";
        const myNewSpan = document.createElement("span");
        myNewSpan.textContent = result;
        const myStyle = [
            "w-auto",
            "h-auto",
            "border-2",
            "bg-green-600",
            "border-green-600",
            "font-bold",
            "text-white",
            "text-center",
            "text-4xl",
            "rounded",
            "m-auto"
        ]
        myNewSpan.classList.add(...myStyle);
        resultDisplay.appendChild(myNewSpan);
    }
})
// Mutiplication
mutiply.addEventListener("click", (event) => {
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
        const result = (num1Value * num2Value)
        resultDisplay.innerHTML = "";
        const myNewSpan = document.createElement("span");
        myNewSpan.textContent = result;
        const myStyle = [
            "w-20",
            "h-10",
            "border-2",
            "bg-green-600",
            "border-green-600",
            "font-bold",
            "text-white",
            "text-center",
            "text-4xl",
            "rounded",
            "m-auto",
        ]
        myNewSpan.classList.add(...myStyle);
        resultDisplay.appendChild(myNewSpan);
    }
})

