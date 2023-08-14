let calculation = "";
const calculationSpan = document.getElementById("calculation");
const css = document.getElementById("css");

function calculator(option) {
  if (option === "=") {
    calculation = eval(calculation);
  } else if (option === "clear") {
    calculation = "";
  } else if (option === "copy") {
    navigator.clipboard.writeText(calculation);
  } else if (option === "theme") {
    // Handle theme switching logic here
    // You can modify the CSS href based on the selected theme
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
  
  const dropdown = document.getElementById('dropdown');
  dropdown.addEventListener('change', function() {
    css.href = "themes/" + dropdown.value + ".css";
  });
});