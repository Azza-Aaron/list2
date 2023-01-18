//PROCESS INPUTS
function createInputs(labelName, labelText, inputName) {
  let createLabel = document.createElement("label");
  let createInput = document.createElement("input");
  createLabel.id = labelName;
  createLabel.innerText = labelText;
  createInput.id = inputName;
  inputName.type = "text";
  createLabel.classList.add("labelInputs");
  createInput.classList.add("inputs");
  inputDiv.appendChild(createLabel);
  inputDiv.appendChild(createInput);
  return createInput;
}

//PROCESS INPUT TO ELEMENTS
function createTdElements(job, i, createDivTr) {
  tdElementShortcut(job.job, `job${i}`, i, createDivTr);
  tdElementShortcut(job.desc, `desc${i}`, i, createDivTr);
  tdElementShortcut(job.due, `due${i}`, i, createDivTr);
}

function tdElementShortcut(inputText, inputId, inputValue, createDivTr) {
  const element = document.createElement("td");
  element.innerText = inputText;
  element.id = inputId;
  element.value = inputValue;
  createDivTr.appendChild(element);
}
