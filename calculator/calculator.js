
class Calculator {
    constructor(prevOutputElement, currentOutputElement) {
        this.prevOutputElement = prevOutputElement;
        this.currentOutputElement = currentOutputElement;
        this.zeros = 0
        this.clear();
    }

    clear() {
        this.prevOutput = "";
        this.currentOutput = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOutput = this.currentOutput.toString().slice(0,-1)
    }

    
    appendNumber(number) {
        if (number === "0") {
            if (this.currentOutput === "" || /[1-9]$/.test(this.currentOutput)) {
                this.currentOutput += number;
            }
        } else {
            this.currentOutput += number;
        }
    }
    

    chooseOperation(operation) {
        if (this.currentOutput === "") return

        if (this.prevOutput != ""){
            this.compute()
        }
        this.operation = operation;
        this.prevOutput = `${this.currentOutput+this.operation}`;
        this.currentOutput = "";
    }

    compute() {
        let result;
        const prev = parseFloat(this.prevOutput);
        const current = parseFloat(this.currentOutput);
        switch (this.operation) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                if (current ===0) {
                    this.currentOutput = "you are an idiot !"
                } else {
                    result = prev / current;
                }
                
                break;
            default:
                break;
        }
        this.prevOutput = this.currentOutput
        if (this.prevOutput === "you are an idiot !") {
            this.currentOutput = "do you want to devide by 0 ??!!"
        } else {
            this.currentOutput = result
        }
    }

    display() {
        this.currentOutputElement.innerText = this.currentOutput;
        this.prevOutputElement.innerText = `${this.prevOutput}`
    

    }
}

const numbers = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operand]");
const deleteButton = document.querySelector("[data-delete]");
const acButton = document.querySelector("[data-ac-button]");
const dotButton = document.querySelector("[data-operand='.']");
const equalButton = document.querySelector("[equal-button]");
const prevOutputElement = document.querySelector(".prevop");
const currentOutputElement = document.querySelector(".crntop");

const calculator = new Calculator(prevOutputElement, currentOutputElement);

numbers.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.display();
    });
});

operations.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.display();
    });
});

acButton.addEventListener("click", () => {
    calculator.clear();
    calculator.display();
});

equalButton.addEventListener("click", ()=>{
    calculator.compute()
    calculator.display()
})
deleteButton.addEventListener("click", ()=>{
    calculator.delete()
    calculator.display()
})
