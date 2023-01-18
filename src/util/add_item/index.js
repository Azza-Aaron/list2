//ADD ITEM BUTTON

function addItem() {
  const inputDiv = document.createElement("div");
  inputDiv.id = "inputDiv";
  inputDiv.classList.add("form-outline");
  jobInputDiv.replaceChildren();
  inputDiv.replaceChildren();
  jobInputDiv.appendChild(inputDiv);

  const jobInput = createInputs("label-input-job", "Job: ", "job");
  const descInput = createInputs("label-b", "Description: ", "description");
  const dateInput = createInputs("label-c", "DD/MM/YYYY: ", "date");

  //addListenInput(inputDiv, jobInput, descInput, dateInput);
  inputDiv.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      console.log(`firing`);
      inputFunction(jobInput, descInput, dateInput);
    }
  });
  //eventHandler(inputDiv, jobInput, descInput, dateInput);
}

function inputFunction(jobInput, descInput, dateInput) {
  if (!validateInputs(jobInput, descInput, dateInput)) {
    return;
  }

  myJobs.push({
    job: jobInput.value,
    desc: descInput.value,
    due: dateInput.value,
    isDateTrueFalse: validateDate(dateInput),
    status: defaultClassStatus.TASK, //urgent (td-urgent), due, done -- check howto enums
  });

  //ACTIVATE RENDER
  validateAllDates(myJobs);
  renderList();
}
