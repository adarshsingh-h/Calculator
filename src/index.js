let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let op1 = 0;
let op2 = null;
let op = null;
let result = null;

//When numbers goes Out of Range
function outOfRange() {
  let len = display.textContent.length;
  if (len > 11) {
    display.textContent = "Error!!!";
  }
}

//Traversing over the buttons array
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    //append - in front of a num, to make it negative
    if (value == "-" && display.textContent == "") {
      display.textContent += "-";
      op1 = parseFloat(display.textContent);

      //if its an operator
    } else if (value == "+" || value == "-" || value == "*" || value == "/") {
      //if value is an operator
      op = value;
      op1 = parseFloat(display.textContent);
      display.innerHTML = "";

      //finding percentage
    } else if (value == "%") {
      op2 = parseFloat(display.textContent);
      if (op2 == "0") {
        display.textContent = "Its Infinity!!!";
        return;
      }
      result = (op1 / op2) * 100;
      outOfRange(result);
      display.textContent = result;

      //getting result
    } else if (value == "=") {
      op2 = parseFloat(display.textContent);
      if (op == "+") {
        result = op1 + op2;
        display.textContent = result;
        outOfRange();
      } else if (op == "-") {
        result = op1 - op2;
        display.textContent = result;
      } else if (op == "*") {
        result = op1 * op2;
        display.textContent = result;
        outOfRange();
      } else if (op == "/") {
        if (op2 == "0") {
          display.textContent = "Its Infinity!!!";
          return;
        }
        result = op1 / op2;
        display.textContent = result;
      }

      //clear screen
    } else if (value == "AC") {
      display.textContent = "";
      op1 = 0;
      op2 = null;
      op = null;

      //change sign of a number
    } else if (value == "+/-") {
      if (display.textContent < "0") {
        let res = parseFloat(display.textContent);
        let ans = res - 2 * res;
        display.textContent = ans;
      } else {
        let res = parseFloat(display.textContent);
        let ans = res - 2 * res;
        display.textContent = ans;
      }

      //append numbers at the end
    } else {
      display.textContent += value;
      outOfRange();
    }
  });
}
