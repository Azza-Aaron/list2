function validateInputs(jobInput, descInput, dateInput) {
  let inputs = [];
  inputs.push(testValue(jobInput));
  inputs.push(testValue(descInput));
  inputs.push(testValue(dateInput));
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i]) {
      return false;
    }
  }
  return true;
}

function validateDate(dateInput) {
  return moment(dateInput.value, formatOfDate).isValid(); //true//false
}

function testValue(input) {
  if (!input.value) {
    input.classList.add("emptyInput");
    return false;
  }
  return true;
}
