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
  const createJobDivTd = document.createElement("td");
  const createDescDivTd = document.createElement("td");
  const createDueDivTd = document.createElement("td");
  createJobDivTd.innerText = job.job;
  createJobDivTd.id = `job${i}`;
  createJobDivTd.value = i;
  createDescDivTd.innerText = job.desc;
  createDescDivTd.id = `desc${i}`;
  createDueDivTd.innerText = job.due;
  createDueDivTd.id = `due${i}`;
  createDueDivTd.customReference = `due`;
  createDivTr.appendChild(createJobDivTd);
  createDivTr.appendChild(createDescDivTd);
  createDivTr.appendChild(createDueDivTd);
}
