let buttons = document.querySelectorAll(".btn");
let operations = document.querySelectorAll(".operator");
let display = document.querySelector(".display");
let value = "";

buttons.forEach((ele) => {
    ele.addEventListener("click", () => {
        if(ele.innerText === "AC") {
            display.innerText = "0";
            value = "";
        } else if (ele.innerText === "=") {
            if (value.length == 0) {
                display.innerText = "0";
                value = "";
            } else {
                value = eval(value);
                display.innerText = value;
            }
        } else if (ele.innerText === "C") {
            value = value.substring(0, value.length-1);
            display.innerText = value;
            if (value.length == 0) {
                display.innerText = "0";
                value = "";
            }
        } else {
            value += ele.innerText;
            display.innerText = value;
        }
    })
})