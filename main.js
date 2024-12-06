"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const buttons = document.querySelectorAll(".button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.innerText;

            if (value === "C") {
                currentInput = "";
                output.innerText = "Type Something...";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                    if (isNaN(currentInput)) {
                        output.innerText = "Error";
                        currentInput = "";
                    } else {
                        output.innerText = currentInput;
                    }
                } catch {
                    output.innerText = "Error";
                    currentInput = "";
                }
            } else if (value === "sin" || value === "cos" || value === "tan" || value === "sqrt") {
                try {
                    const angle = eval(currentInput);
                    let result;
                    if (value === "sin") {
                        result = Math.sin(angle);
                    } else if (value === "cos") {
                        result = Math.cos(angle);
                    } else if (value === "tan") {
                        result = Math.tan(angle);
                    } else if (value === "sqrt") {
                        result = Math.sqrt(angle);
                    }
                    currentInput = result.toString();
                    output.innerText = currentInput;
                } catch {
                    output.innerText = "Error";
                    currentInput = "";
                }
            } else {
                currentInput += value;
                output.innerText = currentInput;
            }
        });
    });
});

