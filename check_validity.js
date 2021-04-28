import { slideFieldset } from "./fieldset_change.js";

export function checkFieldsetValidity() {
  checkingMakesValid();

  const currentFieldset = this.parentElement.parentElement;
  const checkedChildInputs = currentFieldset.querySelectorAll("input:checked");
  const instruction = currentFieldset.querySelector("h2");

  console.log(checkedChildInputs.length);
  if (checkedChildInputs.length === 0) {
    instruction.classList.remove("error");
    instruction.offsetHeight;
    instruction.classList.add("error");
  } else {
    instruction.classList.remove("error");
    slideFieldset(this);
  }
}

function checkingMakesValid() {
  //Clicking a checkbox will remove error-message
  const allCheckboxes = document.querySelectorAll("input[type=checkbox]");
  allCheckboxes.forEach((box) => {
    box.addEventListener("click", function () {
      const instruction = this.parentElement.parentElement.parentElement.querySelector("h2");
      instruction.classList.remove("error");
    });
  });
}
