let display2 = 0;
let display1 = 0;

const value2 = document.getElementById("display2");
const value1 = document.getElementById("display1");

const historyCalcu = document.getElementById("historyCalcu");

function displayAnzeigen() {
  value2.innerHTML = display2;
  value1.innerHTML = display1;
}

function input(number) {
  let text = String(number);

  if (display2 === 0) {
    display2 = number;
  } else {
    display2 += text;
  }
  displayAnzeigen();
}

function clearDisplay() {
  display2 = 0;
  display1 = "";
  value1.textContent = "";
  value2.textContent = "0";
  displayAnzeigen();
}

function plusDisplay() {
  if (display1 === 0) {
    display1 = display2 + "+";
  } else {
    let total = display1 + display2;
    let result = Function("return " + total)();
    display1 = result + "+";
    const addCalcu = document.createElement("li");
    addCalcu.textContent = `${total} = ${result}`;
    historyCalcu.appendChild(addCalcu);
  }
  display2 = 0;
  displayAnzeigen();
}

function minusDisplay() {
  if (display1 === 0) {
    display1 = display2 + "-";
  } else {
    let total = display1 + display2;
    let result = Function("return " + total)();
    display1 = result + "-";
    const addCalcu = document.createElement("li");
    addCalcu.textContent = `${total} = ${result}`;
    historyCalcu.appendChild(addCalcu);
  }
  display2 = 0;
  displayAnzeigen();
}

function multiDisplay() {
  if (display1 === 0) {
    display1 = display2 + "*";
  } else {
    let total = display1 + display2;
    let result = Function("return " + total)();
    display1 = result + "*";
    const addCalcu = document.createElement("li");
    addCalcu.textContent = `${total} = ${result}`;
    historyCalcu.appendChild(addCalcu);
  }
  display2 = 0;
  displayAnzeigen();
}
function divideDisplay() {
  if (display1 === 0) {
    display1 = display2 + "/";
  } else {
    let total = display1 + display2;
    let result = Function("return " + total)();
    display1 = result + "/";
    const addCalcu = document.createElement("li");
    addCalcu.textContent = `${total} = ${result}`;
    historyCalcu.appendChild(addCalcu);
  }
  display2 = 0;
  displayAnzeigen();
}

function equalDisplay() {
  display2 = Function("return " + display1 + display2)();
  display1 = "";
  displayAnzeigen();
}
