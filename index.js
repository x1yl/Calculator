let calculation = "";
const calculationSpan = document.getElementById("calculation");
function calculator(option) {
  if (option == "=") {
    calculation = eval(calculation);
  } else if (option == "clear") {
    calculation = "";
  } else if (option == "calculation") {
    navigator.clipboard.writeText(calculation);
  } else if (option == "theme") {
    ;
  } else {
    calculation += option;
  }
  calculationSpan.innerHTML = calculation;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      calculator(button.id);
    });
  });
});
document.getElementById("theme").addEventListener("click", function () {
  if (document.getElementById("css").href == location + "light.css") {
    document.getElementById("css").href = "dark.css";
    document.getElementById("theme").innerHTML = "Light Theme";
  } else {
    document.getElementById("css").href = "light.css";
    document.getElementById("theme").innerHTML = "Dark Theme";
  }
});